'use strict';

import 'console-polyfill';
import React from 'react';

import DataTableSection from './components/data-table-section.jsx';
import FilterBarSection from './components/filter-bar-section.jsx';

var App = React.createClass({

	render: function () {

		return (
			<div className="content-container">
				<div className="content-plate">
					<div className="content-header">
						<div className="content-header-title">Spotify Tracks Navigator</div>
						<div>
							Displays information about music tracks from the Spotify catalog
							<br />
							In order to search for your favorite song, just type something in the search field and wait for the data to load
							<br />
							The Spotify API does not support sorting the data, so clicking on any of the column headers won't have any effect
							<br />
							CORS support in IE9 is not that good. This means that making cross domain requests, like this example does (requests data from Spotify), will not work in IE9
						</div>
					</div>
					<div className="action-bar">
						<FilterBarSection />
					</div>
					<DataTableSection />
				</div>
			</div>
		);
	}
});

module.exports = App;