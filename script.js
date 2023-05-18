// Array para armazenar as tarefas
let tasks = [];

// Função para adicionar uma tarefa
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const timeInput = document.getElementById("timeInput");
    const task = taskInput.value.trim();
    const time = timeInput.value.trim();

    if (task !== "") {
        const newTask = { task, time };
        tasks.push(newTask);
        taskInput.value = "";
        timeInput.value = "";
        renderTasks();
    }
}

// Função para exibir as tarefas
function renderTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];

        const li = document.createElement("li");

        const taskInfo = document.createElement("div");
        taskInfo.className = "task-info";

        const taskText = document.createElement("span");
        taskText.textContent = task.task;
        taskInfo.appendChild(taskText);

        const taskTime = document.createElement("span");
        taskTime.textContent = task.time;
        taskInfo.appendChild(taskTime);

        const editButton = document.createElement("button");
        editButton.textContent = "Editar";
        editButton.className = "edit-button";
        editButton.onclick = function () {
            editTask(i);
        };
        taskInfo.appendChild(editButton);

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Excluir";
        deleteButton.className = "delete-button";
        deleteButton.onclick = function () {
            deleteTask(i);
        };
        taskInfo.appendChild(deleteButton);

        li.appendChild(taskInfo);
        taskList.appendChild(li);
    }
}

// Função para excluir uma tarefa
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function editTask(index) {
    const task = tasks[index].task;
    const time = tasks[index].time;

    const updatedTask = prompt("Editar tarefa:", task);
    const updatedTime = prompt("Editar horário:", time);

    if (updatedTask !== null && updatedTask.trim() !== "") {
        tasks[index].task = updatedTask.trim();
        tasks[index].time = updatedTime.trim();
        renderTasks();
    }
}
