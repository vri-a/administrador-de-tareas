let newTask = document.getElementById("newTask");
let text;
let addTaskBtn = document.getElementById("addTaskBtn");
//let text = newTask.value;
addTaskBtn.addEventListener("click", () => {
    text = newTask.value;
    addTask();
    } 
);

function addTask() {
    const task = document.getElementById("task");
    const div = document.createElement("div");
    task.appendChild(div);
    div.innerHTML = `<input type="checkbox"><label>${text}</label><img src="https://img.icons8.com/windows/1x/trash.png" alt="">`
    newTask.value = "";
}



