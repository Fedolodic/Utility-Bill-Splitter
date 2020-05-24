import React, {Component} from 'react';
import {Table} from 'reactstrap';
import {allBills} from "../BillsList";

export default class SplitsTable extends Component {
    displaySplits() {
        return Object.entries(allBills).map(([month, bill]) => {
            return (
                <tr>
                    <th scope="row">{month}</th>
                    <td>${(bill.electricity.toFixed(2)/4).toFixed(2)}</td>
                    <td>${(bill.water.toFixed(2)/4).toFixed(2)}</td>
                    <td>${(bill.internet.toFixed(2)/4).toFixed(2)}</td>
                    <td>${(bill.gas.toFixed(2)/4).toFixed(2)}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <Table hover className="mb-0">
                <thead>
                <tr>
                    <th>Month</th>
                    <th>Electricity</th>
                    <th>Water</th>
                    <th>Internet</th>
                    <th>Gas</th>
                </tr>
                </thead>
                <tbody>
                {this.displaySplits()}
                </tbody>
            </Table>
        );
    }
}
