import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent, cleanup } from 'react-testing-library';
afterEach(cleanup);

import Controls from './Controls';

describe('Control Component', () => {
  xit('matches snapshot', () => {
    const domTree = renderer.create(<Controls />);

    expect(domTree.toJSON()).toMatchSnapshot();
  });

  it('close gate function should work', () => {
    const mock = jest.fn();

    const { getByText } = render(<Controls toggleClosed={mock}/>);

    const button = getByText("Close Gate");

    fireEvent.click(button);
    expect(mock).toHaveBeenCalled();
  });


});
