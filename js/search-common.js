/*global angular*/

/**
 * Angular services for both search menu/search results
 */

angular.module('DS_Search_Services', ['ngCookies'])
.service(
	'indexSrv', function ($http, $q, $sce, config) {
		this.index = null;

		/**
		 * async loads search index
		 * @param  String 	searchIndexURL
		 * @return Array 					search index
		 */
		this.loadIndex = function (searchIndexURL) {
			var defered = $q.defer(),
				self = this;

			if (!this.index) {
				$http.get(searchIndexURL, {
					transformResponse: undefined
				}).then(function(result) {
					self.index = self.parseResponseData(result.data);
					defered.resolve(self.index);
				});
			} else {
				defered.resolve(self.index);
			}

			return defered.promise;
		};

		/**
		 * converts response data from string to array
		 * @param  String data 		JSON with line breaks
		 * @return Array 			parsed data as array
		 */
		this.parseResponseData = function (data) {
			var responseData = data.replace(/(\r\n|\n|\r)/gm,'');			
			return angular.fromJson(responseData);
		};

		/**
		 * Transforms URL path to section string
		 * @param  String url 	URL path
		 * @return String     	Section/s name/s
		 */
		this.extractSectionFromURL = function (url) {
			var sections = url.split('/').slice(1, -2),
				curatedSections = [];

			[].forEach.call(sections, function (section) {
				if (section != DS_BASE_URL.replace(/\//,'')) {
					section = section.substr(0, 1).toUpperCase() + section.substr(1).toLowerCase();
					section = section.replace(/\-/g, ' ');
					curatedSections.push(section);
				}
			});

			return curatedSections;
		};

		/**
		 * finds a term into a string and wrap it with <strong>
		 * @param  String term
		 * @param  String text
		 * @return String
		 */
		this.hightLightTerm = function (term, text) {
			var regex = RegExp("(" + term + ")", "gi");
			return $sce.trustAsHtml(text.replace(regex, "<strong>$1</strong>"));
		};
	}
)

.service(
	'recentSearchesSrv', function ($cookies) {
		this.key = 'recentSearches';

		this.get = function () {
			var cookiesObj = $cookies.getObject(this.key);
			return cookiesObj ? cookiesObj : [];
		};

		this.put = function (term, searches) {
			if (searches.indexOf(term) === -1) {
				searches.push(term);
				$cookies.putObject(this.key, searches);
			}
		};
	}
)

.filter('filterAndPonderate', function () {

	function obtainPageScore (page, searchRegExp) {
		var points = {
				inTitle: 1000,
				inTags: 100,
				inContent : 10
			},
			maxDistance = 150,
			position;

		if (page.title) {			
			position = page.title.search(searchRegExp);
			
			if (position != -1) {
				return points.inTitle + (maxDistance - position);
			}
		}

		if ((page.tags) && (page.tags.search(searchRegExp) != -1)) {
			return points.inTags;
		} 

		if ((page.content) && (page.content.search(searchRegExp) != -1)) {
			return points.inContent;
		}

		return 0;
	}

	return function (pages, term) {
		var filtered = [],
			searchRegExp = new RegExp(term, "gi");

		[].forEach.call(pages, function (page) {		
			if (page.title != '') {
				page.score = obtainPageScore(page,searchRegExp);
				
				if (page.score > 0) {
					filtered.push(page);
				}			
			}
		});

		return filtered;
	}
});