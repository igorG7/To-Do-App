const body_theme = document.querySelector("#body-theme");
const create_task = document.querySelector("#create-task");
const circle = document.querySelector("#circle");
const input_create = document.querySelector("#input-create");
const task_list = document.querySelector("#task-list");
const items_left = document.querySelector("#items-left");
const btn_view_desk = Array.from(
  document.querySelectorAll(".view-button-desktop")
);
const clear_button = document.querySelector("#clear-button");
const view_option = document.querySelector("#view-option");
const btn_view_mobile = Array.from(document.querySelectorAll(".view-button"));
const description = document.querySelector("#description");
const pic_dark = document.querySelector("#pic-dark");
const pic_light = document.querySelector("#pic-light");
const dark = document.querySelector("#dark-theme");
const light = document.querySelector("#light-theme");

export const themeChange = () => {
  if (dark.classList.contains("theme-disabled")) {
    darkTheme();
  } else {
    lightTheme();
  }
};

const darkTheme = () => {
  dark.classList.remove("theme-disabled");
  light.classList.add("theme-disabled");

  pic_dark.classList.remove("picture-disabled");
  pic_light.classList.add("picture-disabled");

  body_theme.classList.remove("light");
  body_theme.classList.add("dark");

  create_task.classList.remove("light");
  create_task.classList.add("dark");

  circle.classList.remove("light");
  circle.classList.add("dark");

  body_theme.classList.remove("light");
  body_theme.classList.add("dark");

  input_create.classList.remove("light");
  input_create.classList.add("dark");

  task_list.classList.remove("light");
  task_list.classList.add("dark");

  const task = Array.from(document.querySelectorAll(".task"));
  task.map((item) => {
    item.classList.remove("light");
    item.classList.add("dark");
  });

  const check_button = Array.from(document.querySelectorAll(".check-button"));
  check_button.map((item) => {
    item.classList.remove("light");
    item.classList.add("dark");
  });

  const task_text = Array.from(document.querySelectorAll(".task-text"));
  task_text.map((item) => {
    item.classList.remove("light");
    item.classList.add("dark");
  });

  items_left.classList.remove("light");
  items_left.classList.add("dark");

  btn_view_desk.map((item) => {
    item.classList.remove("light");
    item.classList.add("dark");
  });

  clear_button.classList.remove("light");
  clear_button.classList.add("dark");

  view_option.classList.remove("light");
  view_option.classList.add("dark");

  btn_view_mobile.map((item) => {
    item.classList.remove("light");
    item.classList.add("dark");
  });

  description.classList.remove("light");
  description.classList.add("dark");
};

const lightTheme = () => {
  dark.classList.add("theme-disabled");
  light.classList.remove("theme-disabled");

  pic_light.classList.remove("picture-disabled");
  pic_dark.classList.add("picture-disabled");

  body_theme.classList.remove("dark");
  body_theme.classList.add("light");

  create_task.classList.remove("dark");
  create_task.classList.add("light");

  circle.classList.remove("dark");
  circle.classList.add("light");

  body_theme.classList.remove("dark");
  body_theme.classList.add("light");

  input_create.classList.remove("dark");
  input_create.classList.add("light");

  task_list.classList.remove("dark");
  task_list.classList.add("light");

  const task = Array.from(document.querySelectorAll(".task"));
  task.map((item) => {
    item.classList.remove("dark");
    item.classList.add("light");
  });

  const check_button = Array.from(document.querySelectorAll(".check-button"));
  check_button.map((item) => {
    item.classList.remove("dark");
    item.classList.add("light");
  });

  const task_text = Array.from(document.querySelectorAll(".task-text"));
  task_text.map((item) => {
    item.classList.remove("dark");
    item.classList.add("light");
  });

  items_left.classList.remove("dark");
  items_left.classList.add("light");

  btn_view_desk.map((item) => {
    item.classList.remove("dark");
    item.classList.add("light");
  });

  clear_button.classList.remove("dark");
  clear_button.classList.add("light");

  view_option.classList.remove("dark");
  view_option.classList.add("light");

  btn_view_mobile.map((item) => {
    item.classList.remove("dark");
    item.classList.add("light");
  });

  description.classList.remove("dark");
  description.classList.add("light");
};
