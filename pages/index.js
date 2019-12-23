import React, {Fragment, useState} from 'react';
import TotalsTable from '../components/TotalsTable'
import SplitsTable from '../components/SplitsTable'
import MonthTable from '../components/MonthTable'
import {Row, Col, Card, CardBody, CardTitle, Container} from 'reactstrap'
import {animated, useTransition} from 'react-spring';

const Index = () => {

    const [on, toggle] = useState(false);

    const transitions = useTransition(on, null, {
        initial: {transform: 'translate3d(0, 0%,0)'},
        from: {transform: 'translate3d(0, 80%,0)'},
        enter: {transform: 'translate3d(0, 0%,0)'},
        leave: {transform: 'translate3d(0, -90%,0)'}
    });

    return (
        <div style={{position: "absolute"}}>
            <link
                rel='stylesheet'
                href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css'
            />
            {transitions.map(({item, key, props}) => (
                item && <animated.div
                    style={props}
                    key={key}>
                    <Row>
                        <Col lg="6">
                            <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>TOTALS</CardTitle>
                                    <TotalsTable/>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg="6">
                            <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>SPLITS</CardTitle>
                                    <SplitsTable/>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg="6">
                            <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>MONTH</CardTitle>
                                    <MonthTable/>
                                </CardBody>
                            </Card>
                        </Col>
                </Row>
                </animated.div>))}
            <button onClick={() => toggle(!on)}>Toggle Bills</button>
        </div>
    );
};

export default Index;

/*
transition.map(({ item, props }) => (
    item && <animated.div style={props}>
        <Row>
            <Col lg="6">
                <TotalsTable/>
            </Col>
            <Col lg="6">
                <SplitsTable/>
            </Col>
            <Col lg="6">
                <MonthTable/>
            </Col>
        </Row>
    </animated.div>
))*/
