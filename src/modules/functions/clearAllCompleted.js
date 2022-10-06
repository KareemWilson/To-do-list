import { saveAndRender } from './renderTasks.js';

const clearAllCompleted = () => {
  const updatedTasks = window.tasksArr.filter((elem) => !elem.completed);
  window.tasksArr = updatedTasks;
  saveAndRender(window.tasksArr);
};

export default clearAllCompleted;
