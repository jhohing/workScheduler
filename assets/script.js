//loads html and css before javascript
$(document).ready(function () {

    //set the variables for the months, days of the week, and dates
    var today = new Date();
    var mons = ["January", "February", "March"];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var dates = (moment().format("Do"));
    var curDay =  days[today.getDay()] + ", " + mons[today.getMonth()] + " " + dates;

    console.log(curDay);
    
    //display current day
    $("#currentDay").text(curDay);

    //create click listener for saveBtn id that takes time and text that user typed in that time slot
    $(".saveBtn").on("click", function(){
        //console.log the click event to display the button in the console
        console.log(this);

        //create 2 vars, one for the text typed by the user, one for the time slot the text is typed in.
        var time = $(this).parent().attr("id"); //uses the parent method to grab the id of that div for that time slot
        var text = $(this).siblings(".description").val(); //grabs the val of a sibling with an id of description

        //creates local storage for the users input
        localStorage.setItem(time, text);

    })

    //grabs any saved data for each of the time slot created
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    function hourTracker() {
        //get current hours. should be in military time (24 hour)
        var curHour = today.getHours();
        //console.log(curHour);

        $(".time-block").each(function () {
            var timeBlock = parseInt($(this).attr("id").split("hour")[1]);
            console.log( timeBlock, curHour)

            //check the curHour against timeBlock and apply the appropriate style and remove that unneeded styles
            if (timeBlock < curHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (timeBlock === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })

    }

    hourTracker()



});