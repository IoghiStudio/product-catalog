import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router} from 'react-router-dom';
import { App } from './Components/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>
);
