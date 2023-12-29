//  Start the code once everything has been loaded.
$(document).ready(function () {
	const templateRow = $('#dayTemplate').contents();
	// Pull the schedule data from localStorage (if there's data there) and convert it into an array.
	// Use an empty array if one doesn't exist.
	let scheduleData = JSON.parse(localStorage.getItem('scheduleData')) ?? [];
	let tense        = 'past';

	//  Loop from 9AM to 5PM (17h).
	for (let i = 9; i <= 17; i++) {
		const rowDay = templateRow.clone(true);

		// Set the row's color based off of the current time. The comparison is done with a unary operator to make
		// sure they're both numbers.
		if (+dayjs().format('H') === +i) {
			tense = 'future';
			rowDay.addClass('present');
		} else rowDay.addClass(tense);

		// Set the row header's time. This is done by converting the 24h time to 12h (12 % 12 = 0, so that's set to 12),
		// and if the original 24h time is less than or equal to 11, it's am, otherwise it's pm.
		rowDay.children('header').text((i % 12 || '12') + ((i <= 11) ? 'am' : 'pm'));

		// Set the content from the scheduleData array, using the current time -9 as an index (starting at 0).
		rowDay.children('.description').text(scheduleData[i - 9]);

		//  Add the row to the list.
		rowDay.appendTo('main');
	}

	// Upon clicking, this adds the text contents to the array, then saves the array in localStorage.
	$('.saveBtn').click((event) => {
		const scheduleKey         = $('.description').index($(event.target).prev());
		scheduleData[scheduleKey] = $(event.target).prev().val();
		localStorage.setItem('scheduleData', JSON.stringify(scheduleData));
	});

	// Display the current date in the header.
	$('#currentDay').text(dayjs().format('D MMMM YYYY'));
});
