import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent, cleanup } from 'react-testing-library';
import "jest-dom/extend-expect";
afterEach(cleanup);

import Dashboard from './Dashboard';

describe('Dashboard Component', () => {
  xit('matches snapshot', () => {
    const domTree = renderer.create(<Dashboard />);

    expect(domTree.toJSON()).toMatchSnapshot();
  });

  it("close gate should be enabled on default home page", () => {
    const { getByText } = render(<Dashboard />);

    const closeGateButton = getByText("Close Gate");

    expect(closeGateButton.textContent).toEqual("Close Gate");
  })

  it("open gate should be disabled when gate is locked", () => {
    const mock = jest.fn();

    const { getByText, queryByText } = render(<Dashboard toggleClosed={mock} toggleLocked={mock} />);

    const closeGateButton = getByText("Close Gate");

    fireEvent.click(closeGateButton);

    const lockGateButton = queryByText("Lock Gate");
    fireEvent.click(lockGateButton);

    const openGateButton = getByText("Open Gate")
    expect(openGateButton).toBeDisabled();

  });

  it("unlock gate enabled when gate is locked", () => {
    const mock = jest.fn();

    const { getByText, queryByText } = render(<Dashboard toggleClosed={mock} toggleLocked={mock} />);

    const closeGateButton = getByText("Close Gate");

    fireEvent.click(closeGateButton);

    const lockGateButton = queryByText("Lock Gate");
    fireEvent.click(lockGateButton);

    const unlockGateButton = getByText("Unlock Gate")
    expect(unlockGateButton.textContent).toEqual("Unlock Gate");;

  });

});
