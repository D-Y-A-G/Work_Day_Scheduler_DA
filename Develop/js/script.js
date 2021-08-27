// setup time to display below title
var now = moment().format("dddd, MMMM Do YYYY");
document.getElementById("currentDay").textContent = now;
////////////////////TIME BLOCKS //////////////////////////

function currentTime() {
  var currentHour = moment().hour();

  if (currentHour === now) {
    currentHour.classList.toggle("present");
  }
}

//  note you can add and take away classes look up toggle

// need to write function that

// write function that presents current hour and highlights hour block red

// write function that states time that has passed and is highlighted gray

//write function that states time is in future highlighte green

//write function to save input written on textarea
