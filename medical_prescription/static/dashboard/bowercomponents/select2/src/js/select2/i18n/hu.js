define(function () {
  // Hungarian
  return {
    inputTooLong: function (args) {
      var overChars = args.input.length - args.maximum;

      return 'T l hossz . ' + overChars + ' karakterrel több, mint kellene.';
    },
    inputTooShort: function (args) {
      var remainingChars = args.minimum - args.input.length;

      return 'T l rövid. M g ' + remainingChars + ' karakter hi nyzik.';
    },
    loadingMore: function () {
      return 'Tölt s…';
    },
    maximumSelected: function (args) {
      return 'Csak ' + args.maximum + ' elemet lehet kiv lasztani.';
    },
    noResults: function () {
      return 'Nincs tal lat.';
    },
    searching: function () {
      return 'Keres s…';
    }
  };
});
