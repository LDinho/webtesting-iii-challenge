import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent, cleanup } from 'react-testing-library';
import "jest-dom/extend-expect";
afterEach(cleanup);

import Display from './Display';

describe('Display Component', () => {
  xit('matches snapshot', () => {
    const domTree = renderer.create(<Display />);

    expect(domTree.toJSON()).toMatchSnapshot();
  });

  it('should show unlocked on default', () => {

    const { getByText } = render(<Display />);

    const button = getByText('Unlocked');

    expect(button.textContent).toEqual("Unlocked");;

  })

  it('should show open on default', () => {

    const { getByText } = render(<Display />);

    const button = getByText('Open');

    expect(button.textContent).toEqual("Open");;

  })

});
