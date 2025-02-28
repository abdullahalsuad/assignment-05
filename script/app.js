console.log("app  js working.....");

// get the  ID
let taskNumbers = document.getElementById("taskNumber");
let completeTaskNumbers = document.getElementById("completeTask");
let historyContainer = document.getElementById("historyContainer");
let clearHistoryBtn = document.getElementById("clearHistoryBtn");
let completedBtns = document.querySelectorAll(".completedBtn");

for (let i = 0; i < completedBtns.length; i++) {
  completedBtns[i].addEventListener("click", function () {
    alert("Board Updated Successfully!!");

    // disable the button
    completedBtns[i].setAttribute("disabled", "true");
    completedBtns[i].classList.remove("text-white");
    completedBtns[i].classList.add("disabled:bg-gray-400", "text-dark-800");

    // string to number conversion
    let taskNumber = parseInt(taskNumbers.innerText);
    let completeTask = parseInt(completeTaskNumbers.innerText);

    // update the values
    taskNumber--;
    completeTask++;

    // update the DOM
    taskNumbers.innerText = taskNumber;
    completeTaskNumbers.innerText = completeTask;

    let p = document.createElement("p");
    p.innerHTML = `
      <p class="bg-[#F4F7FF] rounded-md px-5 py-2 text-[16px] mb-5">
            You have Complete The Task Add Dark Mode at ${showCurrentTime()}
        </p>
      `;

    // if task is zero
    if (taskNumber === 0) {
      alert("All Done");
    }
    historyContainer.appendChild(p);
  });
}

// History clear
clearHistoryBtn.addEventListener("click", function () {
  historyContainer.innerHTML = "";
});
