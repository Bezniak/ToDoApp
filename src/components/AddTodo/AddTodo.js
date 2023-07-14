import React, {useEffect, useState} from 'react';
import * as uuid from "uuid";
import {Button, Col, FormControl, Row} from "react-bootstrap";
import s from './AddTodo.module.css'


const AddTodo = ({todo, setTodo}) => {

    const [value, setValue] = useState('')

    const saveTodo = () => {
        if (value) {
            setTodo(
                [...todo, {
                    id: uuid.v4(),
                    title: value,
                    status: true,
                }]
            )
            setValue('')
        }
    }

    useEffect(() => {
        localStorage.setItem('dataKey', JSON.stringify(value));
    }, [value]);

    return (
        <Row>
            <Col className={s.addTodoForm}>
                <FormControl
                    type="text"
                    placeholder='Enter note title'
                    value={value}
                    onChange={e => {setValue(e.target.value)}}
                />
                <Button className={s.btn} variant="outline-primary" onClick={saveTodo}>Save</Button>
            </Col>
        </Row>
    );
};

export default AddTodo;