import React from 'react';
import renderer from 'react-test-renderer';
import Controls from './Controls';

describe('Control Component', () => {
  it('matches snapshot', () => {
    const domTree = renderer.create(<Controls />);

    expect(domTree.toJSON()).toMatchSnapshot();
  });

});
