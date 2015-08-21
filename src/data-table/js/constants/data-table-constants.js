'use strict';

import keyMirror from 'keymirror';

module.exports = {

	SortTypes: keyMirror({
		ASC: null,
		DESC: null
	}),
	CHANGE_EVENT: 'change',
	ActionTypes: keyMirror({
		SORT_ROWS_BY: null,
		TOGGLE_SELECTED: null,
		TOGGLE_SELECTED_ALL: null,
		FILTER_BY: null,
		REFRESH: null
	}),
	ComponentTypes: {
		EXTERNAL_FIXED_CONTENT_SIZE: 0,
		MAX_HEIGHT: 450,
		HEADER_HEIGHT: 34,
		ROW_HEIGHT: 35,
		EMPTY_ROW_HEIGHT: 0.0000001,
		DEFAULT_ROWS_COUNT: 1,
		DUMMY_ROW_DATA: {
			dummy: "dummy"
		},
		EMPTY_MESSAGE: "There is no data to display"
	},
	ColumnTypes: {
		SELECTABLE: 'selectable',
		SELECTABLE_COLUMN_WIDTH: 49,
		INHERIT: 'inherit'
	},
	NUMBER_OF_ROWS_PER_REQUEST: 5
};