import { themeChange } from "./util/theme.js";

const theme_button = document.querySelector("#theme-button");
const input_create = document.querySelector("#input-create");
const ulViewTasks = document.querySelector(".view-tasks")
let tasks = Array.from(ulViewTasks.querySelectorAll("li"))

theme_button.addEventListener("click", themeChange);

const createTask = () => {
  const newTask = ulViewTasks.querySelector("li").cloneNode(true)
  let valueTask = input_create.value
  newTask.removeAttribute("style")
  newTask.querySelector("p").textContent = valueTask
  ulViewTasks.appendChild(newTask)
  tasks = Array.from(ulViewTasks.querySelectorAll("li"))
}

input_create.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    createTask()
    input_create.value = ""
  }
});

ulViewTasks.addEventListener("click", (event) => {
   const isDeleteAction = event.target.classList.contains("delete")
   isDeleteAction ? removeTask(event) : controlStateTask(event);
})

const removeTask = (event) => {
  const containsDelete = event.target.classList.contains("delete")
  if(containsDelete) {
    event.target.parentElement.remove()
  }
}

const controlStateTask = (event) => {
  const containsCheckButton = event.target.classList.contains("check-active")
  const contaisPCompleted =  event.target.classList.contains("task-completed")
  
  console.log(event.target)
  
  const divParent = event.target.parentElement
  const stateLi = divParent.parentElement
  const buttonElement = divParent.querySelector("button")
  const pElement = divParent.querySelector("p")
  const preventErrorClick = event.target.classList.contains("task")
  if (preventErrorClick) return

  if (!containsCheckButton && !contaisPCompleted) {
    stateLi.classList.add("completed")
    stateLi.classList.remove("active")
    buttonElement.classList.add("check-active")
    pElement.classList.add("task-completed")
  } else { 
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

    renderOptionViewSelected(itemAttribute)
  })
})

const renderOptionViewSelected = (option) => {
  option === "all" 
  ? renderAllTasks() 
  : renderActiveOrCompleted(option)
}

const renderActiveOrCompleted = (valueOption) => {
  tasks.map((item) => {
    if(item.classList.contains(valueOption)) {
      item.classList.remove("hidden")
      item.classList.add("visible")
    } else {
      item.classList.add("hidden")
      item.classList.remove("visible")
    }
})
}

const renderAllTasks = () => {
  tasks.map((item) =>{
    item.classList.remove("hidden")
    item.classList.add("visible")
  })
}