/* Luxembourgish initialisation for the jQuery UI date picker plugin. */
/* Written by Michel Weimerskirch <michel@weimerskirch.net> */
(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([ "../datepicker" ], factory );
	} else {

		// Browser globals
		factory( jQuery.datepicker );
	}
}(function( datepicker ) {

datepicker.regional['lb'] = {
	closeText: 'Fäerdeg',
	prevText: 'Zr ck',
	nextText: 'Weider',
	currentText: 'Haut',
	monthNames: ['Januar','Februar','Mäerz','Abrëll','Mee','Juni',
	'Juli','August','September','Oktober','November','Dezember'],
	monthNamesShort: ['Jan', 'Feb', 'Mäe', 'Abr', 'Mee', 'Jun',
	'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
	dayNames: ['Sonndeg', 'M indeg', 'Dënschdeg', 'Mëttwoch', 'Donneschdeg', 'Freideg', 'Samschdeg'],
	dayNamesShort: ['Son', 'M i', 'Dën', 'Mët', 'Don', 'Fre', 'Sam'],
	dayNamesMin: ['So','M ','Dë','Më','Do','Fr','Sa'],
	weekHeader: 'W',
	dateFormat: 'dd.mm.yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['lb']);

return datepicker.regional['lb'];

}));
