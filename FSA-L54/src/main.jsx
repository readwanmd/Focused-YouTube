import { StoreProvider } from 'easy-peasy';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import store from './store/index.js';

ReactDOM.createRoot(document.getElementById('root')).render(
	<StoreProvider store={store}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</StoreProvider>
);
