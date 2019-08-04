import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div2 = document.createElement('div2');
  ReactDOM.render(<App />, div2);
  ReactDOM.unmountComponentAtNode(div2);
});
