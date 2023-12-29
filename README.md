# Work Day Scheduler Starter Code

## Description

This is a simple calendar scheduler that allows a user to store events scheduled for the day. Upon loading, the user is
greeted with the date at the top of the screen, followed by 9 hour timeslots (for those who like to work overtime). 
The scheduler is able to determine the time of day, so anything in the past is grayed out, the current hour is red, 
and the future is ~~bright~~ green. When finished, the user is able to save their data for future access.

The code loops through 9 hours, cloning a template for each time block. For each block, the current hour is checked 
against the index for the loop to determine whether it is in the past, present or future, and the colors are 
adjusted accordingly. The time is then added to the block, and the loop continues.

The schedule data is then pulled from localStorage, and filled in each corresponding time slot.

## Installation
Installation is simple. Copy the files into the root directory of your webserver (example: /var/www/html), and visit 
in your browser. As long as your server has been properly configured, no additional configuration is necessary. This 
page does not require any special permissions.

## Usage

To use the application, click on the colored text area between the appropriate timeslot and save button. Enter the 
event, or information that you want to save, and then click the blue save button. By saving, this ensures that the 
information will persist upon the next visit to the page.

You can fill out all the information, but in order to save each block, you must click the save button next to 
each block. This is by design so that you can focus on one thing at a time.

As the hours go by, the corresponding fields will change colors to inform you about which events have passed (gray), 
are present (red-ish), and which events have yet to be (green).

The live version of the quiz can be found here: A live version of this can be viewed
here: https://rayxis.github.io/w5-Daily-Planner/

## Screenshots
![Starting screen](./screenshots/Screenshot%202023-12-29%20at%202.26.28%E2%80%AFPM.png)

## User Story

```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours of 9am to 5pm
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```
