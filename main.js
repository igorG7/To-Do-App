import { themeChange } from "./util/theme.js";

const theme_button = document.querySelector("#theme-button");
const input_create = document.querySelector("#input-create");

theme_button.addEventListener("click", themeChange);

let contentTask;

input_create.addEventListener("input", (e) => {
  contentTask = e.target.value;

  console.log(contentTask);
});

input_create.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    allObj.push({ taskText: `${contentTask}`, status: "ativo" });
    console.log(allObj);
    input_create.value = "";
  }
});

let allObj = [
  {
    taskText: "Fazer almoço",
    status: "ativo",
  },

  {
    taskText: "Arrumar cama",
    status: "ativo",
  },
];
