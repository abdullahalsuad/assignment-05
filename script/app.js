console.log("app  js working.....");

//
let taskNumber = document.getElementById("taskNumber").innerText;
let completeTask = document.getElementById("completeTask").innerText;
let completedBtns = document.querySelectorAll(".completedBtn");

completedBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    console.log("btn clicked.....");
  });
});

console.log(taskNumber, completeTask);
