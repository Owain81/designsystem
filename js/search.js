/*global angular*/

/**
 * Design System Overall search
 */
var dsSearch = angular.module('DS_Search', ['DS_Search_Services']);

// Search config
dsSearch.factory(
	'config', function () {
		return {
			searchIndexURL: 	DS_BASE_URL + '/search-index/',
			searchResultsURL: 	DS_BASE_URL + '/search-results/#?term=',
			hideRecentDelay: 	250,
			maxListSize: 4,
			resultsPageSize: 7
		};
	}
);

// Controller for search box
dsSearch.controller('searchController',
	['$scope', '$timeout', '$window', '$location', 'config', 'indexSrv', 'recentSearchesSrv',
	function($scope, $timeout, $window, $location, config, indexSrv, recentSearchesSrv) {
		$scope.searchTerm = $location.search().term ? $location.search().term : '';
		$scope.index = [];
		$scope.recent = false;
		$scope.recentTerms = recentSearchesSrv.get();
		$scope.resultsList = [];
		$scope.listSize = config.maxListSize;

		indexSrv.loadIndex(config.searchIndexURL).then(function (index) {
			$scope.index = index;
		});

		$scope.hasTitle = function (page) {
			return page.title != '';
		};

		$scope.shouldShowRecent = function () {
			return !$scope.searchTerm && $scope.recent;
		};

		$scope.showRecent = function () {
			$scope.recent = true;
		};

		$scope.hideRecent = function () {
			$timeout(function () { // Allow recent searches click
				$scope.recent = false;
			}, config.hideRecentDelay);
		};

		$scope.useTerm = function (term) {
			$scope.searchTerm = term;
			$scope.performSearch();
		};

		$scope.showSuggestions = function () {
			return $scope.searchTerm && $scope.recent && ($scope.searchTerm.length > 0);
		};

		$scope.shouldShowMore = function () {
			return 	($scope.resultsList) &&
					($scope.searchTerm.length > 1) &&
					($scope.resultsList.length > $scope.listSize);
		};

		$scope.performSearch = function () {
			if ($scope.searchTerm.length > 1) {
				recentSearchesSrv.put($scope.searchTerm, $scope.recentTerms);
				$window.location.href = config.searchResultsURL + $scope.searchTerm;

				if ($location.search().term) {
					location.reload();
				}
			}
		};

		$scope.extractSectionFromURL = function (url) {
			return indexSrv.extractSectionFromURL(url)[0];
		};

		$scope.hightLightTerm = function (text) {
			return indexSrv.hightLightTerm($scope.searchTerm, text);
		};

	}]
);


// Controller for search results page
dsSearch.controller('searchResultsController',
	['$scope', '$location', 'config', 'indexSrv',
	function ($scope, $location, config, indexSrv) {
		$scope.index = [];
		$scope.searchTerm = $location.search().term;
		$scope.searchResults;
		$scope.isLoaded = false;
		$scope.page = 1;
		$scope.pageSize = config.resultsPageSize;

		indexSrv.loadIndex(config.searchIndexURL).then(function (index) {
			$scope.index = index;
			$scope.isLoaded = true;
		});

		$scope.totalPages = function () {
			return Math.ceil($scope.searchResults.length / $scope.pageSize);
		};

		$scope.isLastPage = function (page) {
			return page >= $scope.totalPages();
		};

		$scope.pagesRange = function () {
			var n,
				rangeArray = [];

			for (n = 1; n <= $scope.totalPages(); n++) {
				rangeArray.push(n);
			}

			return rangeArray;
		};

		$scope.setPage = function (n) {
			$scope.page = n;
		};

		$scope.hasTitle = function (page) {
			return page.title != '';
		};

		$scope.extractSectionFromURL = function (url) {
			return indexSrv.extractSectionFromURL(url)[0];
		};

		$scope.hightLightTerm = function (text) {
			return indexSrv.hightLightTerm($scope.searchTerm, text);
		};

		$scope.extractDescription = function (page) {
			if (page.description) {
				return page.description;
			} else {
				return $scope.sanitizeJekyllContent(page.content.substr(0, 255));
			}
		};

		$scope.sanitizeJekyllContent = function (content) {
			var removeSymbols = ['#', '*', '[', ']'],
				removeParts = ['\{\{[^\}]+\}\}', '\{[^\}]+\}'],
				regExpString = '';

			[].forEach.call(removeSymbols, function (symbol) {
				regExpString += '\\' + symbol + '|'; 
			});

			[].forEach.call(removeParts, function (part) {
				regExpString += '(' + part + ')|';
			});

			regExpString = regExpString.slice(0, -1);

			return content.replace(new RegExp(regExpString, 'g'), '').replace(/\(\)/g, '');
		};
	}]
);


// Manual load
[].forEach.call(document.querySelectorAll('.ds_search_component'), function (element) {
	angular.bootstrap(element, ['DS_Search']);
});
