document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById("Add Task");
    const taskInput = taskInput.getElementById("task-input");
    const taskList = taskList.getElementById("task-list");

    function addTask(){
        const taskText = taskInput.value.trim();
        if (taskText===``){
            alert(`Please enter a task`);
            return;
    
        }
        else{
            const listItem = document.createElement(`li`);
            listItem.textContent = taskText;
   // Create remove button
    const removeButton = document.createElement('button'); // Create "Remove" button
    removeButton.textContent = 'Remove';
    removeButton.className = 'remove-btn'; 

    // Assign onclick event to remove the list item
    removeButton.onclick = function () {
      taskList.removeChild(li);

        }
    li.appendChild(removeButton);
    taskList.appendChild(li);
    taskInput.value = ``;


        }

    }

})