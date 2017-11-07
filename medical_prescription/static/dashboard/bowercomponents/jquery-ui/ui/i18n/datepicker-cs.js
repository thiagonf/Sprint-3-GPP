/* Czech initialisation for the jQuery UI date picker plugin. */
/* Written by Tomas Muller (tomas@tomas-muller.net). */
(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([ "../datepicker" ], factory );
	} else {

		// Browser globals
		factory( jQuery.datepicker );
	}
}(function( datepicker ) {

datepicker.regional['cs'] = {
	closeText: 'Zavř t',
	prevText: '&#x3C;Dř ve',
	nextText: 'Později&#x3E;',
	currentText: 'Nyn ',
	monthNames: ['leden',' nor','březen','duben','květen','červen',
	'červenec','srpen','z ř ','ř jen','listopad','prosinec'],
	monthNamesShort: ['led',' no','bře','dub','kvě','čer',
	'čvc','srp','z ř','ř j','lis','pro'],
	dayNames: ['neděle', 'ponděl ', ' terý', 'středa', 'čtvrtek', 'p tek', 'sobota'],
	dayNamesShort: ['ne', 'po', ' t', 'st', 'čt', 'p ', 'so'],
	dayNamesMin: ['ne','po',' t','st','čt','p ','so'],
	weekHeader: 'Týd',
	dateFormat: 'dd.mm.yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['cs']);

return datepicker.regional['cs'];

}));
