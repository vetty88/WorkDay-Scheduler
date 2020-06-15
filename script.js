$(document).ready(function() {   
var today = (moment().format('Do MMMM YYYY'));
var time = (moment().format('HH:MM'));

console.log(today);
console.log(time);

$("#today").append(today);

$("#timeNow").append(time);

var hours = [0800, 0900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800];
console.log(hours);

var hoursString = (JSON.stringify(hours));
console.log(hoursString);

var hoursView = document.getElementById("#hours-view");
console.log(hoursView);

function RenderHourRows(){
for (var i = 0; i <hours.length; i++) {
var newHourRow = $("<row>") + text(hours, hoursString)
$("#hours-view").append(newHourRow);
};};

console.log(RenderHourRows);
console.log(newHourRow);

});
