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
                <tr>
                    <th scope="row">January</th>
                    <td>$243.14</td>
                    <td>$60.79</td>
                </tr>
                <tr>
                    <th scope="row">February</th>
                    <td>$230.14</td>
                    <td>$57.54</td>
                </tr>
                <tr>
                    <th scope="row">March</th>
                    <td>$259.12</td>
                    <td>$64.79</td>
                </tr>
                <tr>
                    <th scope="row">April</th>
                    <td>$205.85</td>
                    <td>$51.46</td>
                </tr>
                </tbody>
            </Table>
        );
    }
}
