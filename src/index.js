import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route} from 'react-router-dom';

import App from './components/App';
import NotFound from './components/NotFound';

import './css/index.css';

const Root = () => (
  <BrowserRouter>
    <div>
      <Route exactly pattern="/" component={App} />
      <Route component={NotFound} />
    </div>
  </BrowserRouter>
);

render(<Root />, document.querySelector('#root'));
