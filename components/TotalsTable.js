import React, {Component} from 'react';
import {Table} from 'reactstrap';

export default class TotalsTable extends Component {
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
                <tr>
                    <th scope="row">September</th>
                    <td>$33.11</td>
                    <td>$141.15</td>
                    <td>$155.87</td>
                    <td>$54.11</td>
                </tr>
                <tr>
                    <th scope="row">October</th>
                    <td>$140.12</td>
                    <td>$76.60</td>
                    <td>$50.02</td>
                    <td>$32.81</td>
                </tr>
                <tr>
                    <th scope="row">November</th>
                    <td>$133.77</td>
                    <td>$71.81</td>
                    <td>$50.02</td>
                    <td>$64.79</td>
                </tr>
                <tr>
                    <th scope="row">December</th>
                    <td>$130.96</td>
                    <td>$78.99</td>
                    <td>$50.02</td>
                    <td>$70.20</td>
                </tr>
                </tbody>
            </Table>
        );
    }
}
