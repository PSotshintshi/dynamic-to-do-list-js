// Run this code only after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
  // Select DOM elements
  const addButton = document.getElementById('add-button');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Function to add a new task to the list
  function addTask() {
    // Get and trim the user input
    const taskText = taskInput.value.trim();

    // Check if input is empty
    if (taskText === '') {
      alert('Please enter a task!');
      return;
    }

    // Create a new <li> element for the task
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create a remove button for the task
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'remove-btn';

    // When the remove button is clicked, delete the task
    removeButton.onclick = function () {
      taskList.removeChild(li);
    };

    // Add the remove button to the task item
    li.appendChild(removeButton);

    // Add the task item to the task list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = '';
  }

  // Event listener for the "Add Task" button
  addButton.addEventListener('click', addTask);

  // Event listener to allow pressing "Enter" to add a task
  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });
});
