const addTaskBtn = document.getElementById("add-task-btn");
const deskTaskInput = document.getElementById("description-task");
const todosWrapper = document.querySelector(".todos-wtapper");

// const task = {
//     description: 'сходить погулять',
//     complited: false
// }

var tasks = [];

function Task(description){
    this.description = description;
    this.complited = false;
}

addTaskBtn.addEventListener('click',() => {
   tasks.push(new Task(deskTaskInput.value));
   console.log(tasks)
} )