import { Component, ReactNode } from "react";
import Customer from "../model/Customer";

type Props = {
    customer:Customer
}
export default class CustomerRow extends Component<Props, {}> {
    render(): ReactNode {
        let {id, firstName, lastName} = this.props.customer;
        return <div>
            {firstName} &nbsp; {lastName} &nbsp;
            <button type="button">Delete</button>
        </div>
    }
}