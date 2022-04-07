const newTaskForm = document.getElementById('new-task-form');
const tasksList = document.getElementById('tasks-list');

const tasks = [];

const updateList = () => {
  console.log('updateList', tasks);

  const listItem = document.createElement('li');
  listItem.textContent = '';
}

const handleSubmit = (event) => {
  event.preventDefault();

  const formData = new FormData(newTaskForm);
  const formEntries = Object.fromEntries(formData);

  const newTask = {
    id: tasks.length,
    title: formEntries.title,
    description: formEntries.description,
    isDone: false
  }

  tasks.push(newTask);
  updateList();
}

newTaskForm.addEventListener('submit', handleSubmit);

