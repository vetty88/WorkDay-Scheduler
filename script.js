$(document).ready(function() {

        var today = (moment().format('Do MMMM YYYY'));
        var time = (moment().format('HH:MM')); 
        var rows = ['0800', '0900', '1000', '1100', '1200', '1300', '1400', '1500', '1600', '1700', '1800'];
        var row = document.getElementById("#row".innerText);
        var rowString = JSON.stringify(row);   
        

        $("#today").append(today);
        $("#timeNow").append(time);

        console.log(today);
        console.log(time);
        console.log(rows.length);
        console.log(row);
        console.log(rowString);
        
        function getInnerText() {
                alert(document.getElementById("#demo").innerText)
        }

        function getHTML() {
                alert(document.getElementById("#demo").innerHTML)
        }

        function getTextContent() {
                alert(document.getElementById("#demo").textContent)
        }

        getInnerText();
        getHTML();
        getTextContent();

var nowHr = moment().format('l h:mm');
        console.log(nowHr);
        $rows = $("id$='row'");
        console.log($rows);
        $times = $rows.children
        $rows.parent().css("background-color", "rgba(203, 231, 57, 0.37)");

});

// function classPush(){
//         classNames.push('present' + current.hours() + (this.step == 4 ? '-h' + (current.hours() + 4) : '')); 
//         classNames.push(today(current)); 
//         classNames.push(even(current.hours())); 
//         };
// classPush();

// // function highlightCurrentTime() {
// //         if (row.content("") < ("time"))
// //         {row.color = "red"}};
// // highlightCurrentTime();

// function greeting() {
//         greeting;
//         if (timeHR < 20) {
//         demo.greeting = "Good day";
//         } else {
//         greeting = "Good evening";
//         };
// };
// myFunction();


// var greeting = $("#demo").append(greeting);


// function rowTimeFormat(){
//         for (i = 0; i row.length; i++);
//         if (row < time)
//         {rowHighlight= true,
//          else 
//          {rowHighlight= false}};
// rowTimeFormat()
// )};



// for(i = 0; i < rows.length; i++)      

//     //manipulate rows 
  
//         if (rows < time){ 
  
//           rows[i].className = "even"; 
  
//         }else{ 
  
//           rows[i].className = "odd"; 
  
//         }       



// var hours = ['0800', '0900', '1000', '1100', '1200', '1300', '1400', '1500', '1600', '1700', '1800'];
// var tasks = ['task 1', 'task 2', 'task 3'];
// console.log(hours);
// console.log(tasks);

// document.getElementById("#hours-view");
// document.getElementById("#tasks-view");

// function renderHourRows() {
//     for (var i = 0; i < hours.length; i++) {
//         var hr = hours[i];
//         console.log(hr);
//         var newHourRow = "<li>" + hr + "</li>";
//     }
//         $("#hours-view").append(newHourRow);
// };

// renderHourRows();

// function renderTaskRows(){
//     for (var i = 0; i < tasks.length; i++) {
//         var task = tasks[i];
//         console.log(task);
//         var newTaskRow = "<li>" + task + "</li>";
//     }
//     $("#tasks-view").append(newTaskRow);
// };

// renderTaskRows();

// });

// var eventInput = document.getElementById('#enter-task');

// localStorage.setItem("event",eventInput.value);

// submitBtn.addEventListener('click', function() {
//     localStorage.setItem('eventInput', eventInput.value)});
//     alert("storedEvent");


// // var submitBtn = document.querySelector("#submitBtn");
// form.addEventListener('submit', function(e) {
//     e.preventDefault()});

// submitBtn.addEventListener('click', function() {
//     localStorage.setItem('eventInput', eventInput.value)});
//     alert("storedEvent");
//     function checkForEnter(eventInput) {
//         if (eventInput.key === "Enter") 
//         {saveEventText("")};
//         submitBtn.onclick = saveEventText;}
//         checkForEnter();
    
//     function saveEventText(){
//         if (eventText = "") 
//         return eventText("")};

        // var storedEvent = localStorage.getItem("event");

//     var events = JSON.parse(window.localStorage.getItem("events")) || [];
//     var newTask = "event"
//     events.push(newEvent);
//     window.localStorage.setItem("newEvents", JSON.stringify(newEvents));
//     window.location.href = "index.html";

//     function printEvents() {
//     var events = JSON.parse(window.localStorage.getItem("events")) || [];
//     events.sort(function(a, b) {
//     return b.event - a.event;
//     });
    
//         events.forEach(function(event) {
//           // create li tag for each event
//         var liTag = document.createElement("li");
//         liTag.textContent = event.text + " - " + event.event;
//       // display on page
//         var olEl = document.getElementById("events");
//         olEl.appendChild(liTag);
//         });
// }

//     function clearEvents() {
//         window.localStorage.removeItem("events");
//         window.location.reload();
//     }
    

//       // run function when page loads
// printEvents();

// var clearBtn = document.querySelector("#clearBtn");
// clearBtn.onclick = clearEvents;

// init();

    // function init() {
    //     storeTodaysDate();
    //     changeDay();
    //     updateTime();
    //     displaySchedule();
    //     scheduleFocus();
    //     saveEvent();
    //     clearSchedule();
    // }


