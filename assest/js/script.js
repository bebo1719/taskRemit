dayjs.extend(dayjs_plugin_customParseFormat);

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let nextId = JSON.parse(localStorage.getItem('nextId')) || 1;

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
  localStorage.setItem('nextId', JSON.stringify(nextId));
}

function renderTask(task) {
  const deadline = dayjs(task.deadline, 'YYYY-MM-DD');
  const now = dayjs();
  let taskClass = '';
  if (deadline.isBefore(now, 'day')) {
    taskClass = 'overdue';
  } else if (deadline.isBefore(now.add(3, 'day'), 'day')) {
    taskClass = 'near-deadline';
  }

  return $(`
    <div class="task ${taskClass}" data-id="${task.id}">
      <h5>${task.title}</h5>
      <p>${task.description}</p>
      <p><strong>Deadline:</strong> ${task.deadline}</p>
      <button class="btn btn-danger btn-sm btn-delete">Delete</button>
    </div>
  `).appendTo(`#${task.status}`);
}

function renderTasks() {
  $('.lane').empty();
  tasks.forEach(task => renderTask(task));
  $('.task').draggable({
    revert: 'invalid',
    containment: 'document',
    helper: 'clone',
    cursor: 'move'
  });
}

function handleDrop(event, ui) {
  const taskId = ui.draggable.data('id');
  const newStatus = $(this).attr('id');
  const task = tasks.find(t => t.id === taskId);
  task.status = newStatus;
  saveTasks();
  renderTasks();
}

$(document).ready(function() {
  renderTasks();

  $('.lane').droppable({
    accept: '.task',
    drop: handleDrop
  });

  $('#taskForm').on('submit', function(event) {
    event.preventDefault();
    const title = $('#taskTitle').val();
    const description = $('#taskDescription').val();
    const deadline = $('#taskDeadline').val();
    const task = {
      id: nextId++,
      title,
      description,
      deadline,
      status: 'not-started'
    };
    tasks.push(task);
    saveTasks();
    renderTasks();
    $('#formModal').modal('hide');
    this.reset();
  });

  $(document).on('click', '.btn-delete', function() {
    const taskId = $(this).parent().data('id');
    tasks = tasks.filter(task => task.id !== taskId);
    saveTasks();
    renderTasks();
  });
});
