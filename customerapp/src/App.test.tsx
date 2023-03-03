import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const h1 = screen.getByText(/Customer Application/i);
  expect(h1).toBeInTheDocument();
});

it("renders customers", () => {
  render(<App/>); // In memory DOM created from VDOM
  let btns = screen.queryAllByRole('button');
  expect(btns.length).toBe(6);

  // container is a reference to DOM
  // let {container} = render(<App/>);
  // let btns = container.querySelectorAll('button');
  // expect(btns.length).toBe(6);
});

it("delete a customer", () => {
  render(<App/>); 
  let btns = screen.queryAllByRole('button');
  fireEvent.click(btns[3]);
  btns = screen.queryAllByRole('button');
  expect(btns.length).toBe(5);
});

it("filter customers", () => {
  render(<App/>); 
  let txtBox = screen.getByPlaceholderText('search by name');
  // onChange={(evt) => props.filterEvent(evt.target.value)}
  fireEvent.change(txtBox, {"target":{"value":"Geller"}});
  // screen.debug();
  let btns = screen.queryAllByRole('button');
  expect(btns.length).toBe(2);
});

