import './style.css';
import { addBtn, input } from './modules/Constants.js';
import { renderTasks } from './modules/functions/renderTasks.js';
import addTask from './modules/functions/addTask.js';
import './modules/functions/ChangeDOM.js';
import removeTask from './modules/functions/removeTask.js';
import updateDescription from './modules/functions/updateDescription.js';
import clearAllCompleted from './modules/functions/clearAllCompleted.js';
import changeTaskStatus from './modules/functions/changeTaskStatus.js';

window.tasksArr = localStorage.length > 0 ? JSON.parse(localStorage.getItem('list')) : [];

renderTasks(window.tasksArr);

addBtn.addEventListener('click', () => addTask(input.value, window.tasksArr));

window.removeTask = (_id) => removeTask(_id);

window.updateDescription = (id, element) => updateDescription(id, element);

window.clearAllCompleted = () => clearAllCompleted();

window.changeTaskStatus = (id) => changeTaskStatus(id);