import React, {useEffect, useState} from 'react';
import {Button, ButtonGroup, Col, Row} from "react-bootstrap";
import s from './TodoList.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faLock, faLockOpen, faSave, faTrash} from '@fortawesome/free-solid-svg-icons';


const TodoList = ({todo, setTodo}) => {

    const [edit, setEdit] = useState(null);
    const [value, setValue] = useState('')
    const [filtered, setFiltered] = useState(todo)

    useEffect(() => {
        setFiltered(todo)
    }, [todo])

    const todoFilter = (status) => {
        if (status === 'all') {
            setFiltered(todo)
        } else {
            const newTodo = [...todo].filter(item => item.status === status)
            setFiltered(newTodo)
        }
    }

    function deleteTodo(id) {
        const newTodo = [...todo].filter(item => item.id !== id)
        setTodo(newTodo)
    }

    function statusTodo(id) {
        const newTodo = [...todo].filter(item => {
            if (item.id === id) {
                item.status = !item.status
            }
            return item
        })
        setTodo(newTodo)
    }

    const editTodo = (id, title) => {
        setEdit(id)
        setValue(title)

    }

    const saveTodo = (id) => {
        const newTodo = [...todo].map(item => {
            if (item.id === id) {
                item.title = value
            }
            return item
        })
        setTodo(newTodo)
        setEdit(null)
    }


    return (
        <div>
            <Row>
                <Col className={s.filter}>
                    <ButtonGroup aria-label='Basic example' className={s.btns}>
                        <Button className={s.filterBtn} variant='secondary' onClick={() => todoFilter('all')}>All</Button>
                        <Button className={s.filterBtn} variant='secondary' onClick={() => todoFilter(true)}>Open</Button>
                        <Button className={s.filterBtn} variant='secondary' onClick={() => todoFilter(false)}>Close</Button>
                    </ButtonGroup>
                </Col>
            </Row>


            {
                filtered.map(item => (
                    <div key={item.id} className={s.listItems}>

                        {
                            edit === item.id
                                ? <div>
                                    <input type="text" autoFocus={true} value={value}
                                           onChange={(e) => setValue(e.target.value)}/>
                                </div>
                                : <div className={!item.status ? s.close : ''}>{item.title}</div>
                        }


                        {
                            edit === item.id ?
                                <div>
                                    <Button variant="outline-primary" className={s.btn}
                                            onClick={() => saveTodo(item.id)}><FontAwesomeIcon icon={faSave}/>
                                    </Button>
                                </div> :
                                <div>
                                    <Button variant="outline-primary"
                                            onClick={() => deleteTodo(item.id)} size='sm'><FontAwesomeIcon
                                        icon={faTrash}/>
                                    </Button>
                                    <Button variant="outline-primary" className={s.btn}
                                            onClick={() => editTodo(item.id, item.title)} size='sm'><FontAwesomeIcon
                                        icon={faEdit}/>
                                    </Button>
                                    <Button variant="outline-primary" className={s.btn}
                                            onClick={() => statusTodo(item.id)} size='sm'
                                    >
                                        {
                                            item.status ? <FontAwesomeIcon icon={faLockOpen}/> :
                                                <FontAwesomeIcon icon={faLock}/>
                                        }
                                    </Button>
                                </div>

                        }


                    </div>
                ))
            }
        </div>
    )
}


export default TodoList;