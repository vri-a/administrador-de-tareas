let newTask = document.getElementById("newTask");
let task = document.getElementById("task");
let text;
let inputId = 0;
let addTaskBtn = document.getElementById("addTaskBtn");
let inputs = document.querySelectorAll("input[type='checkbox']");;
let tasks = 0;
//let pendingTasks = 0;
let completedTasks = 0;
addTaskBtn.addEventListener("click", validText);

function validText() {
    text = newTask.value;
    if(text.trim().length > 0) {
        addTask();
    }
}
newTask.addEventListener('keyup', (e) => {
    
    if(e.code == 'Enter') {
        validText();
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
}

function infoTask() {
    let completedTasks = 0;
    inputs = document.querySelectorAll("input[type='checkbox']");

    inputs.forEach(input => {
        
        if(input.checked) completedTasks++;
    });

    pendingTasks = tasks - completedTasks;

    let infoParagraph = document.querySelectorAll(".info__paragraph");
    if(tasks != 0) {
        infoParagraph[0].innerHTML = `Tareas: ${tasks}`;
        infoParagraph[1].innerHTML = `Pendientes: ${pendingTasks}`;
        infoParagraph[2].innerHTML = `Completas: ${completedTasks}`;
        // console.log(inputs)
       // console.log(tasks)
        
    } else {
        infoParagraph[0].innerHTML = "";
        infoParagraph[1].innerHTML = "";
        infoParagraph[2].innerHTML = "";

    }
}

function removeTask(event) {
    let elem = document.getElementById(event.target.id)
    task.removeChild(elem.parentNode); 
    tasks--;
    console.log(tasks)
    infoTask();
}



