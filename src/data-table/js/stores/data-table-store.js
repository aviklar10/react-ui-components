'use strict';

import EventEmitter from 'events';
import _ from 'underscore';

import DataTableDispatcher from './../dispatcher/data-table-dispatcher';
import DataTableConstants from './../constants/data-table-constants';

var ActionTypes = DataTableConstants.ActionTypes,
	_queue = [],
	_data = [],
	_sortBy = '',
	_sortDir = DataTableConstants.SortTypes.ASC,
	_filters = [],
	_queueFlushID = null,
	_rowsCount = DataTableConstants.ComponentTypes.DEFAULT_ROWS_COUNT,
	_onGetRows = function () {},
	_pageSize = DataTableConstants.NUMBER_OF_ROWS_PER_REQUEST,
	_isSelectAllChecked = false,
	_isEmpty = true,
	_queueAsyncID = 0,
	_isLoading = false,
	_loadingCounter = 0,
	_noData = true;

function _queueRequestFor(rowIndex) {

	_queue.push(rowIndex);

	if (!_queueFlushID) {
		_queueFlushID = setTimeout(_flushRequestQueue.bind(this), 200);
	}
}

function _flushRequestQueue() {

	var sectionsToLoad = _queue.reduce(function (requestSections, rowIndex) {
		var rowBase = rowIndex - (rowIndex % _pageSize);
		if (requestSections.indexOf(rowBase) === -1) {
			return requestSections.concat(rowBase);
		}

		return requestSections;
	}, []);

	//console.log("sectionsToLoad: " + sectionsToLoad);

	if(sectionsToLoad.length > 0) {
		_isLoading = true;
		DataTableStore.emitChange();
	}

	sectionsToLoad.forEach(function (rowBase) {
		_loadingCounter++;

		_loadDataRange(
			rowBase,
			rowBase + _pageSize
		);
	}, this);

	_queue = [];
	_queueFlushID = null;
}

function _loadDataRange(rowStart, rowEnd) {

	_onGetRows(rowStart, rowEnd, _pageSize, _sortBy, _sortDir, _filters, function (queueAsyncID, data, totalElements) {
		if(_queueAsyncID === queueAsyncID) {
			_.extend(_data, data);

			_loadingCounter--;
			if(_loadingCounter === 0) {
				_isLoading = false;

			}
			_rowsCount = totalElements === 0 ? DataTableConstants.ComponentTypes.DEFAULT_ROWS_COUNT : totalElements;
			_isEmpty = totalElements === 0 ? true : false;
			_noData = totalElements === 0 ? true: false;

			DataTableStore.emitChange();
		}
	}.bind(this, _queueAsyncID));
}

function _sanitizeFilters (filters) {

	var _sanitizedFilters = [];

	_.each(filters, function (filter) {
		_sanitizedFilters.push({
			name: filter.name,
			value: _.escape(filter.value)
		});
	});

	return _sanitizedFilters;
}

var DataTableStore = _.extend({}, EventEmitter.prototype, {

	emitChange: function() {

		this.emit(DataTableConstants.CHANGE_EVENT);
	},

	addChangeListener: function(callback) {

		this.on(DataTableConstants.CHANGE_EVENT, callback);
	},

	removeChangeListener: function(callback) {

		this.removeListener(DataTableConstants.CHANGE_EVENT, callback);
	},

	getRowData: function(rowIndex, onGetRows, pageSize, filters) {

		_onGetRows = onGetRows;
		_pageSize = pageSize;
		_filters = _sanitizeFilters(filters);

		if (!_data[rowIndex]) {
			_queueRequestFor(rowIndex);
			_data[rowIndex] = DataTableConstants.ComponentTypes.DUMMY_ROW_DATA;
		}

		return _data[rowIndex];
	},

	getRowsCount: function() {

		return _rowsCount;
	},

	getIsSelectAllChecked: function() {

		return _isSelectAllChecked;
	},

	getAllSelectedRows: function () {

		if(_data.length === 0) {
			return [];
		}

		var selectedRows = [];

		_.each(_data, function(item) {
			if(item.selected === true) {
				selectedRows.push(item);
			}
		});

		return selectedRows;
	},

	getIsEmpty: function () {

		return _isEmpty;
	},

	getIsLoading: function () {

		return _isLoading;
	},

	getNoData: function () {

		return _noData;
	},

	getSortBy: function () {

		return _sortBy;
	},

	getSortDir: function () {

		return _sortDir;
	}
});

DataTableStore.dispatchToken = DataTableDispatcher.register(function(action) {

	switch (action.type) {

		case ActionTypes.SORT_ROWS_BY:

			_data = [];
			_rowsCount = DataTableConstants.ComponentTypes.DEFAULT_ROWS_COUNT;
			_isEmpty = true;
			_noData = false;
			_queueAsyncID++;
			_loadingCounter = 0;
			_sortBy = action.cellDataKey;
			_sortDir = _sortDir === DataTableConstants.SortTypes.ASC ? DataTableConstants.SortTypes.DESC : DataTableConstants.SortTypes.ASC;
			_isSelectAllChecked = false;

			DataTableStore.emitChange();

			break;
		case ActionTypes.TOGGLE_SELECTED:

			var selected = !_data[action.index].selected,
				uncheckedItem;

			_data[action.index] = _.extend({}, _data[action.index], {selected: selected});

			if(!selected) {
				_isSelectAllChecked = false;
			} else {
				uncheckedItem = _.find(_data, function(item) {
					return item.selected === undefined || item.selected === false;
				});

				uncheckedItem ? _isSelectAllChecked = false : _isSelectAllChecked = true;
			}

			DataTableStore.emitChange();

			break;
		case ActionTypes.TOGGLE_SELECTED_ALL:

			_isSelectAllChecked = !_isSelectAllChecked;

			var newData = _data.map(function (item) {
				return _.extend({}, item, {selected: _isSelectAllChecked})
			});

			_data = newData;

			DataTableStore.emitChange();

			break;
		case ActionTypes.FILTER_BY:

			_data = [];
			_rowsCount = DataTableConstants.ComponentTypes.DEFAULT_ROWS_COUNT;
			_isEmpty = true;
			_noData = false;
			_queueAsyncID++;
			_loadingCounter = 0;
			_isSelectAllChecked = false;
			_filters = _sanitizeFilters(action.filters);

			DataTableStore.emitChange();

			break;
		case ActionTypes.REFRESH:

			_data = [];
			_rowsCount = DataTableConstants.ComponentTypes.DEFAULT_ROWS_COUNT;
			_isEmpty = true;
			_noData = false;
			_queueAsyncID++;
			_loadingCounter = 0;
			_isSelectAllChecked = false;

			DataTableStore.emitChange();

			break;
		default:
			//noop
	}
});

module.exports = DataTableStore;