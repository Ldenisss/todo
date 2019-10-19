import React, { Component } from 'react';
import './index.css'
class SearchForm extends Component {
    constructor(props) {
        super(props)
        this.handlerSubmit = this.handlerSubmit.bind(this)
        this.handlerChange = this.handlerChange.bind(this)
        
    }
    
    handlerSubmit(e){
        e.preventDefault();
        this.props.onValueSubmit(e.target.value)
    }
    handlerChange(e){
        this.props.onValueChange(e.target.value)
    }
    render() {
        const value = this.props.value
        return (
            <div>
                <form onSubmit={this.handlerSubmit}>
                    <input className = 'input'
                        type="text" 
                        placeholder="Введите задачу"
                        onChange={this.handlerChange}
                        value={value}/>
                </form>
            </div>
        );
    }
}

export default SearchForm;