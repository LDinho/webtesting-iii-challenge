import React from 'react';
import renderer from 'react-test-renderer';
import Dashboard from './Dashboard';

describe('Dashboard Component', () => {
  xit('matches snapshot', () => {
    const domTree = renderer.create(<Dashboard />);

    expect(domTree.toJSON()).toMatchSnapshot();
  });

});
