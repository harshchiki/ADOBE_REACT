import { Component, ReactNode } from "react";
import Customer from "../model/Customer";

type Props = {
    customer:Customer,
    delEvent:(id:number) => void
}
export default class CustomerRow extends Component<Props, {}> {
    render(): ReactNode {
        let {id, firstName, lastName} = this.props.customer;
        return <div className="row">
            {firstName} &nbsp; {lastName} &nbsp;
            <button type="button" 
                onClick={() => this.deleteRow(id)}>
                    Delete
            </button>
        </div>
    }

    deleteRow(id:number) : void{
        console.log("Delete Row ", id);
        this.props.delEvent(id);
    }
}