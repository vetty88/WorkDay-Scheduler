$(document).ready(function() {

        var today = (moment().format('Do MMMM YYYY'));
        var time = (moment().format('HH:MM')); 
        var currentHour = moment().hours();
        var i = 0;
       
        $("#today").append(today);
        $("#timeNow").append(time);

        console.log(today);
        console.log(time);
        console.log(currentHour);
        console.log(i);
           

        function greeting() {
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
                greeting();

    function colorChange() {
        // creating current hour

        // console.log(currentHour);

        // creating color for past, present and future
        $(".time-block").each(function () {
            var hourNum = parseInt($(this).attr("id"));
            var currentHour = moment().hours();
            console.log(hourNum, currentHour);

            // Comparing the time
            if (hourNum < currentHour) {
                $(this).parent('tr').addClass("past");
            } else if (hourNum === currentHour) {
                $(this).parent('tr').removeClass("past");
                $(this).parent('tr').addClass("present");
            } else {
                $(this).parent('tr').removeClass("past");
                $(this).parent('tr').removeClass("present");
                $(this).parent('tr').addClass("future");
            }
        });

    }

    colorChange();

    newFunction();
});


function newFunction() {
    $(".btn-primary").click(function () {
        event.preventDefault();
        var rowTd = $(this).parents();
        console.log("rowTd", rowTd);
        var text = rowTd.find("textarea").val();
        console.log("textarea",text);
        var time2 = $(this).find("th");
        console.log("th", time2);
        var time = time2.find("id");
        console.log("th#", time);
        localStorage.setItem(time, text);
    
    $("row-8 storage").val(localStorage.getItem("8"));
    $("row-9 storage").val(localStorage.getItem("9"));
    $("row-10 storage").val(localStorage.getItem("10"));
    $("row-11 storage").val(localStorage.getItem("11"));
    $("row-12 storage").val(localStorage.getItem("12"));
    $("row-13 storage").val(localStorage.getItem("13"));
    $("row-14 storage").val(localStorage.getItem("14"));
    $("row-15 storage").val(localStorage.getItem("15"));
    $("row-16 storage").val(localStorage.getItem("16"));
    $("row-17 storage").val(localStorage.getItem("17"));

    });

    console.log(localStorage);

    $(".btn-danger").click(function () {
    $("textarea").val("")});

    $(".btn-success").click(function () {
        $(this).parent('tr').addClass("complete")}
    
    )};