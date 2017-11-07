//! moment.js locale configuration
//! locale : Pseudo [x-pseudo]
//! author : Andrew Hood : https://github.com/andrewhood125

import moment from '../moment';

export default moment.defineLocale('x-pseudo', {
    months : 'J~ ñ ~rý_F~ br ~ rý_~M rc~h_ p~r l_~M ý_~J ñ ~_J l~ý_ ~g st~_S p~t mb~ r_ ~ct b~ r_Ñ~ v m~b r_~D c ~mb r'.split('_'),
    monthsShort : 'J~ ñ_~F b_~M r_~ pr_~M ý_~J ñ_~J l_~ g_~S p_~ ct_~Ñ v_~D c'.split('_'),
    monthsParseExact : true,
    weekdays : 'S~ ñd ~ý_M ~ñd ý~_T ~sd ý~_W d~ñ sd~ ý_T~h rs~d ý_~Fr d~ ý_S~ t r~d ý'.split('_'),
    weekdaysShort : 'S~ ñ_~M ñ_~T _~W d_~Th _~Fr _~S t'.split('_'),
    weekdaysMin : 'S~ _M ~_T _~W _T~h_Fr~_S '.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'HH:mm',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd, D MMMM YYYY HH:mm'
    },
    calendar : {
        sameDay : '[T~ d ~ý  t] LT',
        nextDay : '[T~ m ~rr ~w  t] LT',
        nextWeek : 'dddd [ t] LT',
        lastDay : '[Ý~ st~ rd ~ý  t] LT',
        lastWeek : '[L~ st] dddd [ t] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : ' ~ñ %s',
        past : '%s  ~g ',
        s : '  ~f w ~s c ~ñds',
        m : '  ~m ñ~ t ',
        mm : '%d m~ ñ ~t s',
        h : ' ~ñ h ~ r',
        hh : '%d h~ rs',
        d : '  ~d ý',
        dd : '%d d~ ýs',
        M : '  ~m ñ~th',
        MM : '%d m~ ñt~hs',
        y : '  ~ý r',
        yy : '%d ý~ rs'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal : function (number) {
        var b = number % 10,
            output = (~~(number % 100 / 10) === 1) ? 'th' :
            (b === 1) ? 'st' :
            (b === 2) ? 'nd' :
            (b === 3) ? 'rd' : 'th';
        return number + output;
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});
