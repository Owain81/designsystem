if (typeof dsUIPatterns !== 'undefined') {

  dsUIPatterns.filter('inArray', function ($filter) {
      return function (list, arrayFilter, element) {
          if (arrayFilter) {
              return $filter("filter")(list, function (listItem) {
                  return (arrayFilter.length == 0) || arrayFilter.indexOf(listItem[element][0]) != -1;
              });
          }
      };
  });

  dsUIPatterns.controller('overviewController',
    ['$scope', '$location', 'tags', 'patterns',
    function($scope, $location, tags, patterns) {
      var typeFromURI = $location.search().type;

      $scope.tags = tags;
      $scope.patterns = patterns;
      $scope.allTag = 'All';

      $scope.page = 1;
      $scope.pageSize = 15;
      $scope.activeFilters = [];

      $scope.isChecked = function (filter) {
  			return ($scope.activeFilters.indexOf(filter) !== -1) || (($scope.activeFilters.length == 0) && (filter == $scope.allTag));
  		};

      $scope.setFilter = function (filter) {
        if ($scope.activeFilters.indexOf(filter) === -1) {
          $scope.activeFilters.push(filter);
        }
      };

      $scope.toggleFilter = function (filter) {
        var filterIndex = $scope.activeFilters.indexOf(filter);

        if ((filterIndex === -1) && (filter != $scope.allTag)) {
          $scope.activeFilters.push(filter);
        } else {
          if (filter == $scope.allTag) {
            $scope.activeFilters = [];
          } else {
            $scope.activeFilters.splice(filterIndex, 1);
          }
        }

        $scope.page = 1;
      };

      $scope.totalPages = function () {
        return Math.ceil($scope.filteredPatterns.length / $scope.pageSize);
      };

      $scope.setPage = function (n) {
        $scope.page = n;
      };

      $scope.pagesRange = function () {
        var n,
          rangeArray = [];

        for (n = 1; n <= $scope.totalPages(); n++) {
          rangeArray.push(n);
        }

        return rangeArray;
      };

      $scope.isLastPage = function (page) {
        return page >= $scope.totalPages();
      };

      if (typeFromURI) {
        $scope.setFilter(typeFromURI);
      }

    }]
  );
}
