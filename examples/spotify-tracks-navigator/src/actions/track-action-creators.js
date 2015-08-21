'use strict';

import Dispatcher from './../dispatcher/dispatcher';
import Constants from './../constants/constants';

var ActionTypes = Constants.ActionTypes;

module.exports = {

	addFilter: function (filter) {

		Dispatcher.dispatch({
			type: ActionTypes.ADD_FILTER,
			filter: filter
		});
	},

	removeAllFiltersByType: function (type) {

		Dispatcher.dispatch({
			type: ActionTypes.REMOVE_ALL_FILTERS_BY_TYPE,
			filterType: type
		});
	},

	setPageSize: function (pageSize) {

		Dispatcher.dispatch({
			type: ActionTypes.SET_PAGE_SIZE,
			pageSize: pageSize
		});
	}
};