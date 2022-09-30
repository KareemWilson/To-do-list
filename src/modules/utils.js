const toggleDisplay = (elemGroup1, elemGroup2) => {
  elemGroup1.forEach((elem) => {
    elem.classList.toggle('d-none');
  });
  elemGroup2.forEach((elem) => {
    elem.classList.toggle('d-none');
  });
};

const createTask = (task, index) => {
  const id = index;
  return {
    description: task,
    completed: false,
    id,
  };
};

export { toggleDisplay, createTask };
