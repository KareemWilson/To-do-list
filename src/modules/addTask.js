import { input } from './Constants.js';
import { saveAndRender } from './renderTasks.js';
import { createTask } from './utils.js';

const addTask = (value, arr) => {
  if (value !== '') {
    const taskObj = createTask(value, arr.length);
    arr.push(taskObj);
    saveAndRender(arr);
    input.value = '';
  }
};

export default addTask;