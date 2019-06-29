import React from 'react';
import renderer from 'react-test-renderer';
import Dashboard from './Dashboard';

describe('Dashboard Component', () => {
  it('matches snapshot', () => {
    const domTree = renderer.create(<Dashboard />);

    expect(domTree.toJSON()).toMatchSnapshot();
  });

});
