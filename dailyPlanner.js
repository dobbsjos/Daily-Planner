$(document).ready(function () {
    // use moment.js to create the hour function

    function update() {

        $('#currentDay').html(moment().format('dddd MMMM Do h:mm a'));
    }
    setInterval(update, 1000)

    // Create a function that will validate the hour
    function hourCheck() {
        // Create a var that will store the moment.js hour(h)
        var dateEntered = $('#currentDay').val();

        if (!moment(dateEntered, 'dddd MMMM Do h:mm a').isValid()) {
            console.log('Valid Date');
        } else {
            console.log('Invalid Date');
        }
        // Create a for loop 

        // Create a class the can change from string to an integer
        // Create a conditional if the integer is the same as the moment.js hour then the color should be red
        // else if integer is > than moments.js turn green (future) 
    }
    hourCheck();
});

var saveBtn = document.querySelectorAll(".saveBtn")
var data9am = document.querySelectorAll("#data9am").values

var data9am = localStorage.getItem("nineAm");

saveBtn.addEventListener("click", function() {
    data9am.textContent = nineAm
    localStorage.setItem("nineAm", data9am)

    if (textContent) {
        textContentNineAm.values = textContent
    } else {
        textContentNineAm.values = "";
    }

})