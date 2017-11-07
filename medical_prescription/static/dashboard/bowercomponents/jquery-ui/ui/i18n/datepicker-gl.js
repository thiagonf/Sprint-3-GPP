/* Galician localization for 'UI date picker' jQuery extension. */
/* Translated by Jorge Barreiro <yortx.barry@gmail.com>. */
(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([ "../datepicker" ], factory );
	} else {

		// Browser globals
		factory( jQuery.datepicker );
	}
}(function( datepicker ) {

datepicker.regional['gl'] = {
	closeText: 'Pechar',
	prevText: '&#x3C;Ant',
	nextText: 'Seg&#x3E;',
	currentText: 'Hoxe',
	monthNames: ['Xaneiro','Febreiro','Marzo','Abril','Maio','Xuño',
	'Xullo','Agosto','Setembro','Outubro','Novembro','Decembro'],
	monthNamesShort: ['Xan','Feb','Mar','Abr','Mai','Xuñ',
	'Xul','Ago','Set','Out','Nov','Dec'],
	dayNames: ['Domingo','Luns','Martes','M rcores','Xoves','Venres','S bado'],
	dayNamesShort: ['Dom','Lun','Mar','M r','Xov','Ven','S b'],
	dayNamesMin: ['Do','Lu','Ma','M ','Xo','Ve','S '],
	weekHeader: 'Sm',
	dateFormat: 'dd/mm/yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['gl']);

return datepicker.regional['gl'];

}));
