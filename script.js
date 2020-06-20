$(document).ready(function() {

$(window).on("load", function() {
    colorChange();
    saveFunction();;
    });

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
        $(".time-block").each(function () {
        var hourNum = parseInt($(this).attr("id"));
        var currentHour = moment().hours();
            console.log(hourNum, currentHour);

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
        });
    }

    deleteFunction();
    clearEvents();

    $(function clearEvents() {
    $(".btn-success").click(function () {
            console.log(localStorage);
        localStorage.clear();
    })
    })

    function saveFunction() {
    $(".btn-primary").click(function () {
        event.preventDefault();

        var directParent = $(this).parent();
            console.log("directParent", directParent);
        var th = directParent.siblings("th");
            console.log("th", th);
        var time = th.attr("id");
            console.log("time", time);
            console.log("time");
            console.log(time);
        var rowTd = directParent.parent();
            console.log("rowTd", rowTd);
        var text = rowTd.find("textarea").val();
            console.log(text);
        localStorage.setItem(time, text);
    })

    $("#row-8").val(localStorage.getItem("8"));
    $("#row-9").val(localStorage.getItem("9"));
    $("#row-10").val(localStorage.getItem("10"));
    $("#row-11").val(localStorage.getItem("11"));
    $("#row-12").val(localStorage.getItem("12"));
    $("#row-13").val(localStorage.getItem("13"));
    $("#row-14").val(localStorage.getItem("14"));
    $("#row-15").val(localStorage.getItem("15"));
    $("#row-16").val(localStorage.getItem("16"));
    $("#row-17").val(localStorage.getItem("17"));

    console.log(localStorage);
    console.log(window.localStorage);

    $(function deleteFunction() {
        $(".btn-danger").click(function () {
            var directParent = $(this).parent();
                console.log("directParent", directParent);
            var th = directParent.siblings("th");
                console.log("th", th);
            var time = th.attr("id");
                console.log("time", time);
                console.log("time");
                console.log(time);
            var rowTd = directParent.parent();
                console.log("rowTd", rowTd);
            var text = rowTd.find("textarea").val();
                console.log(text);
            window.localStorage.removeItem(time, text);
            location.reload(true);
        })
    
        ("#row-8")(window.localStorage.removeItem("8"));
        ("#row-9")(window.localStorage.removeItem("9"));
        ("#row-10")(window.localStorage.removeItem("10"));
        ("#row-11")(window.localStorage.removeItem("11"));
        ("#row-12")(window.localStorage.removeItem("12"));
        ("#row-13")(window.localStorage.removeItem("13"));
        ("#row-14")(window.localStorage.removeItem("14"));
        ("#row-15")(window.localStorage.removeItem("15"));
        ("#row-16")(window.localStorage.removeItem("16"));
        ("#row-17")(window.localStorage.removeItem("17"));
        });

    }})