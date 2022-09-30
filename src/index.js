import './style.css';
import { addBtn, input } from './modules/Constants.js';
import { renderTasks, saveAndRender } from './modules/renderTasks.js';
import { toggleDisplay, createTask } from './modules/utils.js';

let tasksArr = [];
if (localStorage.length > 0) {
  tasksArr = JSON.parse(localStorage.getItem('list'));
}

renderTasks(tasksArr);

window.removeTask = (_id) => {
  const updatedList = tasksArr.filter((task) => task.id !== _id);
  tasksArr = updatedList;
  saveAndRender(tasksArr);
};

addBtn.addEventListener('click', () => {
  if (input.value !== '') {
    const taskObj = createTask(input.value, tasksArr.length);
    tasksArr.push(taskObj);
    saveAndRender(tasksArr);
    input.value = '';
  }
});

window.editTask = (id) => {
  const normalDisplay = document.querySelector(`[data-id="${id}"]`).querySelectorAll('.normal-display');
  const editDisplay = document.querySelector(`[data-id="${id}"]`).querySelectorAll('.edit-display');
  toggleDisplay(normalDisplay, editDisplay);
};

window.updateDescription = (id, element) => {
  tasksArr[id].description = element.value;
  saveAndRender(tasksArr);
};
