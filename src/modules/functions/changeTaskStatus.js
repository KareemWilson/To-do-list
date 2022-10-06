import { saveAndRender } from './renderTasks.js';

const changeTaskStatus = (id, arr) => {
  arr[id].completed = !arr[id].completed;
  saveAndRender(arr);
};

export default changeTaskStatus;