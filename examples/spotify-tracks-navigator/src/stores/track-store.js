'use strict';

import EventEmitter from 'events';
import _ from 'underscore';

import Dispatcher from './../dispatcher/dispatcher';
import Constants from './../constants/constants';

var ActionTypes = Constants.ActionTypes;
var _appliedFilters = [];
var _pageSizes = [{id: 0, name: 5}, {id: 1, name: 10}, {id: 2, name: 25}, {id: 3, name: 50}, {id: 4, name: 100}];
var _pageSize = _pageSizes[0];

var TrackStore = _.extend({}, EventEmitter.prototype, {

	emitChange: function() {

		this.emit(Constants.CHANGE_EVENT);
	},

	addChangeListener: function(callback) {

		this.on(Constants.CHANGE_EVENT, callback);
	},

	removeChangeListener: function(callback) {

		this.removeListener(Constants.CHANGE_EVENT, callback);
	},

	getAppliedFilters: function () {

		var filters = [];

		_.forEach(_appliedFilters, function (filter) {
			filters.push({
				name: filter.type,
				value: filter.name
			});
		});

		return filters;
	},

	getTrackSelectedFilter: function () {

		//only supporting one filter per type
		return _.filter(_appliedFilters, function (filter) {
			return filter.type === Constants.FilterTypes.TRACK
		})[0];
	},

	getAvailablePageSizes: function () {

		return _pageSizes;
	},

	getPageSize: function () {

		return _pageSize;
	}
});

TrackStore.dispatchToken = Dispatcher.register(function(action) {

	switch (action.type) {

		/*
		 * @param {Object} action.filter {id: 1, type: "track"}
		 */
		case ActionTypes.ADD_FILTER:

			var filter;

			if (action.filter.type === Constants.FilterTypes.TRACK) {
				filter = {
					id: -1,
					type: action.filter.type,
					name: action.filter.value
				};
			}

			if(filter) {
				//check for duplicates
				if (!_.findWhere(_appliedFilters, {id: filter.id, type: action.filter.type, name: filter.name})) {
					//only supporting one filter per type
					_appliedFilters = _.without(_appliedFilters, _.findWhere(_appliedFilters, {type: action.filter.type}));

					_appliedFilters.push({
						id: filter.id,
						type: action.filter.type,
						name: filter.name
					});
				}

				TrackStore.emitChange();
			}

			break;
		case ActionTypes.REMOVE_ALL_FILTERS_BY_TYPE:

			_appliedFilters = _.without(_appliedFilters, _.findWhere(_appliedFilters, {type: action.filterType}));

			TrackStore.emitChange();

			break;
		case ActionTypes.SET_PAGE_SIZE:

			_pageSize = _.findWhere(_pageSizes, {id: action.pageSize.id});

			TrackStore.emitChange();

			break;
		default:
			//noop
	}
});

module.exports = TrackStore;