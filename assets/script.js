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
    //$("#currentDay")




});