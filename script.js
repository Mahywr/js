function addTask() {
    var taskInput = document.getElementById("taskInput");
    var task = taskInput.value;
    if (task.trim() !== "") {
        var li = document.createElement("li");
        li.textContent = task;
        document.getElementById("taskList").appendChild(li);
        taskInput.value = "";
    }
}

// Optional: Add event listener for enter key
document.getElementById("taskInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
