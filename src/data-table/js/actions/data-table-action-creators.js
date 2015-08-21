'use strict';

import DataTableDispatcher from './../dispatcher/data-table-dispatcher';
import DataTableConstants from './../constants/data-table-constants';

var ActionTypes = DataTableConstants.ActionTypes;

module.exports = {

	toggleSelectedAll: function() {

		DataTableDispatcher.dispatch({
			type: ActionTypes.TOGGLE_SELECTED_ALL
		});
	},

	toggleSelected: function(index) {

		DataTableDispatcher.dispatch({
			type: ActionTypes.TOGGLE_SELECTED,
			index: index
		});
	},

	sortRowsBy: function(cellDataKey) {

		DataTableDispatcher.dispatch({
			type: ActionTypes.SORT_ROWS_BY,
			cellDataKey: cellDataKey
		});
	},

	filterBy: function(filters) {

		DataTableDispatcher.dispatch({
			type: ActionTypes.FILTER_BY,
			filters: filters
		});
	},

	refresh: function () {

		DataTableDispatcher.dispatch({
			type: ActionTypes.REFRESH
		});
	}
};
