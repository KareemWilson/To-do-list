import { saveAndRender } from './renderTasks.js';

const clearAllCompleted = (arr) => {
  const updatedTasks = arr.filter((elem) => !elem.completed);
  arr = updatedTasks;
  console.log('this is in the clear all completed function', arr);
  saveAndRender(arr);
};

export default clearAllCompleted;
