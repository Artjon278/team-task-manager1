// Merr elementet nga DOM
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const taskCount = document.getElementById('taskCount');

// Funksioni për të shtuar detyrën

function addTask() { const text = document.getElementById("taskInput").value; console.log("Nxënësi 2 shtoi detyrën"); }t();

}

// Funksioni për të përditësuar numrin e detyrave
function updateTaskCount() {
    const count = taskList.children.length;
    taskCount.textContent = count;
}

// Event listener për butonin "Add Task"
addTaskBtn.addEventListener('click', addTask);

// Event listener për tastin Enter
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});