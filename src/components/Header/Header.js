import React from 'react';
import s from './Header.module.css'
import {Col, Row} from "react-bootstrap";

const Header = () => {
    return (
        <Row>
            <Col>
                <div className={s.root}>Todo list</div>
            </Col>
        </Row>
    );
};

export default Header;