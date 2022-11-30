import './style.css';
import { addBtn, input } from './modules/Constants.js';
import { renderTasks } from './modules/functions/renderTasks.js';
import './modules/functions/ChangeDOM.js';
import addTask from './modules/functions/addTask.js';
import removeTask from './modules/functions/removeTask.js';
import updateDescription from './modules/functions/updateDescription.js';
import clearAllCompleted from './modules/functions/clearAllCompleted.js';
import changeTaskStatus from './modules/functions/changeTaskStatus.js';

const tasksArray = localStorage.length > 0 ? JSON.parse(localStorage.getItem('list')) : [];
window.tasksArr = tasksArray;

renderTasks(window.tasksArr);

addBtn.addEventListener('click', () => {
  addTask(input.value, window.tasksArr);
  input.value = '';
});

window.removeTask = (id, arr) => removeTask(id, arr);

window.updateDescription = (id, element, arr) => updateDescription(id, element, arr);

window.clearAllCompleted = (arr) => clearAllCompleted(arr);

window.changeTaskStatus = (id, arr) => changeTaskStatus(id, arr);
