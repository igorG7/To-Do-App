import { themeChange } from "./util/theme.js";

const theme_button = document.querySelector("#theme-button");
const input_create = document.querySelector("#input-create");
const ulViewTasks = document.querySelector(".view-tasks")

const tasks = Array.from(document.querySelectorAll(".task"));
const task_content = Array.from(document.querySelectorAll(".task-content"));
const button_check = Array.from(document.querySelectorAll(".check-button"));
const img_check = Array.from(document.querySelectorAll(".check-img"));
const text_task = Array.from(document.querySelectorAll(".task-text"));

theme_button.addEventListener("click", themeChange);

let valueTask;

input_create.addEventListener("input", (e) => {
  valueTask = e.target.value;
  console.log(valueTask);
});

const createTask = () => {
  const newTask = ulViewTasks.querySelector("li").cloneNode(true)
  newTask.removeAttribute("style")
  newTask.querySelector("p").textContent = valueTask
  ulViewTasks.appendChild(newTask)
}

input_create.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    createTask()
    input_create.value = ""
  }
});

ulViewTasks.addEventListener("click", (event) => {
   console.log(event.target)
   const isDeleteAction = event.target.classList.contains("delete")
   isDeleteAction ? removeTask(event) : controlStateTask(event);
})

const removeTask = (event) => {
  const containsDelete = event.target.classList.contains("delete")
  if(containsDelete) console.log("Deletou task")
}

const controlStateTask = (event) => {
  const containsCheckButton = event.target.classList.contains("check-active")
  const contaisPCompleted =  event.target.classList.contains("task-completed")
  
  const divParent = event.target.parentElement
  const buttonElement = divParent.querySelector("button")
  const pElement = divParent.querySelector("p")

  if (!containsCheckButton && !contaisPCompleted) {
    console.log("Tarefa Completa")
    buttonElement.classList.add("check-active")
    pElement.classList.add("task-completed")
  
  } else { 
    console.log("Tarefa Ativa")
    buttonElement.classList.remove("check-active")
    pElement.classList.remove("task-completed")
    
  }
}

let allTasks = [
  {
    taskText: "Fazer almoço",
    status: "active",
  },

  {
    taskText: "Arrumar cama",
    status: "active",
  },
];
/*

tasks.map((item, index) => {
  let divTaskContent = item.children[0];
  let buttonX = item.children[1];

  console.log(divTaskContent, buttonX);

  divTaskContent.addEventListener("click", () => {
    let taskButtonCheck = divTaskContent.children[0];
    let taskParagraph = divTaskContent.children[1];
    let taskImgCheck = taskButtonCheck.children[0];
    let paragraphConverted = taskParagraph.textContent.toString();

    console.log(paragraphConverted);

    if (taskButtonCheck.classList.contains("check-active")) {
      console.log("Tarefa ativa novamente");
      taskButtonCheck.classList.remove("check-active");
      taskImgCheck.classList.remove("img-active");
      taskParagraph.classList.remove("task-completed");
      controlTasks(paragraphConverted);
    } else {
      console.log("Tarefa completa");
      taskButtonCheck.classList.add("check-active");
      taskImgCheck.classList.add("img-active");
      taskParagraph.classList.add("task-completed");
      controlTasks(paragraphConverted);
    }
  });

  buttonX.addEventListener("click", () => {
    console.log("deletou a tarefa " + index);
    allTasks.splice(index, 1);
    console.log(allTasks);
  });
});

const controlTasks = (contentText) => {
  let searchTask = contentText;
  let foundTask = allTasks.find((item) => item.taskText === searchTask);

  console.log(foundTask);

  if (foundTask && foundTask.status === "active") {
    foundTask.status = "completed";
  } else {
    foundTask.status = "active";
  }

  console.log(allTasks);
}; */
