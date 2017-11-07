define(function () {
  // Azerbaijani
  return {
    inputTooLong: function (args) {
      var overChars = args.input.length - args.maximum;

      return overChars + ' simvol silin';
    },
    inputTooShort: function (args) {
      var remainingChars = args.minimum - args.input.length;

      return remainingChars + ' simvol daxil edin';
    },
    loadingMore: function () {
      return 'Daha  ox nəticə yüklənir…';
    },
    maximumSelected: function (args) {
      return 'Sadəcə ' + args.maximum + ' element se ə bilərsiniz';
    },
    noResults: function () {
      return 'Nəticə tapılmadı';
    },
    searching: function () {
      return 'Axtarılır…';
    }
  };
});
