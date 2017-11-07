/* Swiss-French initialisation for the jQuery UI date picker plugin. */
/* Written Martin Voelkle (martin.voelkle@e-tc.ch). */
(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([ "../datepicker" ], factory );
	} else {

		// Browser globals
		factory( jQuery.datepicker );
	}
}(function( datepicker ) {

datepicker.regional['fr-CH'] = {
	closeText: 'Fermer',
	prevText: '&#x3C;Pr c',
	nextText: 'Suiv&#x3E;',
	currentText: 'Courant',
	monthNames: ['janvier', 'f vrier', 'mars', 'avril', 'mai', 'juin',
		'juillet', 'ao t', 'septembre', 'octobre', 'novembre', 'd cembre'],
	monthNamesShort: ['janv.', 'f vr.', 'mars', 'avril', 'mai', 'juin',
		'juil.', 'ao t', 'sept.', 'oct.', 'nov.', 'd c.'],
	dayNames: ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'],
	dayNamesShort: ['dim.', 'lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.'],
	dayNamesMin: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
	weekHeader: 'Sm',
	dateFormat: 'dd.mm.yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['fr-CH']);

return datepicker.regional['fr-CH'];

}));
