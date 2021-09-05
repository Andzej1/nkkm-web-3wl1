const todoList= document.getElementById (elementid "todo-list")
todos=[]

function addTodo()
const text = document.getElementById (elementid: "todo")
todos.push(text);

todoList.innerHTML = "";
todos.forEach(renderTodos);

const todoList = document.getElementbyId>



}

function renderTodos(item,index) {
    todoList.innerHTML +=
    <div class = "todo-item">
<div class = "todo-text">
    ${item}
    </div>
    <div class="todo-manage">
<button>Delete</button>

</div>
    </div>
}