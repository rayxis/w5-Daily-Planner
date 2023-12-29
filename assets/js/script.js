//  Start the code once everything has been loaded.
$(document).ready(function () {
	const templateRow = $('#dayTemplate').contents();
	let tense         = 'past';

	//  Loop from 9AM to 5PM (17h).
	for (let i = 9; i <= 17; i++) {
		const rowDay = templateRow.clone(true);

		/***
		 * Set the row's color based off of the current time. The comparison is done with a unary operator to make
		 * sure they're both numbers.
		 ***/
		if (+dayjs().format('H') === +i) {
			tense = 'future';
			rowDay.addClass('present');
		} else rowDay.addClass(tense);

		/***
		 * Set the row header's time. This is done by converting the 24h time to 12h (12 % 12 = 0, so that's set to 12),
		 * and if the original 24h time is less than or equal to 11, it's am, otherwise it's pm.
		 ***/
		rowDay.children('header').text((i % 12 || '12') + ((i <= 11) ? 'am' : 'pm'));

		//  Add the row to the list.
		rowDay.appendTo('main');
	}

	/***
	 * Upon clicking, this retrieves any existing data from localStorage and converts it into an array. If there isn't
	 * anything there, it uses an empty array.
	 ***/
	$('.saveBtn').click((event) => {
		const currentSchedule        = JSON.parse(localStorage.getItem('scheduleData')) ?? [];
		const scheduleKey            = $('.description').index($(event.target).prev());
	    currentSchedule[scheduleKey] = $(event.target).prev().val();
		localStorage.setItem('scheduleData', JSON.stringify(currentSchedule));
	});
	/***
	 * Pull the schedule data from localStorage (if there's data there) and convert it into an array.
	 * If the data does not exist, use an empty array.
	 * Loop through each array value and use the key as an index for the description, and then set the value.
	 ***/
	const scheduleData = JSON.parse(localStorage.getItem('scheduleData')) ?? [];
	$.each(scheduleData, (key, value) => {
		$('.description').eq(key).val(value);
	});


	// Display the current date in the header.
	$('#currentDay').text(dayjs().format('D MMMM YYYY'));

});
