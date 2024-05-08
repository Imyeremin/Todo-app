const addTaskBtn = document.getElementById("add-task-btn");
const deskTaskInput = document.getElementById("description-task");
const todosWrapper = document.querySelector(".todos-wtapper");

var tasks;

!localStorage.tasks ? tasks = [] : tasks = JSON.parse(localStorage.getItem('tasks')); 

function Task(description){
    this.description = description;
    this.complited = false;
}

const updateLocal = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks) )
}

addTaskBtn.addEventListener('click',() => {
   tasks.push(new Task(deskTaskInput.value));
   updateLocal();
} )

