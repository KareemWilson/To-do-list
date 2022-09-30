import './style.css';

const tasks = document.querySelector('.tasks-list');
const addBtn = document.querySelector('.add');
const input = document.querySelector('.add-task');

let tasksArr = [];
if (localStorage.length > 0) {
  tasksArr = JSON.parse(localStorage.getItem('list'));
}

const renderTasks = (arr) => {
  if (arr.length !== 0) {
    const tasksHTML = arr.map(
      (task) => `<div class='task' data-id="${task.id}">
              <div class='task-checkbox updated'>
                <input onChange="changeTaskStatus(${task.id}, this)" class="checkbox normal-display" type='checkbox' id=${task.id} ${task.completed ? 'checked' : ''}/>
                <label for='task-one' class='label ${task.completed ? 'completed' : ''} normal-display'>${task.description}</label>
                <input class="add-task edit-display d-none" type='input' id=${task.id} value=${task.description} onchange="updateDescription(${task.id}, this)"/>
              </div>
              <div class="options">
                <i class="fa-solid fa-circle-check edit-display d-none" onclick="editTask(${task.id})"></i>
                <i class="fa-solid fa-pen-to-square normal-display" onclick="editTask(${task.id})"></i>
                <i class="fa-solid fa-trash delete" onclick="removeTask(${task.id})"></i>
              </div>
            </div>
            <hr class='border' />`,
    );
    tasks.innerHTML = tasksHTML.join('');
  }
  if (arr.length === 0) {
    tasks.innerHTML = '';
  }
};

const saveAndRender = (arr) => {
  if (arr.length > 0) {
    for (let i = 0; i < arr.length; i += 1) {
      arr[i].id = i;
    }
  }
  localStorage.setItem('list', JSON.stringify(arr));
  renderTasks(arr);
  console.log(arr);
};

renderTasks(tasksArr);

window.removeTask = (_id) => {
  const updatedList = tasksArr.filter((task) => task.id !== _id);
  tasksArr = updatedList;
  saveAndRender(tasksArr);
};

const createTask = (task) => {
  const index = tasksArr.length;
  return {
    description: task,
    completed: false,
    id: index,
  };
};

addBtn.addEventListener('click', () => {
  if (input.value !== '') {
    const taskObj = createTask(input.value);
    tasksArr.push(taskObj);
    saveAndRender(tasksArr);
    input.value = '';
  }
});

window.changeTaskStatus = (id) => {
  tasksArr[id].completed = !tasksArr[id].completed;
  saveAndRender(tasksArr);
};

window.clearAllCompleted = () => {
  const updatedTasks = tasksArr.filter((elem) => !elem.completed);
  tasksArr = updatedTasks;
  saveAndRender(tasksArr);
};

const toggleDisplay = (elemGroup1, elemGroup2) => {
  elemGroup1.forEach((elem) => {
    elem.classList.toggle('d-none');
  });
  elemGroup2.forEach((elem) => {
    elem.classList.toggle('d-none');
  });
};

window.editTask = (id) => {
  console.log(document.querySelector(`[data-id="${id}"]`));
  const normalDisplay = document.querySelector(`[data-id="${id}"]`).querySelectorAll('.normal-display');
  const editDisplay = document.querySelector(`[data-id="${id}"]`).querySelectorAll('.edit-display');
  toggleDisplay(normalDisplay, editDisplay);
};

window.updateDescription = (id, element) => {
  console.log(element.value);
  tasksArr[id].description = element.value;
  saveAndRender(tasksArr);
};