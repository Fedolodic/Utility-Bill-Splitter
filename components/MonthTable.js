import React, {Component} from 'react';
import {Table} from 'reactstrap';

export default class MonthTable extends Component {
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
                <tr>
                    <th scope="row">November</th>
                    <td>$320.39</td>
                    <td>$80.10</td>
                </tr>
                <tr>
                    <th scope="row">December</th>
                    <td>$330.17</td>
                    <td>$82.54</td>
                </tr>
                </tbody>
            </Table>
        );
    }
}
