// __tests__/Main-test.js
import React from 'react';
import Main from '../main.component';


import { shallow } from 'enzyme';
// Setup adapter to work with enzyme 3.2.0
const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
const ReactDOM = require('react-dom')
Enzyme.configure({ adapter: new Adapter() });


describe('Main Component', () => {
  let wrapper;
  // our mock login function to replace the one provided by mapDispatchToProps
  const mockMainfn = jest.fn();
  const mockLocationfn = jest.fn();
  beforeEach(() => {
    // pass the mock function as the login prop 
    wrapper = shallow(<Main store={mockMainfn} location={mockLocationfn} />)
  });
// ...tests here...

    wrapper.isRunning()

    expect(wrapper.state.isRunning).toEqual(false);
})