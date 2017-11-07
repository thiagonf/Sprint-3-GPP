//! moment.js locale configuration
//! locale : Faroese [fo]
//! author : Ragnar Johannesen : https://github.com/ragnar123

;(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined'
       && typeof require === 'function' ? factory(require('../moment')) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var fo = moment.defineLocale('fo', {
    months : 'januar_februar_mars_apr l_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
    monthsShort : 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
    weekdays : 'sunnudagur_m nadagur_týsdagur_mikudagur_h sdagur_fr ggjadagur_leygardagur'.split('_'),
    weekdaysShort : 'sun_m n_týs_mik_h s_fr _ley'.split('_'),
    weekdaysMin : 'su_m _tý_mi_h _fr_le'.split('_'),
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd D. MMMM, YYYY HH:mm'
    },
    calendar : {
        sameDay : '[  dag kl.] LT',
        nextDay : '[  morgin kl.] LT',
        nextWeek : 'dddd [kl.] LT',
        lastDay : '[  gj r kl.] LT',
        lastWeek : '[s ðstu] dddd [kl] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'um %s',
        past : '%s s ðani',
        s : 'f  sekund',
        m : 'ein minutt',
        mm : '%d minuttir',
        h : 'ein t mi',
        hh : '%d t mar',
        d : 'ein dagur',
        dd : '%d dagar',
        M : 'ein m naði',
        MM : '%d m naðir',
        y : 'eitt  r',
        yy : '%d  r'
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal : '%d.',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

return fo;

})));
