import React from 'react';
import ReactDOM from "react-dom/client";

import './index.css';
import { persistor, store } from 'redux/store';
import { Provider } from 'react-redux';
import App from 'components/App/App';
import { PersistGate } from 'redux-persist/integration/react';


ReactDOM.createRoot(document.getElementById("root"))
.render(
  <React.StrictMode>

     <Provider store={store}>
     <PersistGate loading={null} persistor={persistor}>
      <App />
      </PersistGate>
     </Provider>
    
  </React.StrictMode>
);
