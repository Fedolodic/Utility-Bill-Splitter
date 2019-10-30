import React, {Component} from 'react';
import {Card, Table, CardTitle, CardBody} from 'reactstrap';

export default class TotalsTable extends Component {
    render() {
        return (
            <Card className="main-card mb-3">
                <CardBody>
                    <CardTitle>TOTALS</CardTitle>
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
                            <td>$27.54</td>
                        </tr>
                        <tr>
                            <th scope="row">October</th>
                            <td>$140.12</td>
                            <td>$76.60</td>
                            <td>$50.02</td>
                            <td>$32.81</td>
                        </tr>
                        </tbody>
                    </Table>
                </CardBody>
            </Card>
        );
    }
}
