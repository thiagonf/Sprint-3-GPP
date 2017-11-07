//! moment.js locale configuration
//! locale : Icelandic [is]
//! author : Hinrik Örn Sigurðsson : https://github.com/hinrik

import moment from '../moment';

function plural(n) {
    if (n % 100 === 11) {
        return true;
    } else if (n % 10 === 1) {
        return false;
    }
    return true;
}
function translate(number, withoutSuffix, key, isFuture) {
    var result = number + ' ';
    switch (key) {
        case 's':
            return withoutSuffix || isFuture ? 'nokkrar sek ndur' : 'nokkrum sek ndum';
        case 'm':
            return withoutSuffix ? 'm n ta' : 'm n tu';
        case 'mm':
            if (plural(number)) {
                return result + (withoutSuffix || isFuture ? 'm n tur' : 'm n tum');
            } else if (withoutSuffix) {
                return result + 'm n ta';
            }
            return result + 'm n tu';
        case 'hh':
            if (plural(number)) {
                return result + (withoutSuffix || isFuture ? 'klukkustundir' : 'klukkustundum');
            }
            return result + 'klukkustund';
        case 'd':
            if (withoutSuffix) {
                return 'dagur';
            }
            return isFuture ? 'dag' : 'degi';
        case 'dd':
            if (plural(number)) {
                if (withoutSuffix) {
                    return result + 'dagar';
                }
                return result + (isFuture ? 'daga' : 'dögum');
            } else if (withoutSuffix) {
                return result + 'dagur';
            }
            return result + (isFuture ? 'dag' : 'degi');
        case 'M':
            if (withoutSuffix) {
                return 'm nuður';
            }
            return isFuture ? 'm nuð' : 'm nuði';
        case 'MM':
            if (plural(number)) {
                if (withoutSuffix) {
                    return result + 'm nuðir';
                }
                return result + (isFuture ? 'm nuði' : 'm nuðum');
            } else if (withoutSuffix) {
                return result + 'm nuður';
            }
            return result + (isFuture ? 'm nuð' : 'm nuði');
        case 'y':
            return withoutSuffix || isFuture ? ' r' : ' ri';
        case 'yy':
            if (plural(number)) {
                return result + (withoutSuffix || isFuture ? ' r' : ' rum');
            }
            return result + (withoutSuffix || isFuture ? ' r' : ' ri');
    }
}

export default moment.defineLocale('is', {
    months : 'jan ar_febr ar_mars_apr l_ma _j n _j l _ g st_september_okt ber_n vember_desember'.split('_'),
    monthsShort : 'jan_feb_mar_apr_ma _j n_j l_ g _sep_okt_n v_des'.split('_'),
    weekdays : 'sunnudagur_m nudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur'.split('_'),
    weekdaysShort : 'sun_m n_þri_mið_fim_fös_lau'.split('_'),
    weekdaysMin : 'Su_M _Þr_Mi_Fi_Fö_La'.split('_'),
    longDateFormat : {
        LT : 'H:mm',
        LTS : 'H:mm:ss',
        L : 'DD.MM.YYYY',
        LL : 'D. MMMM YYYY',
        LLL : 'D. MMMM YYYY [kl.] H:mm',
        LLLL : 'dddd, D. MMMM YYYY [kl.] H:mm'
    },
    calendar : {
        sameDay : '[  dag kl.] LT',
        nextDay : '[  morgun kl.] LT',
        nextWeek : 'dddd [kl.] LT',
        lastDay : '[  gær kl.] LT',
        lastWeek : '[s ðasta] dddd [kl.] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'eftir %s',
        past : 'fyrir %s s ðan',
        s : translate,
        m : translate,
        mm : translate,
        h : 'klukkustund',
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

