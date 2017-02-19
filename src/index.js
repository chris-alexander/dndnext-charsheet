import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import App from './components/App';
import NotFound from './components/NotFound';

import 'muicss/dist/css/mui.css';
import './css/index.css';

const Root = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exactly pattern="/" component={App} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

render(<Root />, document.querySelector('#root'));
