import { saveAndRender } from './renderTasks.js';

const removeTask = (_id) => {
  const updatedList = window.tasksArr.filter((task) => task.id !== _id);
  window.tasksArr = updatedList;
  saveAndRender(window.tasksArr);
};

export default removeTask;