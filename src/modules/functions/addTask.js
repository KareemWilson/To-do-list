import { input } from '../Constants.js';
import { saveAndRender } from './renderTasks.js';

const createTask = (task, index) => {
  const id = index;
  return {
    description: task,
    completed: false,
    id,
  };
};

const addTask = (value, arr) => {
  if (value !== '') {
    const taskObj = createTask(value, arr.length);
    arr.push(taskObj);
    saveAndRender(arr);
    input.value = '';
  }
};

export default addTask;