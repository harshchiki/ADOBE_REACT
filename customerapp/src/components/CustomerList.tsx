import { Component, ReactNode } from "react";
import Customer from '../model/Customer'; // tsx, ts, jsx, js
import CustomerRow from "./CustomerRow";
 
type Props = {}
type AppState = {
    "customers": Customer[]
}
export default class CustomerList extends Component<Props, AppState> {
    
    constructor(props:Props){
        super(props);
        this.state = {
            "customers": [{
                "id": 1,
                "firstName": "Rachel",
                "lastName": "Green "
            },
            {
                "id": 2,
                "firstName": "Chandler",
                "lastName": "Bing"
            },
            {
                "id": 3,
                "firstName": "Joey",
                "lastName": "Tribbiani"
            },
            {
                "id": 4,
                "firstName": "Monica",
                "lastName": "Geller"
            },
            {
                "id": 5,
                "firstName": "Ross",
                "lastName": "Geller"
            },
            {
                "id": 6,
                "firstName": "Phoebe",
                "lastName": "Buffay"
            }
            ]
        }
    }
    render(): ReactNode {
        return <div>
            {
                this.state.customers.map(c => <CustomerRow customer={c} key={c.id}/>)
            }
        </div>
    }
}