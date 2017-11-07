/* Canadian-French initialisation for the jQuery UI date picker plugin. */
(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([ "../datepicker" ], factory );
	} else {

		// Browser globals
		factory( jQuery.datepicker );
	}
}(function( datepicker ) {

datepicker.regional['fr-CA'] = {
	closeText: 'Fermer',
	prevText: 'Pr c dent',
	nextText: 'Suivant',
	currentText: 'Aujourd\'hui',
	monthNames: ['janvier', 'f vrier', 'mars', 'avril', 'mai', 'juin',
		'juillet', 'ao t', 'septembre', 'octobre', 'novembre', 'd cembre'],
	monthNamesShort: ['janv.', 'f vr.', 'mars', 'avril', 'mai', 'juin',
		'juil.', 'ao t', 'sept.', 'oct.', 'nov.', 'd c.'],
	dayNames: ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'],
	dayNamesShort: ['dim.', 'lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.'],
	dayNamesMin: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
	weekHeader: 'Sem.',
	dateFormat: 'yy-mm-dd',
	firstDay: 0,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''
};
datepicker.setDefaults(datepicker.regional['fr-CA']);

return datepicker.regional['fr-CA'];

}));
