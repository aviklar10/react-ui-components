'use strict';

var keyMirror = require('keymirror');

module.exports = {

	SEARCH_ENDPOINT: 'https://api.spotify.com/v1/search',
	CHANGE_EVENT: 'change',
	PAGE_SIZE: 5,
	API_MAX_ALLOWED_ITEMS: 100000,
	ActionTypes: keyMirror({
		ADD_FILTER: null,
		REMOVE_ALL_FILTERS_BY_TYPE: null,
		SET_PAGE_SIZE: null
	}),
	FilterTypes: {
		TRACK: 'track'
	},
	SEARCH_INPUT_TIMEOUT: 1000,
	SEARCH_INPUT_MIN_CHARACTERS: 3
};