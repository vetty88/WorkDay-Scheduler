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

    $(function saveFunction(event) {
        $(".btn-primary").click(function () {
            event.preventDefault();

        var directParent = $(this).parent();
        var th = directParent.siblings("th");
        var time = th.attr("id");
        var rowTd = directParent.parent();
        var text = rowTd.find("textarea").val();
        localStorage.setItem(time, text);
    })})
    
    var i (for i = 8; i < 18; i++) {
    
    $("#row-" + i).val(localStorage.getItem(i));
        
    }
   
        $(".btn-danger").click(function (event) {
            console.table(this);
            console.table(event.target);
            var time = event.target.attr("id");
            var text = document.getElementById("row-" + time).value = "";
                window.localStorage.removeItem(time);
        })

        $(".btn-success").click(function (event) {
            localStorage.clear();
            location.reload(true);
    })})
