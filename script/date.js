console.log("date  js working.....");

// get the  ID
let currentDate = document.getElementById("currentDate");
let currentWeekday = document.getElementById("currentWeekday");

// setup the date and formate
const date = new Date();
const options = {
  weekday: "long",
};
const options2 = {
  year: "numeric",
  month: "short",
  day: "numeric",
};

// update the values
const formattedWeekday = date.toLocaleDateString("en-US", options);
const formattedDate = date.toLocaleDateString("en-US", options2);

// update the DOM
currentWeekday.innerText = formattedWeekday;
currentDate.innerText = formattedDate;

// Options for formatting the time

function showCurrentTime() {
  const timeOptions = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  };

  const currentTime = date.toLocaleTimeString("en-US", timeOptions);
  return currentTime;
}
