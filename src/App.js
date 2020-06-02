import React, { useState, useEffect } from 'react';
import './App.css'
// //import ColorBox from './components/ColorBox';
// import ToDoList from './components/TodoList'
// import FormToDo from './components/FormToDo'

import queryString from 'query-string'

import Pagination from './components/Pagination'


import Test from './components/Test'
function App() {
    const [products, setProducts] = useState([]);
    const [pagination, setPagination] = useState({ _page: 1, _limit: 10, _totalRows: 11 })
    const [filters, setFilter] = useState({
        _page: 1,
        _limit: 10
    })
    function onPageChange(newPage) {

        setFilter({
            ...filters,
            _page:newPage
        })
    }
    useEffect(() => {

        try {
            async function getProducts() {
                const paramsString = queryString.stringify(filters);
                const response = await fetch(`http://js-post-api.herokuapp.com/api/posts?${paramsString}`);
                const responseJson = await response.json();
                setProducts(responseJson.data);
                setPagination(responseJson.pagination);

            }
            getProducts();
        } catch (error) {

        }

    }, [filters])


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
        let newToDos = [...toDos];
        newToDos.push(newTodo);
        setToDos(newToDos);


    }
    return (
        <div className="App" >

            <Test products={products} />
            <Pagination pagination={pagination} onPageChange={onPageChange} />
        </div>
    );
}

export default App;
