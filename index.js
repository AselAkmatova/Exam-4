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

taskForm.addEventListener('submit', (e) => {
  e.preventDefault();

  taskForm.classList.remove('task-form_opened');
  overlay.classList.remove('overlay_opened');

  const taskTitle = document.getElementById('task-title').value;
  const taskText = document.getElementById('task-text').value;

  const tasksBox = document.querySelector('.box');
  const task = document.createElement('div');
  task.classList.add('box__task');

  const checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  checkBox.classList.add('check-box');

  const trushIcon = document.createElement('a');
  trushIcon.classList.add('delete-icon');
  trushIcon.innerHTML = `<img  src="./images/delete.svg" alt="delete" />`;

  task.innerHTML = `
  <h3 class = "task__title">${taskTitle}</h3>
  <p class = "task__text">${taskText}</p>`;

  task.append(trushIcon);
  task.append(checkBox);

  tasksBox.prepend(task);
});
