$(document).ready(function() {
    
var today = (moment().format('Do MMMM YYYY'));
var time = (moment().format('HH')); 
var rows = ['0800', '0900', '1000', '1100', '1200', '1300', '1400', '1500', '1600', '1700', '1800'];
         


console.log(today);
console.log(time);
console.log(rows.length);

$("#today").append(today);
$("#timeNow").append(time);
});

for ()

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


