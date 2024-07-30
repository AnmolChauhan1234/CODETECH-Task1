document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');
    const deleteAllBtn = document.getElementById('delete-all-btn');

    function createTaskElement(taskText) {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = taskText;
        li.appendChild(span);

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.classList.add('edit');
        editBtn.addEventListener('click', () => {
            const newTaskText = prompt('Edit task:', span.textContent);
            if (newTaskText) {
                span.textContent = newTaskText;
            }
        });
        li.appendChild(editBtn);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(li);
        });
        li.appendChild(deleteBtn);

        return li;
    }

    addTaskBtn.addEventListener('click', () => {
        if (taskInput.value.trim()) {
            const taskElement = createTaskElement(taskInput.value);
            taskList.appendChild(taskElement);
            taskInput.value = '';
        }
    });

    taskInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            addTaskBtn.click();
        }
    });

    deleteAllBtn.addEventListener('click', () => {
        taskList.innerHTML = '';
    });
});
