/* Azerbaijani (UTF-8) initialisation for the jQuery UI date picker plugin. */
/* Written by Jamil Najafov (necefov33@gmail.com). */
(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([ "../datepicker" ], factory );
	} else {

		// Browser globals
		factory( jQuery.datepicker );
	}
}(function( datepicker ) {

datepicker.regional['az'] = {
	closeText: 'Bağla',
	prevText: '&#x3C;Geri',
	nextText: 'İrəli&#x3E;',
	currentText: 'Bugün',
	monthNames: ['Yanvar','Fevral','Mart','Aprel','May','İyun',
	'İyul','Avqust','Sentyabr','Oktyabr','Noyabr','Dekabr'],
	monthNamesShort: ['Yan','Fev','Mar','Apr','May','İyun',
	'İyul','Avq','Sen','Okt','Noy','Dek'],
	dayNames: ['Bazar','Bazar ertəsi',' ərşənbə axşamı',' ərşənbə','Cümə axşamı','Cümə','Şənbə'],
	dayNamesShort: ['B','Be',' a',' ','Ca','C','Ş'],
	dayNamesMin: ['B','B',' ','С',' ','C','Ş'],
	weekHeader: 'Hf',
	dateFormat: 'dd.mm.yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['az']);

return datepicker.regional['az'];

}));
