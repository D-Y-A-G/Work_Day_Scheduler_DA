// setup time to display below title
var now = moment().format("dddd, MMMM Do YYYY");
document.getElementById("currentDay").textContent = now; // try query selector
////////////////////TIME BLOCKS ////////////////////////// defining time block variables

// write with current hour past and future and highlights based on color red now green future gray past
var hours = {
  eightAm: $("hourBlock"),
  nineAm: $("hourBlock"),
  tenAm: $("hourBlock"),
  elevenAm: $("hourBlock"),
  twelveAm: $("hourBlock"),
  OnePm: $("hourBlock"),
  twoPm: $("hourBlock"),
  threePm: $("hourBlock"),
  fourPm: $("hourBlock"),
};
// write function that states time that has passed and references classes in css

var hourly = moment().format("h:m");
console.log(hourly);

$(".hourBlock").each(function () {
  var currentHour = $(this).data("hours");

  if (currentHour === hourly) {
    $(this).attr("class", "present");
  } else if (currentHour > hourly) {
    $(this).attr("class", "future");
  } else {
    $(this).attr("past");
  }
});

$(document).ready(function () {
  console.log(hourly);
});
// need to loop through each block to check time and apply correct background
$(".time-block").each(function () {});
///---local storage--- need to save user input when save button is clicked and then reload that info from local storage when page is reloaded.///

$(".saveBtn").on("click", function (event) {
  event.preventDefault();
  var timeBlock = $(this).parent().prev().children();
  localStorage.setItem(timeBlock, "textarea");
  localStorage.getItem("timeBlock");

  //console.log(timeBlock[0].val); to check value
});

//// local storage set and get item
//localStorage.setItem("eightAm", eight);
// localStorage.getItem("eightAm");

// localStorage.setItem("nineAm", nine);
// localStorage.getItem("nineAm");

// localStorage.setItem("tenAm", ten);
// localStorage.getItem("")
