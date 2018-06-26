import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

describe('App, ', () => {
  let wrapper = shallow(
    <App />
  );

  it('renders container', () => {
    expect(wrapper.find('.app').length).toEqual(1);
  });
});