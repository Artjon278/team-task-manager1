// Merr elementet nga DOM
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const taskCount = document.getElementById('taskCount');

// Funksioni për të shtuar detyrën
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return; // Nuk lejon detyra bosh

    // Krijon elementin li
    const li = document.createElement('li');

    // Krijon checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () => {
        li.classList.toggle('completed');
    });

    // Teksti i detyrës
    const text = document.createTextNode(taskText);

    // Butoni "Fshi"
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Fshi';
    deleteBtn.addEventListener('click', () => {
        li.remove();
        updateTaskCount();
    });

    // Shton elementet në li
    li.appendChild(checkbox);
    li.appendChild(text);
    li.appendChild(deleteBtn);

    // Shton li në listë
    taskList.appendChild(li);

    // Pastrohet inputi
    taskInput.value = '';

    // Përditëso numrin e detyrave
    updateTaskCount();
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