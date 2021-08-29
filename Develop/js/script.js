// setup time to display below title
var now = moment().format("dddd, MMMM Do YYYY");
document.getElementById("currentDay").textContent = now; // try query selector
////////////////////TIME BLOCKS ////////////////////////// defining time block variables

// write with current hour past and future and highlights based on color red now green future gray past
var hours = {
  8: $("hourBlock"),
  9: $("hourBlock"),
  10: $("hourBlock"),
  11: $("hourBlock"),
  12: $("hourBlock"),
  1: $("hourBlock"),
  2: $("hourBlock"),
  3: $("hourBlock"),
  4: $("hourBlock"),
};
// write function that states time that has passed and references classes in css 

var hourly = moment().format("h:m");
console.log(hourly);

$(".hourBlock").each(function(){
  var currentHour = $(this).data("time");

})

$(document).ready(function () {
  console.log(hourly);
});
// need to loop through each block to check time and apply correct background
$(".time-block").each(function () {});
///---local storage--- need to save user input when save button is clicked and then reload that info from local storage when page is reloaded.///

$(".saveBtn").on("click", function (event) {
  event.preventDefault();
  var timeBlock = $(this).parent().prev().children();
  //localStorage.setItem("content", timeBlock);
  //localStorage.getItem("content");

  console.log(timeBlock[0].val);
});

//// local storage set and get item
//localStorage.setItem("eightAm", eight);
// localStorage.getItem("eightAm");

// localStorage.setItem("nineAm", nine);
// localStorage.getItem("nineAm");

// localStorage.setItem("tenAm", ten);
// localStorage.getItem("")
