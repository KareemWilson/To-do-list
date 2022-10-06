import removeTask from './functions/removeTask.js';
import addTask from './functions/addTask.js';

jest.mocked('./functions/addTask.js');

document.body.innerHTML = ` <div class='container'>
<h1 class='title'>My Demo TO-DO</h1>
<hr class='border' />
<div class='input-field'>
  <input type='text' class='add-task' placeholder='Add to your list...' />
  <i class='fa-solid fa-circle-plus add'></i>
</div>
<hr class='border' />
<div class='tasks-list'></div>
<a class='clear' onclick='clearAllCompleted()'>Clear all completed</a>
</div>`;

describe('check Functionality', () => {
  const arr = [];
  const tasks = document.querySelector('.tasks-list');
  test('should add task from array', () => {
    addTask('This is the first task ', arr);
    addTask('This is the second task', arr);
    expect(tasks.childElementCount).toBe(4);
  });
  test('should remove task from array', () => {
    removeTask(1, arr);
    expect(tasks.childElementCount).toBe(2);
  });
});
