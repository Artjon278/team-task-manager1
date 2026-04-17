const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const taskCount = document.getElementById('taskCount');

function addTask() {
    const text = taskInput.value.trim();
    if (!text) return;
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = text;
    span.onclick = () => { span.classList.toggle('done'); };
    const del = document.createElement('button');
    del.textContent = 'X';
    del.onclick = () => { li.remove(); updateTaskCount(); };
    li.append(span, del);
    taskList.appendChild(li);
    taskInput.value = '';
    updateTaskCount();
}

function updateTaskCount() {
    taskCount.textContent = taskList.children.length;
}

addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});
