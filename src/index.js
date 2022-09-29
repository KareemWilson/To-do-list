import './style.css';

const tasks = document.querySelector('.tasks-list');
const addBtn = document.querySelector('.add');
const input = document.querySelector('.add-task');

let tasksArr = [];
if (localStorage.length > 0) {
  tasksArr = JSON.parse(localStorage.getItem('list'));
}

const renderTasks = (arr) => {
  if (arr.length !== 0) {
    const tasksHTML = arr.map(
      (task) => `<div class='task'>
              <div class='task-checkbox'>
                <input onChange="changeTaskStatus(${task.id})" class="checkbox" type='checkbox' id=${task.id} ${task.completed ? 'checked' : ''}/>
                <label for='task-one' class='label'>${task.description}</label>
              </div>
              <i class="fa-solid fa-trash delete" onclick="removeTask(${task.id})"></i>
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
  localStorage.setItem('list', JSON.stringify(arr));
  renderTasks(arr);
};

renderTasks(tasksArr);

window.removeTask = (_id) => {
  const updatedList = tasksArr.filter((task) => task.id !== _id);
  tasksArr = updatedList;
  if (tasksArr.length > 0) {
    for (let i = 0; i < tasksArr.length; i += 1) {
      tasksArr[i].id = i;
    };
  }
  saveAndRender(tasksArr);
};

const createTask = (task) => {
  const index = tasksArr.length;
  return {
    description: task,
    completed: false,
    id: index,
  }
};

addBtn.addEventListener('click', () => {
  if (input.value !== '') {
    const taskObj = createTask(input.value);
    tasksArr.push(taskObj);
    saveAndRender(tasksArr);
    input.value = '';
  }
});

window.changeTaskStatus = (id) => {
  console.log(id);
  tasksArr[id].completed = !tasksArr[id].completed;
  console.log("the array after updating status: ", tasksArr);
  saveAndRender(tasksArr);
};
