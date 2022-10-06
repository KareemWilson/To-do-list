import './style.css';
import { addBtn, input } from './modules/Constants.js';
import { renderTasks } from './modules/renderTasks.js';
import addTask from './modules/addTask.js';
import './modules/ChangeDOM.js';
import removeTask from './modules/removeTask.js';
import updateDescription from './modules/updateDescription.js';
import clearAllCompleted from './modules/clearAllCompleted.js';
import changeTaskStatus from './modules/changeTaskStatus.js';

window.tasksArr = localStorage.length > 0 ? JSON.parse(localStorage.getItem('list')) : [];

renderTasks(window.tasksArr);

addBtn.addEventListener('click', () => addTask(input.value, window.tasksArr));

window.removeTask = (_id) => removeTask(_id);

window.updateDescription = (id, element) => updateDescription(id, element);

window.clearAllCompleted = () => clearAllCompleted();

window.changeTaskStatus = (id) => changeTaskStatus(id);