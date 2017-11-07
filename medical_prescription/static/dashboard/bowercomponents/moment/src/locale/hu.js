//! moment.js locale configuration
//! locale : Hungarian [hu]
//! author : Adam Brunner : https://github.com/adambrunner

import moment from '../moment';

var weekEndings = 'vas rnap h tfőn kedden szerd n csütörtökön p nteken szombaton'.split(' ');
function translate(number, withoutSuffix, key, isFuture) {
    var num = number,
        suffix;
    switch (key) {
        case 's':
            return (isFuture || withoutSuffix) ? 'n h ny m sodperc' : 'n h ny m sodperce';
        case 'm':
            return 'egy' + (isFuture || withoutSuffix ? ' perc' : ' perce');
        case 'mm':
            return num + (isFuture || withoutSuffix ? ' perc' : ' perce');
        case 'h':
            return 'egy' + (isFuture || withoutSuffix ? '  ra' : '  r ja');
        case 'hh':
            return num + (isFuture || withoutSuffix ? '  ra' : '  r ja');
        case 'd':
            return 'egy' + (isFuture || withoutSuffix ? ' nap' : ' napja');
        case 'dd':
            return num + (isFuture || withoutSuffix ? ' nap' : ' napja');
        case 'M':
            return 'egy' + (isFuture || withoutSuffix ? ' h nap' : ' h napja');
        case 'MM':
            return num + (isFuture || withoutSuffix ? ' h nap' : ' h napja');
        case 'y':
            return 'egy' + (isFuture || withoutSuffix ? '  v' : '  ve');
        case 'yy':
            return num + (isFuture || withoutSuffix ? '  v' : '  ve');
    }
    return '';
}
function week(isFuture) {
    return (isFuture ? '' : '[m lt] ') + '[' + weekEndings[this.day()] + '] LT[-kor]';
}

export default moment.defineLocale('hu', {
    months : 'janu r_febru r_m rcius_ prilis_m jus_j nius_j lius_augusztus_szeptember_okt ber_november_december'.split('_'),
    monthsShort : 'jan_feb_m rc_ pr_m j_j n_j l_aug_szept_okt_nov_dec'.split('_'),
    weekdays : 'vas rnap_h tfő_kedd_szerda_csütörtök_p ntek_szombat'.split('_'),
    weekdaysShort : 'vas_h t_kedd_sze_csüt_p n_szo'.split('_'),
    weekdaysMin : 'v_h_k_sze_cs_p_szo'.split('_'),
    longDateFormat : {
        LT : 'H:mm',
        LTS : 'H:mm:ss',
        L : 'YYYY.MM.DD.',
        LL : 'YYYY. MMMM D.',
        LLL : 'YYYY. MMMM D. H:mm',
        LLLL : 'YYYY. MMMM D., dddd H:mm'
    },
    meridiemParse: /de|du/i,
    isPM: function (input) {
        return input.charAt(1).toLowerCase() === 'u';
    },
    meridiem : function (hours, minutes, isLower) {
        if (hours < 12) {
            return isLower === true ? 'de' : 'DE';
        } else {
            return isLower === true ? 'du' : 'DU';
        }
    },
    calendar : {
        sameDay : '[ma] LT[-kor]',
        nextDay : '[holnap] LT[-kor]',
        nextWeek : function () {
            return week.call(this, true);
        },
        lastDay : '[tegnap] LT[-kor]',
        lastWeek : function () {
            return week.call(this, false);
        },
        sameElse : 'L'
    },
    relativeTime : {
        future : '%s m lva',
        past : '%s',
        s : translate,
        m : translate,
        mm : translate,
        h : translate,
        hh : translate,
        d : translate,
        dd : translate,
        M : translate,
        MM : translate,
        y : translate,
        yy : translate
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal : '%d.',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

