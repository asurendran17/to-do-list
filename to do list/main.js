const taskForm = document.getElementById('task-area');
const singleTaskInput = document.getElementById('single-task');
const tasksList = document.getElementById('tasks');
const wrapper = document.getElementById('wrapper');

function addTask(event) {
    event.preventDefault();
    if (singleTaskInput.value === '') return;
    const task = createTask(singleTaskInput.value);
    tasksList.appendChild(task);
    singleTaskInput.value = '';
    updateWrapperHeight();
}

function createTask(taskName) {
    const task = document.createElement('li');
    task.classList.add('task');
    task.innerHTML = `
        <input type="checkbox">
        <label>${taskName}</label>
        <span class="delete">&times;</span>
    `;

    const deleteButton = task.querySelector('.delete');
    deleteButton.addEventListener('click', deleteTask);

    return task;
}

function deleteTask(event) {
    event.target.parentElement.remove();
    updateWrapperHeight();
}

function updateWrapperHeight() {
    const wrapperHeight = tasksList.offsetHeight + 260; // Adjust as needed
    wrapper.style.minHeight = `${wrapperHeight}px`;
}

taskForm.addEventListener('submit', addTask);

// Call the function on page load to set the initial height
document.addEventListener('DOMContentLoaded', function () {
    updateWrapperHeight();
});
