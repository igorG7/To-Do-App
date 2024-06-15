import { themeChange } from "./util/theme.js";

const theme_button = document.querySelector("#theme-button");
const input_create = document.querySelector("#input-create");
const ulViewTasks = document.querySelector(".view-tasks");
let tasks = Array.from(ulViewTasks.querySelectorAll("li"));

const bodyTheme = document.querySelector("body");

theme_button.addEventListener("click", themeChange);
console.log(tasks);

// localStorage.setItem("task", JSON.stringify(ulViewTasks))
// const storageTask = JSON.parse(localStorage.getItem("task"))
// console.log(storageTask)

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

    return this.liElement;
  }

  theme() {
    const verifyTheme = bodyTheme.classList.contains("dark") ? "dark" : "light";
    return verifyTheme;
  }

  createLi(themeClass) {
    const li = document.createElement("li");
    li.classList.add("task");
    li.classList.add("visible");
    li.classList.add("active");
    li.classList.add(themeClass);

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
      } else {
        this.liElement.classList.add("active");
        this.buttonCheckElement.classList.remove("check-active");
        this.paragraphElement.classList.remove("task-completed");
        this.liElement.classList.remove("completed");
      }
    });
  }

  deleteTask() {
    this.buttonDeleteElement.addEventListener("click", (event) => {
      event.target.parentElement.remove();
    });
  }
}

let teste = new Task("teste");
console.log(teste);
ulViewTasks.appendChild(teste);

const createTask = (content) => {
  const newTask = new Task(content);
  ulViewTasks.appendChild(newTask);
  tasks = Array.from(ulViewTasks.querySelectorAll("li"));
};

input_create.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    createTask(input_create.value);
    input_create.value = "";
  }
});

// ulViewTasks.addEventListener("click", (event) => {
//   const isDeleteAction = event.target.classList.contains("delete");
//   isDeleteAction ? removeTask(event) : controlStateTask(event);
// });

// const removeTask = (event) => {
//   const containsDelete = event.target.classList.contains("delete");
//   if (containsDelete) {
//     event.target.parentElement.remove();
//   }
// };

// const controlStateTask = (event) => {
//   const containsCheckButton = event.target.classList.contains("check-active");
//   const contaisPCompleted = event.target.classList.contains("task-completed");

//   const divParent = event.target.parentElement;
//   const stateLi = divParent.parentElement;
//   const buttonElement = divParent.querySelector("button");
//   const pElement = divParent.querySelector("p");
//   const preventErrorClick =
//     event.target.classList.contains("task") ||
//     event.target.classList.contains("view-tasks");

//   if (preventErrorClick) return;

//   if (!containsCheckButton && !contaisPCompleted) {
//     stateLi.classList.add("completed");
//     stateLi.classList.remove("active");
//     buttonElement.classList.add("check-active");
//     pElement.classList.add("task-completed");
//   } else {
//     stateLi.classList.remove("completed");
//     stateLi.classList.add("active");
//     buttonElement.classList.remove("check-active");
//     pElement.classList.remove("task-completed");
//   }
// };

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
};

clearButton.addEventListener("click", removeAllCompletedTasks);
