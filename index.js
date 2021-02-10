const btnFormOpen = document.querySelector('.btn-open-form');
const taskForm = document.querySelector('.task-form');
const overlay = document.querySelector('.overlay');
const btnFormClose = document.querySelector('.task-form-top__btn-close');
const btnFormCancel = document.querySelector('#task-cancel');

btnFormOpen.addEventListener('click', () => {
  taskForm.classList.add('task-form_opened');
  overlay.classList.add('overlay_opened');

  overlay.addEventListener('click', () => {
    taskForm.classList.remove('task-form_opened');
    overlay.classList.remove('overlay_opened');
  });

  btnFormClose.addEventListener('click', () => {
    taskForm.classList.remove('task-form_opened');
    overlay.classList.remove('overlay_opened');
  });

  btnFormCancel.addEventListener('click', () => {
    taskForm.classList.remove('task-form_opened');
    overlay.classList.remove('overlay_opened');
  });
});
