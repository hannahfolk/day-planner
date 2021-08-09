$(document).ready(function () {
  // Grab the date, time, and current hour
  const date = moment().format("dddd, MMMM Do, YYYY");
  let time = moment().format("h:mm:ss a");
  const now = moment().format("HH");

  const container = $(".container");
  const hourLabels = [
    "9AM",
    "10AM",
    "11AM",
    "12PM",
    "1PM",
    "2PM",
    "3PM",
    "4PM",
    "5PM",
  ];

  // Place today's date and time inside the respective date and time paragraphs
  $("#currentDay").text(date);
  $("#currentTime").text(time);

  // Update the time every second
  setInterval(() => {
    time = moment().format("h:mm:ss a");
    $("#currentTime").text(time);
  }, 1000);

  // Create timeblocks
  for (let i = 0; i < hourLabels.length; i++) {
    // create elements with classes
    const row = $('<div class="row">');
    const hour = $(
      '<div class="time col-2 col-sm-2 col-md-1 col-lg-1 text-right">'
    );
    const eventBlock = $(
      '<div class="events col-10 col-sm-10 col-md-11 col-lg-11">'
    );
    const form = $('<form class="form-inline">');
    const textarea = $(
      '<textarea class="form-control col-9 col-sm-10 col-md-10 col-lg-11">'
    );
    const saveButton = $(
      '<button class="save col-3 col-sm-2 col-md-2 col-lg-1 text-center">'
    );
    const saveIcon = $('<i class="fas fa-save">');

    // add needed attributes
    textarea.attr("rows", "3");
    textarea.attr("id", "time-" + (i + 9));
    saveButton.attr("type", "submit");

    // add dotted line below last time block hour
    if (i === hourLabels.length - 1) {
      hour.addClass("last-hour");
    }

    // add hour labels to the hour divs
    hour.text(hourLabels[i]);

    // append everything to page
    container.append(row);
    row.append(hour);
    row.append(eventBlock);
    eventBlock.append(form);
    form.append(textarea);
    form.append(saveButton);
    saveButton.append(saveIcon);

    // get tasks from localstorage and add to textareas
    const task = localStorage.getItem("time-" + (i + 9));
    textarea.val(task);

    // Assign colors to the textareas based on whether the hour is past, present, or future
    // If past, change the data-state of the textarea to "past", thereby making it grey
    if (now > i + 9) {
      textarea.attr("data-state", "past");
    } // If present, change the data-state of the textarea to "present", thereby making it red
    else if (now == i + 9) {
      textarea.attr("data-state", "present");
    } // If future, change the data-state of the textarea to "future", thereby making it green
    else if (now < i + 9) {
      textarea.attr("data-state", "future");
    }
  }

  // Attach "ON CLICK" events to the save buttons
  $(".save").on("click", function (event) {
    event.preventDefault();
    const currentTextarea = $(this).siblings("textarea")[0];
    const id = currentTextarea.id;
    const task = currentTextarea.value;
    localStorage.setItem(id, task);
  });
});
