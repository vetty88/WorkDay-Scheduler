$(document).ready(function() {

    // display today's date and time in heading
    var today = (moment().format('Do MMMM YYYY'));
    var time = (moment().format('HH:MM')); 

    $("#today").append(today);
    $("#timeNow").append(time);

    // display welcome greeting    // 
    $(function greeting() {
        var currentHour = moment().hours();
        var greeting;
            if (currentHour < 12) {
                greeting = "Good morning, have a beautiful day!";
            }
            else if (currentHour < 20) {
                    greeting = "Good afternoon, let's seize the day!";
            } 
            else {
                    greeting = "Good evening, rest up for another day of success!";
            }
            document.getElementById("demo").innerHTML = greeting;
            }
    );
    

    // format row color based on current time of day //  
    $(function colorChange() {
        $(".time-block").each(function () {
        var hourNum = parseInt($(this).attr("id"));
        var currentHour = moment().hours();
            if (hourNum < currentHour) {
                $(this).parent('tr').addClass("past");
            } 
            else if (hourNum === currentHour) {
                $(this).parent('tr').removeClass("past");
                $(this).parent('tr').addClass("present");
            } 
            else {
                $(this).parent('tr').removeClass("past");
                $(this).parent('tr').removeClass("present");
                $(this).parent('tr').addClass("future");
        }
    })})
    // save typed events for each hour when save button clicked

        $(".btn-primary").click(function (event) {
            event.preventDefault();
            console.log(event.target);
            var time = event.target.id;
            console.log(time);
            var row = $(event.target).parent().parent();
            console.log(row);
            var text = row.find("textarea").val();
            console.log(text);
            localStorage.setItem(time, text);
    })})
    
    var i;
    for (i = 8; i < 18; i++) {
    
    $("#row-" + i).val(localStorage.getItem(i));
        
    }
   
        $(".btn-danger").click(function (event) {
            console.log(event);
            var time = event.target.id;
            localStorage.removeItem(time);
            location.reload(true);
        })

        $(".btn-success").click(function () {
            localStorage.clear();
            
    })
