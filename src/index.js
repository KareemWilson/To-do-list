import "./style.css";

const tasks = document.querySelector(".tasks-list");
const addBtn = document.querySelector(".add");
const input = document.querySelector(".add-task");

const tasksArr = [
  {
    index: 1,
    description: "this is task #1",
    completed: true,
  },
  {
    index: 2,
    description: "this is task #2",
    completed: false,
  },
  {
    index: 3,
    description: "this is task #3",
    completed: false,
  },
];

const renderTasks = () => {
  if (tasksArr.length != 0) {
    const tasksHTML = tasksArr.map(
      (task) =>
        `<div class="task">
              <div class="task-checkbox">
                <input type="checkbox" id="task-one" ${
                  task.completed ? "checked" : ""
                }/>
                <label for="task-one" class="label">${task.description}</label>
              </div>
              <a href="" class="options">
                <i class="fa-solid fa-circle-chevron-down"></i>
              </a>
            </div>
            <hr class="border" />`
    );
    tasks.innerHTML = tasksHTML.join("");
  }
};

renderTasks();
