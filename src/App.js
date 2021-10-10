import React from 'react';
import './App.css';

import HomePage from './pages/homepage/homepage.component';

function App() {
	return (
		<div>
			<div className="progress-bar-container">
				<p>Work in progress</p>
				<progress value="25" max="100">
					70 %
				</progress>
			</div>
			<HomePage />
		</div>
	);
}

export default App;
