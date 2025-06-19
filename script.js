// Ensure the DOM is fully loaded before running any code
document.addEventListener('DOMContentLoaded', function () {
  // Select DOM elements
  const addButton = document.getElementById('add-button');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  /**
   * addTask - Adds a new task to the list
   * Retrieves and validates input, creates list item with remove button,
   * and appends it to the task list.
   */
  function addTask() {
    // Get and trim user input
    const taskText = taskInput.value.trim();

    // If input is empty, prompt the user
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
    };

    // Append remove button and <li> to the task list
    li.appendChild(removeButton);
    taskList.appendChild(li);

    // Clear input field for next entry
    taskInput.value = '';
  }

  // Attach event listener for 'click' on Add Task button
  addButton.addEventListener('click', addTask);

  // Allow pressing 'Enter' key to add a task
  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });
});
