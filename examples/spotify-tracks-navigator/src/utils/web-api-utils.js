'use strict';

import $ from 'jquery';
import _ from 'underscore';

var Constants = require('./../constants/constants');

var _getFiltersQuery = function (filters) {

	if(filters.length === 0) {

		return "";
	}

	var filtersQuery = "&query=";

	_.each(filters, function (filter) {

			filtersQuery += filter.value
	});

	return filtersQuery;
};

module.exports = {

	getTracks: function (rowStart, rowEnd, pageSize, sortColumn, sortOrder, filters, onLoad) {

		if(filters.length > 0) {
			var page = "?offset=" + rowStart;
			var size = "&limit=" + pageSize;
			var type = "&type=track";
			var query = _getFiltersQuery(filters);
			var requestUrl = Constants.SEARCH_ENDPOINT + page + size + type + query;

			$.ajax({
				url: requestUrl,
				type: "GET",
				success: function (data) {

					var i = rowStart,
						newData = [],
						j = 0;

					if (data.tracks && data.tracks.items) {

						for (j = 0; j < pageSize; j++) {
							if(data.tracks.items[j]) {
								newData[i++] = {
									"name": data.tracks.items[j].name,
									"popularity": data.tracks.items[j].popularity,
									"artist": data.tracks.items[j].artists && data.tracks.items[j].artists[0].name,
									"album": data.tracks.items[j].album && data.tracks.items[j].album.name
								};
							}
						}

						//Spotify limits the public API to fetch a maximum number of 100k records
						onLoad(newData, data.tracks.total > Constants.API_MAX_ALLOWED_ITEMS ? Constants.API_MAX_ALLOWED_ITEMS : data.tracks.total);
					} else {
						onLoad([], 0);
					}
				}
			});
		} else {
			onLoad([], 0);
		}
	}
};
