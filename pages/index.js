import React, {Fragment,useState} from 'react';
import TotalsTable from '../components/TotalsTable'
import SplitsTable from '../components/SplitsTable'
import MonthTable from '../components/MonthTable'
import {Row, Col} from 'reactstrap'
import {animated, useTransition} from 'react-spring';

const Index = () => {
    const [on, toggle] = useState(false);

    const transition = useTransition(on, null, {
        initial: { transform: 'translate3d(0, 0%,0)'},
        from:    { transform: 'translate3d(0, 80%,0)'},
        enter:   { transform: 'translate3d(0, 0%,0)'},
        leave:   { transform: 'translate3d(0, -90%,0)'}
    });

    return(
        <Fragment>
            <div>
                {transition.map(({ item, props }) => (
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
                ))}
                <button onClick={() => toggle(!on)}>Change</button>
            </div>
        </Fragment>
    );
};

export default Index;