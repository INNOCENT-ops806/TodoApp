import { addTodo } from './addTodo.js';
import { renderTodoList } from './renderTodo.js';
import { getTimeUntilTomorrow } from "./time.js";
import { drawPieChart, updateChart } from "./chart.js";

document.addEventListener("DOMContentLoaded", (event) => {
  renderTodoList();

  const addButton = document.querySelector(".js-add-todo-button");
  addButton.addEventListener("click", addTodo);

  function showTime() {
    const timeElement = document.getElementById("time-live");
    timeElement.textContent = getTimeUntilTomorrow();
  }
  setInterval(showTime, 1000);

  const canvas = document.getElementById("myPieChart");
  const ctx = canvas.getContext("2d");

  let data = [
    { label: "Failure", color: "#FF6384" },
    { label: "Success", color: "#36A2EB" },
  ];

  drawPieChart(ctx, data);

  function renderChart() {
    data = updateChart(data);
    drawPieChart(ctx, data);
  }

  setInterval(renderChart, 1000);
});
