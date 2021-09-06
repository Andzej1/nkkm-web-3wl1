const todoList = document.getElementById("todo-list")
todos = []

if (JSON.parse(localStorage.getItem("todos"))) {
    todos = JSON.parse(localsstorage.getItem("todos"));
    
}

function addTodo() {
    const text = document.getElementById("todo").value;
    if (text.lenght === 0) {
        return;
    }
    todos.push(text);

document.getElementById("todo").value=""

localstorage.setItem("todos", JSON.stringify/(todos))

    // TODO: Save to local storage

    todoList.innerHTML = "";
    todos.forEach(renderTodos);
}

function deleteTodo(index) {
    console.log(index);
    todos.splice(index,1)

     todoList.innerHTML = "";
    todos.forEach(renderTodos);

}



function renderTodos(item, index) {
    todoList.innerHTML += `
        <div class="todo-item">
            <div class="todo-text">
                ${item}
            </div>
            <div class="todo-manage">
                <button onclick="deleteTodo(${index})">Delete</button>
            </div>
        </div>
    `
}