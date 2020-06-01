import React, { useState } from 'react';
import './App.css'
//import ColorBox from './components/ColorBox';
import ToDoList from './components/TodoList'
import FormToDo from './components/FormToDo'
function App() {
    const [toDos, setToDos] = useState([
        { id: 1, name: "aaaaaaaaaaaaaaaaaaaaaaa" },
        { id: 2, name: "bbbbbbbbbbbbbbbb" },
        { id: 3, name: "ccccccccccccccccccc" },
        { id: 4, name: "dddddddddddddddddddd" },


    ])
    function onHandleClick(id) {
        let newToDos = [...toDos];
        let index = newToDos.findIndex(item => item.id === id);
        newToDos.splice(index, 1);
        setToDos(newToDos);
    }
    function onSubmit(item) {
        let newTodo = {
            ...item,
            id: toDos.length + 1,
        }
        let newToDos =[...toDos];
            newToDos.push(newTodo);
        setToDos(newToDos);
        
    }
    return (
        <div className="App" >
            <FormToDo onSubmit={onSubmit} />
            <ToDoList toDos={toDos} onHandleClick={onHandleClick} />
        </div>
    );
}

export default App;
