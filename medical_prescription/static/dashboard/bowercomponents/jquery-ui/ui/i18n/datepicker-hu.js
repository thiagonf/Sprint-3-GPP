/* Hungarian initialisation for the jQuery UI date picker plugin. */
(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([ "../datepicker" ], factory );
	} else {

		// Browser globals
		factory( jQuery.datepicker );
	}
}(function( datepicker ) {

datepicker.regional['hu'] = {
	closeText: 'bez r',
	prevText: 'vissza',
	nextText: 'előre',
	currentText: 'ma',
	monthNames: ['Janu r', 'Febru r', 'M rcius', ' prilis', 'M jus', 'J nius',
	'J lius', 'Augusztus', 'Szeptember', 'Okt ber', 'November', 'December'],
	monthNamesShort: ['Jan', 'Feb', 'M r', ' pr', 'M j', 'J n',
	'J l', 'Aug', 'Szep', 'Okt', 'Nov', 'Dec'],
	dayNames: ['Vas rnap', 'H tfő', 'Kedd', 'Szerda', 'Csütörtök', 'P ntek', 'Szombat'],
	dayNamesShort: ['Vas', 'H t', 'Ked', 'Sze', 'Csü', 'P n', 'Szo'],
	dayNamesMin: ['V', 'H', 'K', 'Sze', 'Cs', 'P', 'Szo'],
	weekHeader: 'H t',
	dateFormat: 'yy.mm.dd.',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: true,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['hu']);

return datepicker.regional['hu'];

}));
