import React, {useCallback} from 'react';
import './index.css'
function SearchForm({handlerSubmit,handlerValueChange,value}){

    //useCallback
    const onHandlerSubmit = useCallback((e) => {
            e.preventDefault()
            handlerSubmit()
        },[value])
    const onHandlerChange = useCallback((e) => {
            handlerValueChange(e.target.value)
        },[value])
    return (
            <div>
                <form onSubmit={(event) => onHandlerSubmit(event)}>
                    <input className = 'input'
                        type="text" 
                        placeholder="Введите задачу"
                        onChange={onHandlerChange}
                        value={value}/>
                </form>
            </div>
        );
    }


export default SearchForm;