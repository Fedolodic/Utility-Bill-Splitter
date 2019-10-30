import React, {Component} from 'react';
import {Card, Table, CardTitle, CardBody} from 'reactstrap';

export default class MonthTable extends Component {
    render() {
        return (
            <Card className="main-card mb-3">
                <CardBody>
                    <CardTitle>MONTH</CardTitle>
                    <Table hover className="mb-0">
                        <thead>
                        <tr>
                            <th>Month</th>
                            <th>Utility Total</th>
                            <th>Utility Split</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">September</th>
                            <td>$411.78</td>
                            <td>$143.53</td>
                        </tr>
                        <tr>
                            <th scope="row">October</th>
                            <td>$299.56</td>
                            <td>$74.89</td>
                        </tr>
                        </tbody>
                    </Table>
                </CardBody>
            </Card>
        );
    }
}
