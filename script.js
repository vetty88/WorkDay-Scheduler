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
    })}

    // jQuery(function ($) {
    //     if (typeof (window.localStorage) != "undefined") {
    //         $('#load').on('load', function(){
    //             $('input[type="text"]').each(function(){    
    //                    $(this).val(text);
            
    
    // // //         // will get value of specific id from the browser localStorage and set to the input 
    // //         $("textarea").val(function () {
    // //             return localStorage.getItem('key');
    // //         });
    //             })})}})
    // //         // will set values in browser localStorage for further reference
    // //         $("input[type=text]").on("change", function () {
    // //             localStorage.setItem(this.id, $(this).val());
    // //         });
    // //     }
    // // });

        $("textarea").val(localStorage.getItem("8"))
    // $("textarea").each(val){localStorage.getItem("time"));
    // $("#row-10 .storage").val(localStorage.getItem("10"));
    // $("#row-11 .storage").val(localStorage.getItem("11"));
    // $("#row-12 .storage").val(localStorage.getItem("12"));
    // $("#row-13 .storage").val(localStorage.getItem("13"));
    // $("#row-14 .storage").val(localStorage.getItem("14"));
    // $("#row-15 .storage").val(localStorage.getItem("15"));
    // $("#row-16 .storage").val(localStorage.getItem("16"));
    // $("#row-17 .storage").val(localStorage.getItem("17"));
    
    // // $(".btn-danger").click(function () {
    // $("textarea").val("")});

    // $(".btn-success").click(function () {
    //     $(this).parent('tr').addClass("complete")}
    
    