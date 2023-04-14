let newTask = document.getElementById("newTask");
let addTaskBtn = document.getElementById("addTaskBtn");
let task = document.getElementById("task");
let inputs = document.querySelectorAll("input[type='checkbox']");
let deleteAll = document.getElementById("deleteAll");
let text;
let inputId = 0;
let tasks = 0;
let completedTasks = 0;

function validateText() {
    text = newTask.value;
    if(text.trim().length > 0) {
        addTask();
    }
}

addTaskBtn.addEventListener("click", validateText);

//Enter key
newTask.addEventListener('keyup', (e) => {
    if(e.code == 'Enter') {
        validateText();
    }
}
);

function addTask() {
    let div = document.createElement("div");
    task.appendChild(div);
    div.innerHTML = `<input type="checkbox" id="${inputId}" onclick="infoTask()"><label for="${inputId}">${text}</label><img src="https://img.icons8.com/windows/1x/trash.png" alt="" id="img${inputId}" onclick="removeTask(event)">`
    newTask.value = "";
    inputId++;
    tasks++;
    infoTask();
    if(tasks == 1) deleteAll.removeAttribute("disabled");
}

function infoTask() {
    let completedTasks = 0;
    inputs = document.querySelectorAll("input[type='checkbox']");

    for(let i = 1; i < inputs.length; i++){
        if(inputs[i].checked) completedTasks++;
    }

    pendingTasks = tasks - completedTasks;

    if(tasks != 0) {
        let info = document.getElementById("info");
        info.innerHTML = `Tasks:${tasks} Pending:${pendingTasks} Completed:${completedTasks}`;
    } else {
        info.innerHTML = "";
    }
}

function removeTask(event) {
    let elem = document.getElementById(event.target.id)
    task.removeChild(elem.parentNode); 
    tasks--;
    infoTask();
}

 function markDeleteAll() {
        for(let i = 1; i < inputs.length; i++){
            if(!inputs[i].checked) inputs[i].checked = true;
        } 
}

function uncheckAll() {
    for(let i = 1; i < inputs.length; i++){
        inputs[i].checked = false;
     } 
}

function deleteAllTask() {
    for(let i = 1; i < inputs.length; i++){
        if(inputs[i].checked){
            task.removeChild(inputs[i].parentElement);
            tasks--;
        }
    }
    infoTask();
    deleteAll.checked = false;
    if(tasks == 0) deleteAll.disabled = true;
}


deleteAll.addEventListener("click", () => {
    if(deleteAll.checked){
       markDeleteAll();
    } else {
       uncheckAll();
    }

});


