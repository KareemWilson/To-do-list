import { tasks } from './Constants.js';

const renderTasks = (arr) => {
  if (arr.length !== 0) {
    const tasksHTML = arr.map(
      (task) => `<div class='task' data-id="${task.id}">
                    <div class='task-checkbox updated'>
                    <input class="checkbox normal-display" type='checkbox' id=${task.id} ${task.completed ? 'checked' : ''} onChange="changeTaskStatus(${task.id}, this)"/>
                    <label for='task-one' class='label ${task.completed ? 'completed' : ''} normal-display'>${task.description}</label>
                    <input class="add-task edit-display d-none" type='input' id=${task.id} value=${task.description} onchange="updateDescription(${task.id}, this)"/>
                </div>
                <div class="options">
                    <i class="fa-solid fa-circle-check edit-display d-none" onclick="editTask(${task.id})"></i>
                    <i class="fa-solid fa-pen-to-square normal-display" onclick="editTask(${task.id})"></i>
                    <i class="fa-solid fa-trash delete" onclick="removeTask(${task.id})"></i>
                </div>
              </div>
              <hr class='border' />`,
    );
    tasks.innerHTML = tasksHTML.join('');
  }
  if (arr.length === 0) {
    tasks.innerHTML = '';
  }
};

const saveAndRender = (arr) => {
  if (arr.length > 0) {
    for (let i = 0; i < arr.length; i += 1) {
      arr[i].id = i;
    }
  }
  localStorage.setItem('list', JSON.stringify(arr));
  renderTasks(arr);
};

export { renderTasks, saveAndRender };
