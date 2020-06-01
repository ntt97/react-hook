import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
    toDos:PropTypes.array,
    onHandleClick:PropTypes.func
};
TodoList.defaultProps ={
    toDos:[],
    onHandleClick:null
}

function TodoList(props) {
    const {toDos} =props;
    function onHandleClick(id){
        props.onHandleClick(id);
    }

    return (
        <ul>
            {toDos.map((toDo)=>{
                return <li onClick ={()=>onHandleClick(toDo.id)} key={toDo.id}>{toDo.name}</li>
            })}
        </ul>
    );
}

export default TodoList;