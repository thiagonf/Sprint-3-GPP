define(function () {
  // French
  return {
    errorLoading: function () {
      return 'Les r sultats ne peuvent pas  tre charg s.';
    },
    inputTooLong: function (args) {
      var overChars = args.input.length - args.maximum;

      var message = 'Supprimez ' + overChars + ' caractère';

      if (overChars !== 1) {
        message += 's';
      }

      return message;
    },
    inputTooShort: function (args) {
      var remainingChars = args.minimum - args.input.length;

      var message = 'Saisissez ' + remainingChars + ' caractère';

      if (remainingChars !== 1) {
        message += 's';
      }

      return message;
    },
    loadingMore: function () {
      return 'Chargement de r sultats suppl mentaires…';
    },
    maximumSelected: function (args) {
      var message = 'Vous pouvez seulement s lectionner ' +
        args.maximum + '  l ment';

      if (args.maximum !== 1) {
        message += 's';
      }

      return message;
    },
    noResults: function () {
      return 'Aucun r sultat trouv ';
    },
    searching: function () {
      return 'Recherche en cours…';
    }
  };
});
