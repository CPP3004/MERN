import React from 'react';
import ReactDOM from 'react-dom/client'; // Import createRoot
import App from './Components/App';
import * as serviceWorker from './serviceWorker';

// Create the root and render the app
const root = ReactDOM.createRoot(document.getElementById('root')); // Create root using createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
