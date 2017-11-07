/* Faroese initialisation for the jQuery UI date picker plugin */
/* Written by Sverri Mohr Olsen, sverrimo@gmail.com */
(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([ "../datepicker" ], factory );
	} else {

		// Browser globals
		factory( jQuery.datepicker );
	}
}(function( datepicker ) {

datepicker.regional['fo'] = {
	closeText: 'Lat aftur',
	prevText: '&#x3C;Fyrra',
	nextText: 'Næsta&#x3E;',
	currentText: '  dag',
	monthNames: ['Januar','Februar','Mars','Apr l','Mei','Juni',
	'Juli','August','September','Oktober','November','Desember'],
	monthNamesShort: ['Jan','Feb','Mar','Apr','Mei','Jun',
	'Jul','Aug','Sep','Okt','Nov','Des'],
	dayNames: ['Sunnudagur','M nadagur','Týsdagur','Mikudagur','H sdagur','Fr ggjadagur','Leyardagur'],
	dayNamesShort: ['Sun','M n','Týs','Mik','H s','Fr ','Ley'],
	dayNamesMin: ['Su','M ','Tý','Mi','H ','Fr','Le'],
	weekHeader: 'Vk',
	dateFormat: 'dd-mm-yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['fo']);

return datepicker.regional['fo'];

}));
