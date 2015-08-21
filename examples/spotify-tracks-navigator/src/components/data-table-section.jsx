'use strict';

import React from 'react';
import _ from 'underscore';

import RUCDataTable from 'ruc/data-table/js/data-table.jsx';
import WebAPIUtils from './../utils/web-api-utils';
import TrackStore from './../stores/track-store';
import Constants from './../constants/constants';

function _getStateFromStores () {

	return {
		filters: TrackStore.getAppliedFilters(),
		pageSize: TrackStore.getPageSize().name
	};
}

var DataTableSection = React.createClass({

	getInitialState () {

		return _.extend(_getStateFromStores(), {
			fdtColumns: [{
				label: "NAME",
				name: "name",
				width: 760
			}, {
				label: "POPULARITY",
				name: "popularity",
				width: 200,
				cellRenderer: this._popularityRenderer
			}, {
				label: "ARTIST",
				name: "artist",
				width: 360
			}, {
				label: "ALBUM",
				name: "album"
			}],
			externalFixedContentSize: 28,
			autoWidth: true,
			onGetRows: WebAPIUtils.getTracks
		})
	},

	componentDidMount() {

		TrackStore.addChangeListener(this._onChange.bind(this));
	},

	componentWillUnmount: function() {

		TrackStore.removeChangeListener(this._onChange);
	},

	render: function () {

		return (
			<div>
				<RUCDataTable ref={"trackDataTable"} {...this.state}/>
			</div>
		);
	},

	_onChange () {

		var oldState = this.state;
		var newState = _getStateFromStores();

		this.setState(newState);

		if(oldState.pageSize !== newState.pageSize) {
			this.refs.trackDataTable.refresh();
		}
	},

	_popularityRenderer (cellData) {

		//5 stars ... ranking between 80 and 100
		var starsNumber = _.isNumber(cellData) ? parseInt(parseInt(cellData) * 5 / 100) + 1 : 0,
			i,
			stars = [];

		for (i = 0; i < starsNumber; i++) {
			stars.push(<span>☆</span>);
		}

		return (
			<div class="rating">
				{stars}
			</div>
		);
	}
});

module.exports = DataTableSection;