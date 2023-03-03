import { Component, ReactNode } from "react";
import Customer from '../model/Customer'; // tsx, ts, jsx, js
import CustomerRow from "./CustomerRow";
import Filter from "./Filter";
 
type Props = {}
type AppState = {
    "customers": Customer[],
    "original" :Customer[]
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
            }],
            "original":  [{
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

    filterCustomers(txt:string):void {
        let custs = this.state.original.filter(c => c.lastName.toLowerCase().indexOf(txt.toLowerCase()) >= 0 );
        this.setState({
            "customers": custs
        }); // updates state asynchronouly and reconciles
    }

    deleteCustomer(id:number):void {
        // custs will all customers except the one which has id
        let custs = this.state.customers.filter(c => c.id !== id);
        //don't do below code --> doesn't enforce reconcillation
        // this.state.customers = custs;
        this.setState({
            "customers": custs
        }, () => console.log("updated!!!")); // updates state asynchronouly and reconciles
        //console.log("updated !!!" , this.state.customers); 
    }
    render(): ReactNode {
        return <div>
            <Filter filterEvent={this.filterCustomers.bind(this)}/>
            {
                this.state.customers.map(c => <CustomerRow 
                    delEvent ={(id) => this.deleteCustomer(id)}
                    customer={c} 
                    key={c.id}/>)
            }
        </div>
    }
}