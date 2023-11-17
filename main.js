import { themeChange } from "./util/theme.js";

const theme_button = document.querySelector("#theme-button");
const input_create = document.querySelector("#input-create");

const tasks = Array.from(document.querySelectorAll(".task"));
const task_content = Array.from(document.querySelectorAll(".task-content"));
const button_check = Array.from(document.querySelectorAll(".check-button"));
const img_check = Array.from(document.querySelectorAll(".check-img"));
const text_task = Array.from(document.querySelectorAll(".task-text"));

theme_button.addEventListener("click", themeChange);

let contentTask;

input_create.addEventListener("input", (e) => {
  contentTask = e.target.value;

  console.log(contentTask);
});

input_create.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    allTasks.push({ taskText: `${contentTask}`, status: "ativo" });
    console.log(allTasks);
    input_create.value = "";
  }
});

let allTasks = [
  {
    taskText: "Fazer almoço",
    status: "ativo",
  },

  {
    taskText: "Arrumar cama",
    status: "ativo",
  },
];

tasks.map((item, index) => {
  let divTaskContent = item.children[0];
  let buttonX = item.children[1];

  console.log(divTaskContent, buttonX);

  divTaskContent.addEventListener("click", () => {
    console.log("completou a tarefa " + index);

    let taskButtonCheck = divTaskContent.children[0];
    let taskParagraph = divTaskContent.children[1];

    let taskImgCheck = taskButtonCheck.children[0];

    console.log(taskButtonCheck, taskParagraph);

    if (taskButtonCheck.classList.contains("check-active")) {
      console.log("Tarefa ativa novamente");
      taskButtonCheck.classList.remove("check-active");
      taskImgCheck.classList.remove("img-active");
      taskParagraph.classList.remove("task-completed");
    } else {
      console.log("Tarefa completa");
      taskButtonCheck.classList.add("check-active");
      taskImgCheck.classList.add("img-active");
      taskParagraph.classList.add("task-completed");
    }
  });

  buttonX.addEventListener("click", () => {
    console.log("deletou a tarefa " + index);
  });
});
