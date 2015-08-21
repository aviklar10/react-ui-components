'use strict';

import FixedDataTable from 'fixed-data-table';
import 'fixed-data-table/dist/fixed-data-table.css';
import $ from 'jquery';
import _ from 'underscore';
import React from 'react';

import DataTableStore from './stores/data-table-store';
import DataTableActionCreators from './actions/data-table-action-creators';
import DataTableConstants from './constants/data-table-constants';
import Helpers from './utils/helpers';

import './../less/data-table.less';

var Table = FixedDataTable.Table;
var Column = FixedDataTable.Column;

function _getStateFromStores () {

	return {
		rowsCount: DataTableStore.getRowsCount(),
		isSelectAllChecked: DataTableStore.getIsSelectAllChecked(),
		sortBy: DataTableStore.getSortBy(),
		sortDir: DataTableStore.getSortDir()
	};
}

var RUCDataTable = React.createClass({

	/*
	 * Public API members
	 */
	propTypes: {

		//FixedDataTable props below
		fdtTable: React.PropTypes.object.isRequired,
		fdtColumns: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,

		//RUCDataTable props below
		isSelectable: React.PropTypes.bool,
		selectableColumn: React.PropTypes.object,
		autoWidth: React.PropTypes.bool,
		externalFixedContentSize: React.PropTypes.number,
		onGetRows: React.PropTypes.func.isRequired,
		pageSize: React.PropTypes.number.isRequired,
		filters: React.PropTypes.arrayOf(React.PropTypes.object),
		onLoading: React.PropTypes.func
	},

	/*
	* Get all the selected rows
	*/
	getAllSelectedRows () {

		return DataTableStore.getAllSelectedRows().slice(); //new array object
	},

	refresh () {

		DataTableActionCreators.refresh();
	},

	getDefaultProps () {

		return {
			fdtTable: {
				rowHeight: DataTableConstants.ComponentTypes.ROW_HEIGHT,
				maxHeight: DataTableConstants.ComponentTypes.MAX_HEIGHT,
				headerHeight: DataTableConstants.ComponentTypes.HEADER_HEIGHT
			},
			isSelectable: true,
			selectableColumn: {
				type: DataTableConstants.ColumnTypes.SELECTABLE,
				width: DataTableConstants.ColumnTypes.SELECTABLE_COLUMN_WIDTH
			},
			autoWidth: false,
			externalFixedContentSize: DataTableConstants.ComponentTypes.EXTERNAL_FIXED_CONTENT_SIZE,
			filters: []
		}
	},

	getInitialState () {

		var stateFromStores = _getStateFromStores();

		return _.extend(stateFromStores, {
			availableWidth: this._getAvailableWidth(),
			columns: this._getNormalizeColumns(this.props.fdtColumns)
		});
	},

	componentWillReceiveProps (props) {

		/*
		 * Public API members
		 */
		if(this.props.autoWidth !== props.autoWidth) {
			this._setupAutoWidthBehavior(props.autoWidth);
		}

		if (!Helpers.filterArraysAreSame(this.props.filters, props.filters)) {
			DataTableActionCreators.filterBy(props.filters);
		}
	},

	componentDidMount() {

		this._setupAutoWidthBehavior(this.props.autoWidth);

		DataTableStore.addChangeListener(this._onChange);
	},

	componentWillUnmount: function() {

		DataTableStore.removeChangeListener(this._onChange);
	},

	render () {

		var width = this.props.isSelectable ? this.props.selectableColumn.width : 0;

		_.each(this.state.columns, function (column) {
			width += column.width;
		});

		var rowHeight = DataTableStore.getIsEmpty() ? DataTableConstants.ComponentTypes.EMPTY_ROW_HEIGHT : this.props.fdtTable.rowHeight;

		//Notifies when the component is loading / stop loaded data
		if(this.props.onLoading) {
			this.props.onLoading(DataTableStore.getIsLoading());
		}

		return (
			<div>
				{this._renderLoading()}
				<Table
					{ ...this.props.fdtTable }
					rowHeight={rowHeight}
					rowsCount={this.state.rowsCount}
					onRowClick={this._onRowClick}
					headerDataGetter={this._headerDataGetter}
					width={width}
					rowGetter={this._rowGetter}>
					{this._renderColumns()}
				</Table>
				{this._renderNoData()}
			</div>
		)
	},

	_getAvailableWidth () {

		return ($(window).width() - this.props.externalFixedContentSize - (this.props.isSelectable ? this.props.selectableColumn.width : 0));
	},

	/*
	* Only one "autoWidth" column is allowed and it must be specified as the last column.
	*
	* */
	_getNormalizeColumns (columns) {

		var normalizedColumns = [],
			availableWidth = this._getAvailableWidth(),
			totalAvailableWidthPercentage = 0;

		columns.forEach(function (column) {

			if(_.isNumber(column.width)) {
				column.autoWidth = false;
				column.availableWidthPercentage = column.width / availableWidth;
				totalAvailableWidthPercentage += column.availableWidthPercentage;
			} else {
				column.autoWidth = true;
				column.availableWidthPercentage = 1 - totalAvailableWidthPercentage;
			}

			normalizedColumns.push(column);
		})

		return normalizedColumns;
	},

	_renderLoading () {

		//todo: inject the loading bar inside "componentDidUpdate"
		if(DataTableStore.getIsLoading()) {
			return (
				<div className="data-table-loading-bar"></div>
			);
		}

		return (
			<div className="empty-data-table-loading-bar"></div>
		);
	},

	_renderNoData () {

		if(DataTableStore.getNoData()) {
			return (
				<div className="empty-data-table-message">{DataTableConstants.ComponentTypes.EMPTY_MESSAGE}</div>
			);
		}
	},

	_renderColumns () {

		var columns = [];

		if(this.props.isSelectable) {
			columns.push(
				<Column
					width={this.props.selectableColumn.width}
					dataKey='selected'
					cellRenderer={this._selectedCellRenderer}
					headerRenderer={this._selectedHeaderRenderer}
				/>
			);
		}

		_.each(this.state.columns, function (column) {

			var originalLabel = column.label;

			columns.push(<Column
				{...column}
				label={(column.name === this.state.sortBy ? (this.state.sortDir === DataTableConstants.SortTypes.ASC ? "+" : "-") : "")} //this hack forces the header to re-render in order to display the sort icon
				dataKey={column.name}
				headerRenderer={this._columnHeaderRenderer.bind(this, originalLabel)}
			/>);
		}, this);

		return columns;
	},

	_columnHeaderRenderer (label, cellDataKey) {

		return (
			<div tabIndex="0" className="public_fixedDataTableCell_cellContent_sortable" onClick={this._onSortRowsBy.bind(null, cellDataKey)}>
				{label}
				{this._renderSort(cellDataKey)}
			</div>
		);
	},

	_renderSort (columnName) {

		var isSorted = columnName === this.state.sortBy;

		if(isSorted) {
			if(this.state.sortDir === DataTableConstants.SortTypes.ASC) {
				return (
					<span className="ico-sort-asc"></span>
				);
			}

			return (
				<span className="ico-sort-desc"></span>
			);
		}

		return null;
	},

	_selectedCellRenderer (cellData, cellDataKey) {

		return (<div className="public_fixedDataTableCell_cellContent_selectable">
			<input type="checkbox" tabIndex={-1} checked={cellData} onChange={function() {}} />
		</div>);
	},

	_selectedHeaderRenderer (label, cellDataKey) {

		return (<div className="public_fixedDataTableCell_cellContent_selectable">
			<input type="checkbox" checked={this.state.isSelectAllChecked} onChange={this._onCheckAll} />
		</div>);
	},

	_onChange () {

		this.setState(_getStateFromStores());
	},

	_rowGetter (rowIndex) {

		return DataTableStore.getRowData(rowIndex, this.props.onGetRows, this.props.pageSize, this.props.filters);
	},

	_headerDataGetter (header) {

		if(header === "selected") {
			return this.state.isSelectAllChecked;
		}

		return header;
	},

	_onSortRowsBy (cellDataKey) {

		DataTableActionCreators.sortRowsBy(cellDataKey);
	},

	_onCheckAll (e) {

		DataTableActionCreators.toggleSelectedAll();
	},

	_onRowClick (e, index) {

		DataTableActionCreators.toggleSelected(index);
	},

	_setupAutoWidthBehavior (isAutoWidth) {

		if(isAutoWidth) {
			$(window).off('resize', this._onResize);
			$(window).on('resize', this._onResize);

			this._updateColumnWidths();
		} else {
			$(window).off('resize', this._onResize);
		}
	},

	_onResize () {

		clearTimeout(this._updateTimer);
		this._updateTimer = setTimeout(this._updateColumnWidths, 16);
	},

	_updateColumnWidths () {

		var availableWidth = this._getAvailableWidth(),
			previousAvailableWidth = this.state.availableWidth,
			i,
			newColumns = this.state.columns.slice(),
			totalWidth = 0;

		for (i = 0; i < this.state.columns.length; i++) {
			if(newColumns[i].autoWidth) {
				newColumns[i].width = availableWidth - totalWidth;
			} else {
				newColumns[i].width =  newColumns[i].width + (newColumns[i].availableWidthPercentage * (availableWidth - previousAvailableWidth));
				totalWidth += newColumns[i].width;
			}
		}

		this.setState({
			availableWidth: availableWidth,
			columns: newColumns
		});
	}
});

module.exports = RUCDataTable;