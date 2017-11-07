define(function () {
  // Czech
  function small (count, masc) {
    switch(count) {
      case 2:
        return masc ? 'dva' : 'dvě';
      case 3:
        return 'tři';
      case 4:
        return 'čtyři';
    }
    return '';
  }
  return {
    errorLoading: function () {
      return 'Výsledky nemohly být načteny.';
    },
    inputTooLong: function (args) {
      var n = args.input.length - args.maximum;

      if (n == 1) {
        return 'Pros m zadejte o jeden znak m ně';
      } else if (n <= 4) {
        return 'Pros m zadejte o ' + small(n, true) + ' znaky m ně';
      } else {
        return 'Pros m zadejte o ' + n + ' znaků m ně';
      }
    },
    inputTooShort: function (args) {
      var n = args.minimum - args.input.length;

      if (n == 1) {
        return 'Pros m zadejte ještě jeden znak';
      } else if (n <= 4) {
        return 'Pros m zadejte ještě dalš  ' + small(n, true) + ' znaky';
      } else {
        return 'Pros m zadejte ještě dalš ch ' + n + ' znaků';
      }
    },
    loadingMore: function () {
      return 'Nač taj  se dalš  výsledky…';
    },
    maximumSelected: function (args) {
      var n = args.maximum;

      if (n == 1) {
        return 'Můžete zvolit jen jednu položku';
      } else if (n <= 4) {
        return 'Můžete zvolit maxim lně ' + small(n, false) + ' položky';
      } else {
        return 'Můžete zvolit maxim lně ' + n + ' položek';
      }
    },
    noResults: function () {
      return 'Nenalezeny ž dn  položky';
    },
    searching: function () {
      return 'Vyhled v n …';
    }
  };
});
