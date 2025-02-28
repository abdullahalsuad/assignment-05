console.log("app  js working.....");

// get the  ID
let taskNumbers = document.getElementById("taskNumber");
let completeTaskNumbers = document.getElementById("completeTask");
let completedBtns = document.querySelectorAll(".completedBtn");

for (let i = 0; i < completedBtns.length; i++) {
  completedBtns[i].addEventListener("click", function () {
    alert("Board Updated Successfully!!");

    let taskNumber = parseInt(taskNumbers.innerText);
    let completeTask = parseInt(completeTaskNumbers.innerText);

    // update the values
    taskNumber--;
    completeTask++;

    // update the DOM
    taskNumbers.innerText = taskNumber;
    completeTaskNumbers.innerText = completeTask;

    console.log(`taskNumber: ${taskNumber}, completeTask: ${completeTask}`);
    console.log(`btn clicked..... ${i}`);
  });
}
