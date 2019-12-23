import React, {Component} from 'react';
import {Table} from 'reactstrap';

export default class SplitsTable extends Component {
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
                <tr>
                    <th scope="row">September</th>
                    <td>$8.28</td>
                    <td>$35.29</td>
                    <td>$38.97</td>
                    <td>$27.54</td>
                </tr>
                <tr>
                    <th scope="row">October</th>
                    <td>$35.03</td>
                    <td>$19.15</td>
                    <td>$12.51</td>
                    <td>$8.20</td>
                </tr>
                <tr>
                    <th scope="row">November</th>
                    <td>$33.44</td>
                    <td>$17.96</td>
                    <td>$12.51</td>
                    <td>$16.20</td>
                </tr>
                <tr>
                    <th scope="row">December</th>
                    <td>$32.74</td>
                    <td>$19.75</td>
                    <td>$12.51</td>
                    <td>$17.55</td>
                </tr>
                </tbody>
            </Table>
        );
    }
}
