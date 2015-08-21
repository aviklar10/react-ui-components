var React = require('react'),
	ReactWidgetsList = require('react-widgets/lib/List'),
	CustomPropTypes = require('react-widgets/lib/util/propTypes');

var RUCList = React.createClass({

	displayName: 'RUCList',

	propTypes: {
		disabledItems: React.PropTypes.array,
		data:          React.PropTypes.array,
		onSelect:      React.PropTypes.func,
		onMove:        React.PropTypes.func,
		itemComponent: CustomPropTypes.elementType,

		selectedIndex: React.PropTypes.number,
		focusedIndex:  React.PropTypes.number,
		valueField:    React.PropTypes.string,
		textField:     React.PropTypes.string,

		optID:         React.PropTypes.string,

		messages:      React.PropTypes.shape({
			emptyList:   React.PropTypes.string
		})
	},

	componentWillMount(){
		var parent = this

		this.setState({
			listItem: React.createClass({
				render() {
					var classes = parent.isDisabled(this.props.item) ? 'rw-state-disabled' : '',
						ItemComponent = parent.props.itemComponent;

					return (
						<div className={classes}><ItemComponent item={this.props.item} /></div>
					);
				}
			})
		})
	},

	render() {
		return (
			<ReactWidgetsList {...this.props}
				ref='list'
				itemComponent={this.state.listItem}
				onSelect={ item => {
					if (!this.isDisabled(item))
						this.props.onSelect(item)
				}}
			/>
		)
	},

	isDisabled(item){
		return this.props.disabledItems
			&& this.props.disabledItems.some( disabledItem => disabledItem.id === item.id )
	},

	move(step, ...args){

		var stop, dir, next, item = [...args][0], remainingArgs;

		remainingArgs = [...args];
		remainingArgs = remainingArgs.splice(1);

		if (step === 'last' || step === 'prev') {
			stop = this.refs.list.first();
			dir = 'prev';
		} else {
			stop = this.refs.list.last();
			dir = 'next';
		}

		if(item) {
			next = this.refs.list[dir](item, ...remainingArgs); // next, prev
		} else {
			next = this.refs.list[step](); //last, first
		}

		if(!next) {
			return;
		}

		while( next !== stop && this.isDisabled(next)) {
			next = this.refs.list[dir](next, ...remainingArgs);
		}

		return this.isDisabled(next) ? item  : next;
	},

	first() {

		return this.move('first');
	},

	last() {

		return this.move('last');
	},

	next(...args){

		return this.move('next', ...args);
	},

	prev(...args){

		return this.move('prev', ...args);
	}
});

module.exports = RUCList;