const btnFormOpen = document.querySelector('.btn-open-form');
const taskForm = document.querySelector('.task-form');
const overlay = document.querySelector('.overlay');
const btnFormClose = document.querySelector('.btn-close');
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

  if (taskTitle == '') {
    alert('Пожалуйста заполните поле заголовка');
    taskForm.classList.add('task-form_opened');
    return;
  }

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

  const taskName = document.querySelector('.task__title');

  checkBox.addEventListener('click', () => {
    if (checkBox.checked == true) {
      taskName.classList.add('task__title_checked');
    } else {
      taskName.classList.remove('task__title_checked');
    }
  });

  trushIcon.addEventListener('click', () => {
    const modalDelete = document.querySelector('.modal-delete');
    modalDelete.classList.add('modal-delete_opened');
    overlay.classList.add('overlay_opened');

    const finalDelete = document.querySelector('.final-delete');
    const cancelDelete = document.querySelector('.modal-delete__cancel');

    finalDelete.addEventListener('click', () => {
      task.style.display = 'none';
      modalDelete.classList.remove('modal-delete_opened');
      overlay.classList.remove('overlay_opened');
    });

    cancelDelete.addEventListener('click', () => {
      modalDelete.classList.remove('modal-delete_opened');
      overlay.classList.remove('overlay_opened');
    });

    overlay.addEventListener('click', () => {
      overlay.classList.remove('overlay_opened');
      modalDelete.classList.remove('modal-delete_opened');
    });

    const btnDeleteModalClose = document.querySelector(
      '.modal-delete-top__btn-close'
    );

    btnDeleteModalClose.addEventListener('click', () => {
      overlay.classList.remove('overlay_opened');
      modalDelete.classList.remove('modal-delete_opened');
    });
  });
});
