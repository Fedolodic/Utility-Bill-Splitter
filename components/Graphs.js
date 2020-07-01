import React from 'react';
import {HorizontalGridLines, VerticalBarSeries, VerticalGridLines, XAxis, XYPlot, YAxis,} from 'react-vis';
import 'react-vis/dist/style.css';

export default class Graphs extends React.Component {
    render() {
        const data = [
            {x: "September", y: 411.78},
            {x: "October", y: 299.56},
            {x: "November", y: 320.39},
            {x: "December", y: 330.17},
            {x: "January", y: 243.14}
        ];

        const groupTypes = [
            {
                color: 'rgba(255,254,53,0.5)',
                title: 'Electricity',
                data: [
                    {x: "September", y: 33.11},
                    {x: "October", y: 140.12},
                    {x: "November", y: 133.77},
                    {x: "December", y: 130.96},
                    {x: "January", y: 61.73}
                ],
            },
            {
                color: 'rgba(122,205,255,0.5)',
                title: 'Water',
                data: [
                    {x: "September", y: 141.15},
                    {x: "October", y: 76.60},
                    {x: "November", y: 71.81},
                    {x: "December", y: 78.99},
                    {x: "January", y: 58.59}
                ],
            },
            {
                color: 'rgba(255,102,104,0.5)',
                title: 'Internet',
                data: [
                    {x: "September", y: 155.87},
                    {x: "October", y: 50.02},
                    {x: "November", y: 50.02},
                    {x: "December", y: 50.02},
                    {x: "January", y: 50.02}
                ],
            },
            {
                color: 'rgba(135,255,104,0.5)',
                title: 'Gas',
                data: [
                    {x: "September", y: 54.11},
                    {x: "October", y: 32.81},
                    {x: "November", y: 64.79},
                    {x: "December", y: 70.20},
                    {x: "January", y: 72.80}
                ],
            },
        ]

        return (
            <div style={{
                "display": "flex",
                "justifyContent": "center",
                "justifyItems": "center"
            }}>
                <XYPlot
                    height={400}
                    width={500}
                    xType="ordinal"
                    /*stackBy="y"*/
                    style={{
                        "position": "relative"
                    }}
                >
                    <VerticalGridLines/>
                    <HorizontalGridLines/>
                    <XAxis/>
                    <YAxis/>
                    {groupTypes.map(group =>
                        <VerticalBarSeries
                            color={group.color}
                            data={group.data}
                        />
                    )}
                </XYPlot>
                <div style={{
                    "height": "100px",
                    "position": "static"
                }}>
                    <h1>Legend</h1>
                    <div>
                        <p1>Yellow = Electricity</p1>
                    </div>
                    <div>
                        <p1>Blue = Water</p1>
                    </div>
                    <div>
                        <p1>Red = Internet</p1>
                    </div>
                    <div>
                        <p1>Green = Gas</p1>
                    </div>
                </div>
            </div>
        )
    }
}