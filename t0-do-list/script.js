let tasks = [];
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskName = taskInput.value.trim();
  if (taskName !== "") {
    tasks.push(taskName);
    displayTasks();
    taskInput.value = "";
  } else {
    console.log("Task cannot be empty");
  }
}
function displayTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    taskList.innerHTML += `<li>
        ${task}
        <button onclick = "editTask(${index})">Edit</button> 
        <button onclick = "deleteTask(${index})" class="delete">Delete</button>
        
        </li>`;
  });
}
function editTask(index) {
  const newTaskName = prompt("Edit task:", tasks[index]);
  if (newTaskName !== null && newTaskName.trim() !== "") {
    tasks[index] = newTaskName.trim();
    displayTasks();
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  displayTasks();
}

function searchTasks() {
  const searchInput = document
    .getElementById("searchInput")
    .value.toLowerCase();
  const filterTasks = tasks.filter((task) =>
    task.toLowerCase().includes(searchInput)
  );
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  filterTasks.forEach((task, index) => {
    taskList.innerHTML += `<li>
        ${task}
        <button onclick = "editTask(${index})">Edit</button> 
        <button onclick = "deleteTask(${index})" class="delete">Delete</button>
        
        </li>`;
  });
}
