'use strict';

import _ from 'underscore';

module.exports = {

	/*
	* The objects inside the arrays must be of the following structure {name: "String", value: "valid JSON data type"}
	*/
	filterArraysAreSame: function (array1, array2) {

		if(array1.length === 0 && array2.length === 0) {
			return true;
		}

		if(array1.length === array2.length) {

			var stringifiedArray1 = [],
				stringifiedArray2 = [];

			_.each(array1, function (item) {
				stringifiedArray1.push(JSON.stringify(item));
			});

			_.each(array2, function (item) {
				stringifiedArray2.push(JSON.stringify(item));
			});

			if(_.difference(stringifiedArray1, stringifiedArray2).length > 0) {
				return false
			}

			return true;
		} else {
			return false;
		}
	}
};