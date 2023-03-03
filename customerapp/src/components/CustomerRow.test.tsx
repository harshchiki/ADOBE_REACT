import { fireEvent, render, screen } from '@testing-library/react';

import CustomerRow from './CustomerRow';
//<CustomerRow 
// delEvent ={(id) => this.deleteCustomer(id)}
// customer={c} 
// key={c.id}/>

describe("testing customer row in isolation", () => {
    let c = {
        id: 100,
        firstName : 'Harry',
        lastName: 'Potter'
    }

    let callback = jest.fn(); // mock function

    it("render customer row", () => {
        render(<CustomerRow customer={c} 
            delEvent={(id) => callback(id)}/>);
        let elem = screen.getByText(/Harry Potter/i);
        expect(elem).toBeInTheDocument();
    });

    it("delete event customer row", () => {
        render(<CustomerRow customer={c} 
            delEvent={(id) => callback(id)}/>);
        let btn = screen.getByRole('button');
        fireEvent.click(btn);
        expect(callback).toBeCalledTimes(1);
        expect(callback).toBeCalledWith(100);
    });


});