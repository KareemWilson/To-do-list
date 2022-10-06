import { saveAndRender } from './renderTasks.js';

const updateDescription = (id, updated, arr) => {
  arr[id].description = updated.value || updated;
  saveAndRender(arr);
};

export default updateDescription;
