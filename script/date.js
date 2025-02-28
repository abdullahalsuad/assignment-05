// Date

console.log("date  js working.....");

let currentDate = document.getElementById("currentDate");
let currentWeekday = document.getElementById("currentWeekday");

const date = new Date();

const options2 = {
  weekday: "long",
};

const options = {
  year: "numeric",
  month: "short",
  day: "numeric",
};

const formattedWeekday = date.toLocaleDateString("en-US", options2);
const formattedDate = date
  .toLocaleDateString("en-US", options)
  .replace(",", "");

currentWeekday.innerText = formattedWeekday;
currentDate.innerText = formattedDate;

// console.log(formattedDate);
