import React, { useState } from 'react';
import PropTypes from 'prop-types';

FormToDo.propTypes = {
    onSubmit : PropTypes.func
};
FormToDo.defaultProps={
    onSubmit:null
}

function FormToDo(props) {
    const [toDo, setToDo] = useState({id:'',name:''});
    function onChange(e){
        let target = e.target;
        let name = target.name;
        let value = target.type==='checkBox'? target.checked:target.value
        
        setToDo({...toDo,[name]:value})
        
    }
    function onHandleSubmit(e){
        e.preventDefault();
        props.onSubmit(toDo);
        setToDo({id:'',name:''});
    }
    return (
        <form onSubmit={onHandleSubmit}>
           <input name ="name" type="text" value={toDo.name} onChange={onChange}></input> 
           <button type = "submit">submit</button>
        </form>
    );
}

export default FormToDo;