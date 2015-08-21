'use strict';

import React from 'react';
import DropdownList from 'ruc/dropdown-list/js/dropdown-list.jsx';
import TrackActionCreators from './../actions/track-action-creators';
import TrackStore from './../stores/track-store';
import Constants from './../constants/constants';

import './filter-bar-section.less';

var _trackTimeoutHandle;

function _onTrackChange (event) {

	var trackValue = event.target.value;

	if(_trackTimeoutHandle) {
		clearTimeout(_trackTimeoutHandle);
	}

	_trackTimeoutHandle = setTimeout(function () {

		if(trackValue.length > 0) {
			if(trackValue.length >= Constants.SEARCH_INPUT_MIN_CHARACTERS) {
				TrackActionCreators.addFilter({
					value: trackValue,
					type: Constants.FilterTypes.TRACK
				});
			}
		} else {
			TrackActionCreators.removeAllFiltersByType(Constants.FilterTypes.TRACK);
		}
	}, Constants.SEARCH_INPUT_TIMEOUT);

	//small dirty hack to preserve the text in the input during the timeout. this will be replaced with the value returned by  _getStateFromStores()
	this.setState({
		trackSelectedFilter: {
			name: trackValue
		}
	})
}

var _listItem = React.createClass({

	render: function () {

		var item = this.props.item;

		return (
			<span>
				<span title={ item.name } className="icon glyphicon glyphicon-wrench"></span>
				<span>{item.name}</span>
			</span>
		);
	}
});

var _valueInput = React.createClass({

	render: function () {

		var item = this.props.item;

		return (
			<span>
				<span title={ item.name }>Page size: {item.name}</span>
			</span>
		);
	}
});

var _onPageSizeListChange = function (pageSize) {

	TrackActionCreators.setPageSize(pageSize);
};

function _getStateFromStores () {

	return {
		trackSelectedFilter: TrackStore.getTrackSelectedFilter(),
		pageSizes: TrackStore.getAvailablePageSizes(),
		pageSize: TrackStore.getPageSize()
	};
}

var FilterBarSection = React.createClass({

	getInitialState () {

		return _getStateFromStores();
	},

	componentDidMount() {

		TrackStore.addChangeListener(this._onChange);
	},

	componentWillUnmount: function() {

		TrackStore.removeChangeListener(this._onChange);
	},

	render: function () {

		var pageSizeListProps = {
			duration: 0,
			valueField: 'id',
			textField: "name",
			onChange: _onPageSizeListChange.bind(this),
			data: this.state.pageSizes,
			defaultValue: this.state.pageSizes[0],
			value: this.state.pageSize,
			disabledItems: [this.state.pageSizes[this.state.pageSizes.length - 1]]
		};

		return (
			<div className="filter-bar-section">
				<div className="row">
					<div className="col-sm-2 col-md-3 col-lg-2">
						<div className="form-group">
							<input type="text" placeholder = "Enter a track - minimum 3 characters..." className="filterBar_searchInput" value={this.state.trackSelectedFilter ? this.state.trackSelectedFilter.name : ""} onChange={_onTrackChange.bind(this)} />
						</div>
					</div>
					<div className="col-sm-2 col-md-3 col-lg-2">
						<div className="form-group">
							<DropdownList { ...pageSizeListProps }
								itemComponent = {_listItem}
								valueComponent = {_valueInput}></DropdownList>
						</div>
					</div>
				</div>
			</div>
		);
	},

	_onChange () {

		this.setState(_getStateFromStores());
	}
});

module.exports = FilterBarSection;