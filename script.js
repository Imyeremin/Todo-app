const addTaskBtn = document.getElementById("add-task-btn");
const deskTaskInput = document.getElementById("description-task");
const todosWrapper = document.querySelector(".todos-wtapper");

var tasks;
!localStorage.tasks ? tasks = [] : tasks = JSON.parse(localStorage.getItem('tasks'));

function Task(description){
     this.description = description;
    this.complited = false;
}
const createTemplate = (task, index) => {
    return `
    <div class="todo-item ${task.complited ? 'checked' : ''}">
    <div class="description">${task.description} </div>
    <div class="buttons">
      <input type="checkbox" class="btn-complete" ${task.complited ? 'checked' : ''}> 
      <button class="btn-delete">Delete</button>
    </div>
  </div>
    `
}

const fillHtmlList = () => { 
    todosWrapper.innerHTML = '';
    if(tasks.length > 0){ 
     tasks.forEach((item, index) => {
         todosWrapper.innerHTML += createTemplate(item, index); 
         });
    }
}
fillHtmlList(); 
const updateLocal = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks) )
    }

addTaskBtn.addEventListener('click',() => {
     tasks.push(new Task(deskTaskInput.value));
      updateLocal();
   fillHtmlList();
     deskTaskInput.value = '';
   } )



