import { saveAndRender } from './renderTasks.js';

const updateDescription = (id, element) => {
  window.tasksArr[id].description = element.value;
  saveAndRender(window.tasksArr);
};

export default updateDescription;
