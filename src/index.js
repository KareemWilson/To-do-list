import './style.css';
import { addBtn, input } from './modules/Constants.js';
import { renderTasks, saveAndRender } from './modules/renderTasks.js';
import addTask from './modules/addTask.js';
import './modules/ChangeDOM.js';
import removeTask from './modules/removeTask.js';

// let tasksArr = [];
// if (localStorage.length > 0) {
//   tasksArr = JSON.parse(localStorage.getItem('list'));
// }
window.tasksArr = localStorage.length > 0 ? JSON.parse(localStorage.getItem('list')) : [];

renderTasks(window.tasksArr);
addBtn.addEventListener('click', () => addTask(input.value, window.tasksArr));

window.removeTask = (_id) => removeTask(_id);

window.updateDescription = (id, element) => {
  window.tasksArr[id].description = element.value;
  saveAndRender(window.tasksArr);
};

window.clearAllCompleted = () => {
  const updatedTasks = window.tasksArr.filter((elem) => !elem.completed);
  window.tasksArr = updatedTasks;
  saveAndRender(window.tasksArr);
};

window.changeTaskStatus = (id) => {
  window.tasksArr[id].completed = !window.tasksArr[id].completed;
  saveAndRender(window.tasksArr);
};