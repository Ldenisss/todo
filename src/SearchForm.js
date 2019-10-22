import React from 'react';
import './index.css'
function SearchForm(props){

    //useCallback
    function handlerSubmit(e){
        e.preventDefault();
        props.handlerSubmit()
    }
    function handlerChange(e){
        props.handlerValueChange(e.target.value)
    }
    const value = props.value
    return (
            <div>
                <form onSubmit={handlerSubmit}>
                    <input className = 'input'
                        type="text" 
                        placeholder="Введите задачу"
                        onChange={handlerChange}
                        value={value}/>
                </form>
            </div>
        );
    }


export default SearchForm;