let mockedArr = [
  {
    description: 'task 1',
    completed: false,
    id: 1,
  },
  {
    description: 'task 2',
    completed: false,
    id: 2,
  },
  {
    description: 'task 3',
    completed: false,
    id: 3,
  },
  {
    description: 'task 4',
    completed: false,
    id: 4,
  },
];

const removeTask = (_id) => {
  const updatedList = mockedArr.filter((task) => task.id !== _id);
  mockedArr = updatedList;
  localStorage.setItem('list', JSON.stringify(mockedArr));
  return mockedArr;
};

describe('Check Functionality', () => {
  window.localStorage = Storage.prototype;
  //   document.body.innerHTML = `<div class='tasks-list'></div>`;
  test('remove', () => {
    localStorage.setItem('list', JSON.stringify(mockedArr));
    expect(removeTask(1)).toStrictEqual([
      {
        description: 'task 2',
        completed: false,
        id: 2,
      },
      {
        description: 'task 3',
        completed: false,
        id: 3,
      },
      {
        description: 'task 4',
        completed: false,
        id: 4,
      },
    ]);
  });
});
