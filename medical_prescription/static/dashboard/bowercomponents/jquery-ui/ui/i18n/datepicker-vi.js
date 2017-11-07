/* Vietnamese initialisation for the jQuery UI date picker plugin. */
/* Translated by Le Thanh Huy (lthanhhuy@cit.ctu.edu.vn). */
(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([ "../datepicker" ], factory );
	} else {

		// Browser globals
		factory( jQuery.datepicker );
	}
}(function( datepicker ) {

datepicker.regional['vi'] = {
	closeText: 'Đ ng',
	prevText: '&#x3C;Trước',
	nextText: 'Tiếp&#x3E;',
	currentText: 'H m nay',
	monthNames: ['Th ng Một', 'Th ng Hai', 'Th ng Ba', 'Th ng Tư', 'Th ng Năm', 'Th ng S u',
	'Th ng Bảy', 'Th ng T m', 'Th ng Ch n', 'Th ng Mười', 'Th ng Mười Một', 'Th ng Mười Hai'],
	monthNamesShort: ['Th ng 1', 'Th ng 2', 'Th ng 3', 'Th ng 4', 'Th ng 5', 'Th ng 6',
	'Th ng 7', 'Th ng 8', 'Th ng 9', 'Th ng 10', 'Th ng 11', 'Th ng 12'],
	dayNames: ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ S u', 'Thứ Bảy'],
	dayNamesShort: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
	dayNamesMin: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
	weekHeader: 'Tu',
	dateFormat: 'dd/mm/yy',
	firstDay: 0,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['vi']);

return datepicker.regional['vi'];

}));
