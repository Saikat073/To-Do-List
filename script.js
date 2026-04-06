function addTask() {
    const newTask = document.createElement("li")
    const taskList = document.getElementById("taskList")
    taskList.appendChild(newTask)
    newTask.textContent = document.getElementById("taskInput").value
    document.getElementById("taskInput").value = ""
    deleteTask(newTask)

}

function handleKey(event) {
    if (event.key === "Enter") {
        addTask();
    }
}


function deleteTask(newTask) {
    const deleteBtn = document.createElement("button")
    deleteBtn.textContent = "✔️"
    deleteBtn.onclick = function () {
        newTask.classList.toggle("completed")
    }
    newTask.appendChild(deleteBtn)

    const removeBtn = document.createElement("button")
    removeBtn.textContent = "❌"

    removeBtn.onclick = function () {
        newTask.remove()
    }

    newTask.appendChild(removeBtn)
}
