import React, {Fragment} from 'react';
import TotalsTable from '../components/TotalsTable'
import SplitsTable from '../components/SplitsTable'
import MonthTable from '../components/MonthTable'
import {Row, Col} from 'reactstrap'
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

export default function Index() {
    return (
        <Fragment>
            <ReactCSSTransitionGroup
                component="div"
                transitionName="TabsAnimation"
                transitionAppear={true}
                transitionAppearTimeout={3000}
                transitionEnter={false}
                transitionLeave={false}
            >
                <div>
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
                </div>
            </ReactCSSTransitionGroup>
        </Fragment>
    )
}