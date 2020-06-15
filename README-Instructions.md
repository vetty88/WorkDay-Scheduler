# 05 Third-Party APIs: Work Day Scheduler

Create a simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

You'll need to use the [Moment.js](https://momentjs.com/) library to work with date and time. Be sure to read the documentation carefully and concentrate on using Moment.js in the browser.

## User Story

```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

Resource - https://medium.com/@aleks.roslyakov/using-css-grid-jquery-making-a-daily-scheduler-pt-ii-7af7d239a55d

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
<!-- create planner template day - hours -->
<!-- launch JS Query page on load - $(document).ready(function(){}) -->
<!-- Javascript date function parse into year month day -->
<!-- div class container h2 class date class calendar --> ?heaeder contains text from output variable for date.
THEN the current day is displayed at the top of the calendar
<!-- launch moments JS -->
<!-- display current date at top of calendar -->
WHEN I scroll down
<!-- on scroll - display timeblocks 
<!-- option values for hours -->
timeblocks display standard business hours -->
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
<!-- timeblock is coded per moment js past present or future from current -->
<!-- use CSS grid -->
WHEN I click into a timeblock
<on click - enter event>
THEN I can enter an event
WHEN I click the save button for that timeblock
<on click save button for time block .. add cancel option to escape>
THEN the text for that event is saved in local storage
<!-- save text event in local storage -->
WHEN I refresh the page
<!-- refresh page - saved event persists -->
THEN the saved events persist
```

The following animation demonstrates the application functionality:

![day planner demo](./Assets/05-third-party-apis-homework-demo.gif)

## Review

You are required to submit the following for review:

* The URL of the deployed application.

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

- - -
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
