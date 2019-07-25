import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent, cleanup } from 'react-testing-library';

afterEach(cleanup); // cleans up tests so tests starts with clean slate

import "jest-dom/extend-expect";

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

  it("lock gate should be disabled by default", () => {
    const { getByText } = render(<Controls />);
    const lockButton = getByText(/lock gate/i);
    expect(lockButton).toBeDisabled();
  });

  it('lock gate function should work', () => {
    const mock = jest.fn();

    const { getByText, queryByText } = render(<Controls toggleClosed={mock}/>);

    const button = getByText("Close Gate");

    fireEvent.click(button);

    const lockGateButton = queryByText("Lock Gate");
    expect(lockGateButton.textContent).toEqual("Lock Gate");
  })

});
