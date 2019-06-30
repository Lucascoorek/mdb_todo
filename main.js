document.addEventListener("DOMContentLoaded", function() {
  init();
});

function init() {
  const add = document.querySelector("#add");
  const remove = document.querySelector("#remove");
  const clear = document.querySelector("#clear");
  const container = document.querySelector(".container");
  const list = document.querySelector("ul.list-group");
  let tasks = [];
  function render(tasks) {
    let innerHtml = "";
    if (tasks.length > 0) {
      tasks.forEach(
        task =>
          (innerHtml += `
            <li
            class="list-group-item d-flex justify-content-between align-items-center"
            >
            ${task.task}
            <span class="badge badge-primary badge-pill">${task.id}</span>
            </li>
            `)
      );
    }
    list.innerHTML = innerHtml;
  }
  render(tasks);
  function warning(container) {
    let div = document.createElement("div");
    div.setAttribute("class", "alert alert-dismissible alert-warning");
    div.innerHTML = `
    <p class="mb-0">No tasks</p>
    <p class="mb-0">Press Add button</p>
  `;
    container.appendChild(div);
    setTimeout(() => {
      container.removeChild(div);
    }, 3000);
  }
  add.addEventListener("click", () => {
    tasks = [...tasks, { task: "Task number", id: tasks.length + 1 }];
    render(tasks);
  });
  remove.addEventListener("click", () => {
    if (tasks.length > 0) {
      tasks.pop();
      render(tasks);
    } else {
      warning(container);
    }
  });
  clear.addEventListener("click", () => {
    if (tasks.length > 0) {
      tasks = [];
      render(tasks);
    } else {
      warning(container);
    }
  });
}
