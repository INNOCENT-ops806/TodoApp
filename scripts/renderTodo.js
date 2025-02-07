import { addTodo } from './addTodo.js';

export function renderTodoList() {
    let todoListHTML = [];
    let todoList = JSON.parse(localStorage.getItem("todoList")) || [];
    todoList.forEach((todoObject, index) => {
        const { name, dueDate } = todoObject;
        const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button onclick="deleteTodo(${index})" class="delete-todo-button">delete</button>
        `;
        todoListHTML.push(html);
    });
    document.querySelector(".js-todo-list").innerHTML = todoListHTML.join('');
}

window.deleteTodo = function (index) {
    let todoList = JSON.parse(localStorage.getItem("todoList")) || [];
    todoList.splice(index, 1);
    localStorage.setItem("todoList", JSON.stringify(todoList));
    renderTodoList(); 
};

document.addEventListener('DOMContentLoaded', (event) => {
    renderTodoList();
});
