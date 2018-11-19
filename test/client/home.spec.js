
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Home from '../../src/pages/Home/Home';

Enzyme.configure({ adapter: new Adapter() });

describe('<Home />', () => {
  it('renders an <h1> element', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find('h1')).to.have.lengthOf(1);
  });
});