import React, {useState} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import {Container} from "react-bootstrap";


const App = () => {

    const [todo, setTodo] = useState([
        {
            id: 1,
            title: 'First todo',
            status: true,
        },
        {
            id: 2,
            title: 'Second todo',
            status: true,
        },
        {
            id: 3,
            title: 'Third todo',
            status: false,
        },
    ]);


    return (
        <Container>
            <Header/>
            <AddTodo todo={todo} setTodo={setTodo}/>
            <TodoList todo={todo} setTodo={setTodo}/>
        </Container>
    );
};

export default App;