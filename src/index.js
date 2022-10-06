import './style.css';
import { addBtn, input } from './modules/Constants.js';
import { renderTasks, saveAndRender } from './modules/renderTasks.js';
import addTask from './modules/addTask.js';
import './modules/ChangeDOM.js';

let tasksArr = [];
if (localStorage.length > 0) {
  tasksArr = JSON.parse(localStorage.getItem('list'));
}

renderTasks(tasksArr);
addBtn.addEventListener('click', () => addTask(input.value, tasksArr));

window.removeTask = (_id) => {
  const updatedList = tasksArr.filter((task) => task.id !== _id);
  tasksArr = updatedList;
  saveAndRender(tasksArr);
};

window.updateDescription = (id, element) => {
  tasksArr[id].description = element.value;
  saveAndRender(tasksArr);
};

window.clearAllCompleted = () => {
  const updatedTasks = tasksArr.filter((elem) => !elem.completed);
  tasksArr = updatedTasks;
  saveAndRender(tasksArr);
};

window.changeTaskStatus = (id) => {
  tasksArr[id].completed = !tasksArr[id].completed;
  saveAndRender(tasksArr);
};