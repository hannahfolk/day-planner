$(document).ready(function() {

    // localStorage.clear();
    // Grab the date
    var date = moment().format("dddd, MMMM Do");

    // Place today's date inside the date paragraph
    $("#currentDay").text(date);

    var now = moment().format("HH");

    // Assign colors to the textareas based on whether the hour is past, present, or future
    // Iterate 9 times through hours 900 to 1700
    for (var i = 9; i < 18; i++) {
        // If past, change the data-state of the textarea to "past", thereby making it grey
        if (now > i) {
            $("#time-" + i).attr("data-state", "past");
        } // If present, change the data-state of the textarea to "present", thereby making it red
        else if (now === i) {
            $("#time-" + i).attr("data-state", "present");
            console.log(i);
        } // If future, change the data-state of the textarea to "future", thereby making it green
        else if (now < i) {
            $("#time-" + i).attr("data-state", "future");
        };
    };
    
    // // Attach "ON CLICK" events to the save buttons
    $(".save").on("click", function(event) {
        event.preventDefault();

        // Iterate 9 times through hours 900 to 1700
        for (var i = 9; i < 18; i++) {
            localStorage.setItem("plan" + i, $("#time-" + i).val());
            console.log("plan" + i);
        }
    });

    // // Grab the plans from local storage and put them into the textareas
    // Iterate 9 times through hours 900 to 1700
    for (var i = 9; i < 18; i++) {
        $("#time-" + i).text(localStorage.getItem("plan" + i));
    }
});