import { saveAndRender } from './renderTasks.js';

const removeTask = (_id, arr) => {
  const updatedList = arr.filter((task) => task.id !== _id);
  window.tasksArr = updatedList;
  saveAndRender(window.tasksArr);
};

export default removeTask;