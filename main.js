document.addEventListener("DOMContentLoaded", function() {
  init();
});

function init() {
  const add = document.querySelector("#add");
  const remove = document.querySelector("#remove");
  const clear = document.querySelector("#clear");
  const list = document.querySelector("ul.list-group");
  let tasks = [
    { task: "Task number", id: 1 },
    { task: "Task number", id: 2 },
    { task: "Task number", id: 3 }
  ];
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
  add.addEventListener("click", () => {
    tasks = [...tasks, { task: "Task number", id: tasks.length + 1 }];
    render(tasks);
  });
  remove.addEventListener("click", () => {
    tasks.pop();
    render(tasks);
  });
  clear.addEventListener("click", () => {
    tasks = [];
    render(tasks);
  });
}
