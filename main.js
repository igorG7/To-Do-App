import { themeChange } from "./util/theme.js";

const theme_button = document.querySelector("#theme-button");
const input_create = document.querySelector("#input-create");
const ulViewTasks = document.querySelector(".view-tasks");
let tasks = Array.from(ulViewTasks.querySelectorAll("li"));

const bodyTheme = document.querySelector("body");

theme_button.addEventListener("click", themeChange);

let storedTasks = JSON.parse(localStorage.getItem("taskElement")) || [];

class Task {
  constructor(content) {
    const activeTheme = this.theme();

    this.liElement = this.createLi(activeTheme);
    this.divElement = this.createDiv();
    this.buttonCheckElement = this.createButton("check-button", activeTheme);
    this.paragraphElement = this.createTextTask(activeTheme);
    this.paragraphElement.textContent = content;
    this.buttonDeleteElement = this.createButton("x-button", "delete");

    this.divElement.appendChild(this.buttonCheckElement);
    this.divElement.appendChild(this.paragraphElement);

    this.liElement.appendChild(this.divElement);
    this.liElement.appendChild(this.buttonDeleteElement);

    this.controlTasks();
    this.deleteTask();
  }

  theme() {
    const verifyTheme = bodyTheme.classList.contains("dark") ? "dark" : "light";
    return verifyTheme;
  }

  createLi(themeClass) {
    const li = document.createElement("li");
    li.classList.add("task");
    li.classList.add("visible");
    li.classList.add(themeClass);
    li.setAttribute("draggable", "true");

    return li;
  }

  createDiv() {
    const div = document.createElement("div");
    div.classList.add("task-content");
    return div;
  }

  createTextTask(themeClass) {
    const p = document.createElement("p");
    p.classList.add("task-text");
    p.classList.add(themeClass);
    return p;
  }

  createButton(firstClass, secondClass) {
    const button = document.createElement("button");
    button.classList.add(firstClass);
    button.classList.add(secondClass);

    return button;
  }

  controlTasks() {
    this.divElement.addEventListener("click", () => {
      if (this.liElement.classList.contains("active")) {
        this.liElement.classList.add("completed");
        this.buttonCheckElement.classList.add("check-active");
        this.paragraphElement.classList.add("task-completed");
        this.liElement.classList.remove("active");
        this.storeChanges(this.paragraphElement.textContent);
      } else {
        this.liElement.classList.add("active");
        this.buttonCheckElement.classList.remove("check-active");
        this.paragraphElement.classList.remove("task-completed");
        this.liElement.classList.remove("completed");
        this.storeChanges(this.paragraphElement.textContent);
      }
    });
  }

  deleteTask() {
    this.buttonDeleteElement.addEventListener("click", (event) => {
      event.target.parentElement.remove();
      let taskTextContent = this.paragraphElement.textContent;
      let foundTask = storedTasks.filter(
        (item) => item.text != taskTextContent
      );
      storedTasks = foundTask;
      localStorage.setItem("taskElement", JSON.stringify(storedTasks));
    });
  }

  defineStatus(status) {
    this.liElement.classList.add(status);
    let verifyStatus = this.liElement.classList.contains("active");
    if (!verifyStatus) {
      this.buttonCheckElement.classList.add("check-active");
      this.paragraphElement.classList.add("task-completed");
    }
  }

  storeTasks(content) {
    storedTasks.push({
      text: content,
      status: "active",
    });

    localStorage.setItem("taskElement", JSON.stringify(storedTasks));
  }

  storeChanges(content) {
    let foundTask = storedTasks.find((item) => item.text === content);
    if (foundTask.status === "active") {
      foundTask.status = "completed";
    } else {
      foundTask.status = "active";
    }

    localStorage.setItem("taskElement", JSON.stringify(storedTasks));
  }
}

function addDraggingEvent() {
  tasks.forEach((item) => {
    item.addEventListener("dragstart", () => {
      item.classList.add("dragging");
    });

    item.addEventListener("dragend", () => {
      item.classList.remove("dragging");
    });
  });
}

const createTask = (content) => {
  const newTask = new Task(content);
  newTask.defineStatus("active");
  newTask.storeTasks(content);
  ulViewTasks.appendChild(newTask.liElement);
  tasks = Array.from(ulViewTasks.querySelectorAll("li"));
  addDraggingEvent();
};

input_create.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    createTask(input_create.value);
    input_create.value = "";
  }
});

const optionViewButton = Array.from(document.querySelectorAll(".option"));

let itemAttribute;
let itemActive;

optionViewButton.map((item) => {
  item.addEventListener("click", (event) => {
    itemAttribute = event.target.getAttribute("data-option");

    optionViewButton.map((item) => {
      itemActive = item.getAttribute("data-option");
      const equalItems = itemAttribute === itemActive;
      if (equalItems) {
        item.classList.add("view-active");
      } else {
        item.classList.remove("view-active");
      }
    });

    renderOptionViewSelected(itemAttribute);
  });
});

const renderOptionViewSelected = (option) => {
  option === "all" ? renderAllTasks() : renderActiveOrCompleted(option);
};

const renderActiveOrCompleted = (valueOption) => {
  tasks.map((item) => {
    if (item.classList.contains(valueOption)) {
      item.classList.remove("hidden");
      item.classList.add("visible");
    } else {
      item.classList.add("hidden");
      item.classList.remove("visible");
    }
  });
};

const renderAllTasks = () => {
  tasks.map((item) => {
    item.classList.remove("hidden");
    item.classList.add("visible");
  });
};

const clearButton = document.querySelector("#clear-button");

const removeAllCompletedTasks = () => {
  tasks.map((item) => {
    const isCompleted = item.classList.contains("completed");
    if (isCompleted) {
      item.remove();
    }
  });

  let foundAllCompletedTasks = storedTasks.filter(
    (item) => item.status != "completed"
  );
  console.log(foundAllCompletedTasks);
  storedTasks = foundAllCompletedTasks;
  localStorage.setItem("taskElement", JSON.stringify(storedTasks));
};

clearButton.addEventListener("click", removeAllCompletedTasks);

storedTasks.forEach((item) => {
  let retrievedTask = new Task(item.text);
  retrievedTask.defineStatus(item.status);
  ulViewTasks.appendChild(retrievedTask.liElement);
});

tasks = Array.from(ulViewTasks.querySelectorAll("li"));

addDraggingEvent();

function startSortableList(e) {
  const draggingItem = ulViewTasks.querySelector(".dragging");
  const siblings = [...ulViewTasks.querySelectorAll(".task:not(.dragging)")];
  e.preventDefault();

  let nextSibling = siblings.find((item) => {
    return e.clientY <= item.offsetTop + item.offsetHeight / 2;
  });

  ulViewTasks.insertBefore(draggingItem, nextSibling);
}

function saveNewOrder() {
  tasks = Array.from(ulViewTasks.querySelectorAll("li"));
  storedTasks = [];

  tasks.forEach((item) => {
    let taskText = item.querySelector("p").textContent;
    let statusTask = item.classList.contains("active") ? "active" : "completed";

    storedTasks.push({
      text: taskText,
      status: statusTask,
    });
  });

  localStorage.setItem("taskElement", JSON.stringify(storedTasks));
}

ulViewTasks.addEventListener("dragover", startSortableList);
ulViewTasks.addEventListener("drop", saveNewOrder);
