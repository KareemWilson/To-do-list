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
                <input onChange="changeTaskStatus(${task.id}, this)" class="checkbox" type='checkbox' id=${task.id} ${task.completed ? 'checked' : ''}/>
                <label for='task-one' class='label ${task.completed ? 'completed' : ''}'>${task.description}</label>
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
  if (arr.length > 0) {
    for (let i = 0; i < arr.length; i += 1) {
      arr[i].id = i;
    }
  }
  localStorage.setItem('list', JSON.stringify(arr));
  renderTasks(arr);
  console.log(arr);
};

renderTasks(tasksArr);

window.removeTask = (_id) => {
  const updatedList = tasksArr.filter((task) => task.id !== _id);
  tasksArr = updatedList;
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

window.changeTaskStatus = (id, task) => {
  console.log(document.getElementById(id).nextElementSibling);
  tasksArr[id].completed = !tasksArr[id].completed;
  console.log("the array after updating status: ", tasksArr);
  saveAndRender(tasksArr);
};

window.clearAllCompleted = () => {
  const updatedTasks = tasksArr.filter((elem) => !elem.completed);
  tasksArr = updatedTasks;
  saveAndRender(tasksArr);
};
