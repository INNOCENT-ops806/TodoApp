import { renderTodoList } from "./renderTodo.js";
let todoList = JSON.parse(localStorage.getItem("todoList")) || [];

export function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;
  const dateInputElement = document.querySelector(".js-due-date-input");
  const dueDate = dateInputElement.value;

  if (dueDate === "") {
    Swal.fire({
      title: "Todo-List not Updated",
      text: "Please enter the due date for the task",
      icon: "warning",
      confirmButtonText: "Ok",
      customClass: {
        confirmButton: "btn-custom",
      },
    });
    return;
  } else if (name.length < 3) {
    Swal.fire({
      title: "Todo-List not Updated",
      text: "Task name should be 3 letters or more",
      icon: "warning",
      confirmButtonText: "Ok",
      customClass: {
        confirmButton: "btn-custom",
      },
    });
    return;
  }
  todoList.push({
    name,
    dueDate,
  });

  localStorage.setItem("todoList", JSON.stringify(todoList));
  inputElement.value = "";
  dateInputElement.value = "";
  renderTodoList();
}
function showTime() {
  const timeElement = document.getElementById("time-live");
  timeElement.textContent = getTimeUntilTomorrow();
}
function renderChart() {
  data = updateChart(data);
  drawPieChart(ctx, data);
}
