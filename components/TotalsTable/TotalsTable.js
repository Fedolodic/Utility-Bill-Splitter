import React, {Component} from 'react';
import {Table} from 'reactstrap';
import {allBills} from "../BillsList";

export default class TotalsTable extends Component {
    displayTotals() {
        return Object.entries(allBills).map(([month, bill]) => {
            return (
                <tr>
                    <th scope="row">{month}</th>
                    <td>${(bill.electricity + bill.water + bill.internet + bill.gas).toFixed(2)}</td>
                    <td>${((bill.electricity + bill.water + bill.internet + bill.gas)/4).toFixed(2)}</td>
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
                    <th>Utility Total</th>
                    <th>Utility Split</th>
                </tr>
                </thead>
                <tbody>
                {this.displayTotals()}
                </tbody>
            </Table>
        );
    }
}
