import { toggleDisplay } from './utils.js';

window.editTask = (id) => {
  const normalDisplay = document
    .querySelector(`[data-id='${id}']`)
    .querySelectorAll('.normal-display');
  const editDisplay = document
    .querySelector(`[data-id='${id}']`)
    .querySelectorAll('.edit-display');
  toggleDisplay(normalDisplay, editDisplay);
};
