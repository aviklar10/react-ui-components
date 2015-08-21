'use strict';

import 'console-polyfill';
import React from 'react';

import App from './src/app.jsx'

React.render(
	<div>
		<App />
	</div>
	, document.getElementById('main-placeholder')
);