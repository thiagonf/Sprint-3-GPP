/* Slovak initialisation for the jQuery UI date picker plugin. */
/* Written by Vojtech Rinik (vojto@hmm.sk). */
(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([ "../datepicker" ], factory );
	} else {

		// Browser globals
		factory( jQuery.datepicker );
	}
}(function( datepicker ) {

datepicker.regional['sk'] = {
	closeText: 'Zavrieť',
	prevText: '&#x3C;Predch dzaj ci',
	nextText: 'Nasleduj ci&#x3E;',
	currentText: 'Dnes',
	monthNames: ['janu r','febru r','marec','apr l','m j','j n',
	'j l','august','september','okt ber','november','december'],
	monthNamesShort: ['Jan','Feb','Mar','Apr','M j','J n',
	'J l','Aug','Sep','Okt','Nov','Dec'],
	dayNames: ['nedeľa','pondelok','utorok','streda','štvrtok','piatok','sobota'],
	dayNamesShort: ['Ned','Pon','Uto','Str','Štv','Pia','Sob'],
	dayNamesMin: ['Ne','Po','Ut','St','Št','Pia','So'],
	weekHeader: 'Ty',
	dateFormat: 'dd.mm.yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['sk']);

return datepicker.regional['sk'];

}));
