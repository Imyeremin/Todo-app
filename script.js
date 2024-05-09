const addTaskBtn = document.getElementById("add-task-btn");
const deskTaskInput = document.getElementById("description-task");
const todosWrapper = document.querySelector(".todos-wtapper");

var tasks;

!localStorage.tasks ? tasks = [] : tasks = JSON.parse(localStorage.getItem('tasks'));

var todoItemElems = [];

function Task(description){
    this.description = description;
    this.complited = false;
}
const createTemplate = (task, index) => {
    return `
    <div class="todo-item ${task.complited ? 'checked' : ''}">
    <div class="description">${task.description} </div>
    <div class="buttons">
      <input onclick="completeTask(${index});" type="checkbox" class="btn-complete" ${task.complited ? 'checked' : ''}> 
      <button onclick="deleteTask(${index});" class="btn-delete">Delete</button>
    </div>
  </div>
    `
}

const filterTasks = () =>{ 
    const ActiveTasks = tasks.length && tasks.filter(item => item.complited == false);
     const ComplitedTasks = tasks.length && tasks.filter(item => item.complited == true);
    tasks = [...ActiveTasks,...ComplitedTasks]
   }

const fillHtmlList = () => { 
     todosWrapper.innerHTML = '';
    if(tasks.length > 0){ 
        filterTasks();
        tasks.forEach((item, index) => {
            todosWrapper.innerHTML += createTemplate(item, index); 
            });
      todoItemElems = document.querySelectorAll(".todo-item")
    }
}
fillHtmlList(); 

const updateLocal = () => {
     localStorage.setItem('tasks', JSON.stringify(tasks) )
   }

const completeTask = (index) => {
    console.log(index)
   tasks[index].complited = !tasks[index].complited
    if(tasks[index].complited){
    todoItemElems[index].classList.add('checked')
   }else{
    todoItemElems[index].classList.remove('checked')
   }
   updateLocal();
   fillHtmlList();
}

addTaskBtn.addEventListener('click',() => {
     tasks.push(new Task(deskTaskInput.value));
      updateLocal();
     fillHtmlList();
     deskTaskInput.value = '';
   });

const deleteTask = index => {
    todoItemElems[index].classList.add('delition')
     setTimeout(() => {
    tasks.splice(index, 1);
    updateLocal(); 
    fillHtmlList();
 } , 500);  
}

