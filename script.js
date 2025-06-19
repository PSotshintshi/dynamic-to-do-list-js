// todo.js - To-Do List Application with Local Storage Persistence
// This script implements adding, displaying, and removing tasks using advanced DOM manipulation and Local Storage.

document.addEventListener('DOMContentLoaded', function () {
  // Select DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  const taskText = taskInput.value.trim();
  if (taskText === '') {
  alert('Please enter a task!');
  return;
}


  // Load and display tasks from Local Storage when the page loads
  loadTasks();

  /**
   * loadTasks - Loads saved tasks from Local Storage and displays them
   */
  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => addTask(taskText, false)); // Do not resave during loading
  }

  /**
   * addTask - Adds a new task to the list
   * @param {string} taskText - The text of the task to add
   * @param {boolean} save - Whether to save this task to Local Storage (default true)
   */
  function addTask(taskText = taskInput.value.trim(), save = true) {
    // If input is empty, prompt the user (only for user-entered tasks)
    if (taskText === '') {
      alert('Please enter a task!');
      return;
    }

    // Create a new <li> element and set its text
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create remove button for the task
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'remove-btn';

    // Assign onclick event to remove this task
    removeButton.onclick = function () {
      taskList.removeChild(li);
      removeTaskFromStorage(taskText);
    };

    // Append remove button and <li> to the task list
    li.appendChild(removeButton);
    taskList.appendChild(li);

    // Clear input field (only for user input)
    if (save) taskInput.value = '';

    // Save task to Local Storage if applicable
    if (save) {
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      storedTasks.push(taskText);
      localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }
  }

  /**
   * removeTaskFromStorage - Removes a task from Local Storage
   * @param {string} taskText - The text of the task to remove
   */
  function removeTaskFromStorage(taskText) {
    let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks = storedTasks.filter(task => task !== taskText);
    localStorage.setItem('tasks', JSON.stringify(storedTasks));
  }

  // Attach event listener for 'click' on Add Task button
  addButton.addEventListener('click', () => addTask());

  // Allow pressing 'Enter' key to add a task
  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });
});

