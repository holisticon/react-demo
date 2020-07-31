import React from 'react';
import ReactDOM from 'react-dom';

import App from './app/app';
import { store } from './app/state/store';
import { Provider } from 'react-redux';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
