const toggleDisplay = (elemGroup1, elemGroup2) => {
  elemGroup1.forEach((elem) => {
    elem.classList.toggle('d-none');
  });
  elemGroup2.forEach((elem) => {
    elem.classList.toggle('d-none');
  });
};

window.editTask = (id) => {
  const normalDisplay = document
    .querySelector(`[data-id='${id}']`)
    .querySelectorAll('.normal-display');
  const editDisplay = document
    .querySelector(`[data-id='${id}']`)
    .querySelectorAll('.edit-display');
  toggleDisplay(normalDisplay, editDisplay);
};
