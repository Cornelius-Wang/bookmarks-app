import React from 'react';
import ReactDOM from 'react-dom';
import {BrowswerRouter} from 'react-router-dom';
import Nav from './Nav';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowswerRouter>
    <App />
    </BrowswerRouter>, 
    div);
  ReactDOM.unmountComponentAtNode(div);
});
