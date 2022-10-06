import { saveAndRender } from './renderTasks.js';

const removeTask = (_id, arr) => {
  const updatedList = arr.filter((task) => task.id !== _id);
  arr = updatedList;
  saveAndRender(arr);
};

export default removeTask;