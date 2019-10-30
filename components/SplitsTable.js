import React, {Component} from 'react';
import {Card, Table, CardTitle, CardBody} from 'reactstrap';

export default class SplitsTable extends Component {
    render() {
        return (
            <Card className="main-card mb-3">
                <CardBody>
                    <CardTitle>SPLITS</CardTitle>
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
                        <tr>
                            <th scope="row">September</th>
                            <td>$8.28</td>
                            <td>$35.29</td>
                            <td>$38.97</td>
                            <td>$54.11</td>
                        </tr>
                        <tr>
                            <th scope="row">October</th>
                            <td>$35.03</td>
                            <td>$19.15</td>
                            <td>$12.51</td>
                            <td>$8.20</td>
                        </tr>
                        </tbody>
                    </Table>
                </CardBody>
            </Card>
        );
    }
}
