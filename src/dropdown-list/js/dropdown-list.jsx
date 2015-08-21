'use strict';

import './../less/dropdown-list.less';

var React = require('react'),
	ReactWidgets = require('react-widgets'),
	RUCList = require('./list.jsx');


var RUCDropdownList = React.createClass({

	getInitialState: function() {
		return {
			disabledItems: this.props.disabledItems
		}
	},

	componentWillReceiveProps: function(props) {

		this.setState({
			disabledItems: props.disabledItems
		});
	},

	render(){
		var disabled = this.props.disabled,
			disabledItems = Array.isArray(this.state.disabledItems) ? this.state.disabledItems : [];

		return (
			<ReactWidgets.DropdownList {...this.props}
				disabled={disabled}
				disabledItems={disabledItems}
				listComponent={RUCList}/>
		)
	}
});

module.exports = RUCDropdownList;