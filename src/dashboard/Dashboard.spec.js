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

  it("displays closed on close button", () => {
    const mock = jest.fn();

    const { getByText, queryByText } = render(<Dashboard toggleClosed={mock} />);

    const closeGateButton = getByText("Close Gate");

    fireEvent.click(closeGateButton);

    const closedDisplay = queryByText("Closed");
    expect(closedDisplay.textContent).toEqual("Closed");;

  });

  it("displays locked on locked gate", () => {
    const mock = jest.fn();

    const { getByText, queryByText } = render(<Dashboard toggleClosed={mock} toggleLocked={mock} />);

    const closeGateButton = getByText("Close Gate");

    fireEvent.click(closeGateButton);

    const lockGateButton = queryByText("Lock Gate");
    fireEvent.click(lockGateButton);

    const lockedDisplay = getByText("Locked")
    expect(lockedDisplay.textContent).toEqual("Locked");

  });

  it("displays unlocked when unlocked gate", () => {
    const mock = jest.fn();

    const { getByText, queryByText } = render(<Dashboard toggleClosed={mock} toggleLocked={mock} />);

    const closeGateButton = getByText("Close Gate");

    fireEvent.click(closeGateButton);

    const lockGateButton = queryByText("Lock Gate");
    fireEvent.click(lockGateButton);

    const unlockGateButton = getByText("Unlock Gate");
    fireEvent.click(unlockGateButton);
    const lockedDisplay = getByText("Unlocked")
    expect(lockedDisplay.textContent).toEqual("Unlocked");;

  });

  it('should show red on close gate from closed display', () => {
    const mock = jest.fn();
    const { getByText } = render(<Dashboard toggleClosed={mock} />);

    const closeGateButton = getByText('Close Gate');
    fireEvent.click(closeGateButton);

    const closedDisplay = getByText('Closed')

    expect(closedDisplay).toHaveClass("red-led");;

  });

  it('should show red on locked gate from locked display ', () => {
    const mock = jest.fn();
    const { getByText } = render(<Dashboard toggleClosed={mock} toggleLocked={mock}/>);

    const closeGateButton = getByText('Close Gate');
    fireEvent.click(closeGateButton);

    const lockGateButton = getByText("Lock Gate");
    fireEvent.click(lockGateButton);

    const lockedDisplay = getByText('Locked')

    expect(lockedDisplay).toHaveClass("red-led");;

  });

});
