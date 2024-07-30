let btn = document.getElementById("Add");
let removeText = document.getElementById("text");
let taskArr = [];
let i = 0;
btn.addEventListener("click", () => {
  let textValue = document.getElementById("create").value;

  if (textValue !== "") {
    taskArr.push(textValue);

    let taskSection = document.getElementById("list");
    taskArr.forEach((tasks, i) => {
      createElmnt(taskSection, tasks, i);
    });
    document.getElementById("create").value = "";

    console.log(taskArr);
    create.style.border = "";
    create.setAttribute("placeholder", "Create Tasks");
  } else {
    create.style.border = "2px solid red";
    create.setAttribute("placeholder", "Add Task!!");
  }
});

function createElmnt(section, tasks, i) {
  let taskDiv = document.createElement("div");
  taskId = taskDiv.id = `task${i}`;
  taskDiv.className = "task";

  let btn = document.createElement("button");
  btn.textContent = "Remove";
  removeBtnId = btn.id = `taskBtn${i}`;
  btn.classList.add("btn", "btn-danger", "rmv");

  let text = document.createElement("h2");
  text.textContent = tasks;

  if (i == taskArr.length - 1) {
    let a = section.appendChild(taskDiv);
    a.appendChild(text);
    a.appendChild(btn);
  }

  //remove button event
  document.getElementById(removeBtnId).addEventListener("click", () => {
    removeTask(i, section, taskId);
  });
}

function removeTask(i, section, divId) {
  let div = document.getElementById(`task${i}`);
  taskArr.splice(i, 1);
  section.removeChild(div);
}
