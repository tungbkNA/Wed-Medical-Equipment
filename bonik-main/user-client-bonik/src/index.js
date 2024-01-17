import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import Store from './redux/Store';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { ENV_URL} from './constants/index'
let { store2, persistor } = Store();

ReactDOM.render(
    
    <React.StrictMode>
        {console.log(ENV_URL)}
        <BrowserRouter>
            <Provider store={store2}>
                <PersistGate loading={null} persistor={persistor}>
                    <App />
                </PersistGate>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root'),
);
