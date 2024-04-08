import { themeChange } from "./util/theme.js";

const theme_button = document.querySelector("#theme-button");
const input_create = document.querySelector("#input-create");
const ulViewTasks = document.querySelector(".view-tasks")

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
  if(containsDelete) {
    event.target.parentElement.remove()
    console.log("Deletou task")
  }
}

const controlStateTask = (event) => {
  const containsCheckButton = event.target.classList.contains("check-active")
  const contaisPCompleted =  event.target.classList.contains("task-completed")
  
  const divParent = event.target.parentElement
  const stateLi = divParent.parentElement
  const buttonElement = divParent.querySelector("button")
  const pElement = divParent.querySelector("p")

  const preventErrorClick = event.target.classList.contains("task")
  if (preventErrorClick) return

  if (!containsCheckButton && !contaisPCompleted) {
    console.log("Tarefa Completa", stateLi)
    stateLi.classList.add("completed")
    stateLi.classList.remove("active")
    buttonElement.classList.add("check-active")
    pElement.classList.add("task-completed")
  
  } else { 
    console.log("Tarefa Ativa", stateLi)
    stateLi.classList.remove("completed")
    stateLi.classList.add("active")
    buttonElement.classList.remove("check-active")
    pElement.classList.remove("task-completed")

  }
}

const optionViewButton = Array.from(document.querySelectorAll(".option"))

let itemAttribute;
let itemActive;

optionViewButton.map((item) => {
  item.addEventListener("click" , (event) => {
    itemAttribute = event.target.getAttribute("data-option")

    optionViewButton.map((item) => {
      itemActive = item.getAttribute("data-option")
      const equalItems = itemAttribute === itemActive
      if(equalItems) {
        item.classList.add("view-active")
      } else {
        item.classList.remove("view-active")
      }
    })
  })
})