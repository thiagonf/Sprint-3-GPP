/* Icelandic initialisation for the jQuery UI date picker plugin. */
/* Written by Haukur H. Thorsson (haukur@eskill.is). */
(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([ "../datepicker" ], factory );
	} else {

		// Browser globals
		factory( jQuery.datepicker );
	}
}(function( datepicker ) {

datepicker.regional['is'] = {
	closeText: 'Loka',
	prevText: '&#x3C; Fyrri',
	nextText: 'Næsti &#x3E;',
	currentText: '  dag',
	monthNames: ['Jan ar','Febr ar','Mars','Apr l','Ma ','J n ',
	'J l ',' g st','September','Okt ber','N vember','Desember'],
	monthNamesShort: ['Jan','Feb','Mar','Apr','Ma ','J n',
	'J l',' g ','Sep','Okt','N v','Des'],
	dayNames: ['Sunnudagur','M nudagur','Þriðjudagur','Miðvikudagur','Fimmtudagur','Föstudagur','Laugardagur'],
	dayNamesShort: ['Sun','M n','Þri','Mið','Fim','Fös','Lau'],
	dayNamesMin: ['Su','M ','Þr','Mi','Fi','Fö','La'],
	weekHeader: 'Vika',
	dateFormat: 'dd.mm.yy',
	firstDay: 0,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['is']);

return datepicker.regional['is'];

}));
