document.addEventListener("DOMContentLoaded", () => {
    const todoInput = document.getElementById("todo-input");
    const addBtn = document.getElementById("add-btn");
    const todoList = document.getElementById("todo-list");

    addBtn.addEventListener("click", () => {
        const task = todoInput.value.trim();
        if (task) {
            addTask(task);
            todoInput.value = "";
        }
    });

    todoList.addEventListener("click", (e) => {
        if (e.target.tagName === "BUTTON") {
            const taskItem = e.target.parentElement;
            todoList.removeChild(taskItem);
        }
    });

    function addTask(task) {
        const taskItem = document.createElement("li");
        taskItem.className = "todo-item";
        taskItem.innerHTML = `
            <span>${task}</span>
            <button>Remove</button>
        `;
        todoList.appendChild(taskItem);
    }
});
