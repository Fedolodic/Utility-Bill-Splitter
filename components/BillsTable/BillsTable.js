import React, {Component} from 'react';
import {Table} from 'reactstrap';
import {allBills} from '../BillsList';

export default class BillsTable extends Component {
    displayBills() {
        return Object.entries(allBills).map(([month, bill]) => {
            return (
                <tr>
                    <th scope="row">{month}</th>
                    <td>${bill.electricity.toFixed(2)}</td>
                    <td>${bill.water.toFixed(2)}</td>
                    <td>${bill.internet.toFixed(2)}</td>
                    <td>${bill.gas.toFixed(2)}</td>
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
                    <th>Green Energy Electricity</th>
                    <th>Richardson Water</th>
                    <th>Spectrum Internet</th>
                    <th>Atmos Gas</th>
                </tr>
                </thead>
                <tbody>
                {this.displayBills()}
                </tbody>
            </Table>
        );
    }
}
