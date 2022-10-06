import { saveAndRender } from './renderTasks.js';

const changeTaskStatus = (id) => {
  window.tasksArr[id].completed = !window.tasksArr[id].completed;
  saveAndRender(window.tasksArr);
};

export default changeTaskStatus;