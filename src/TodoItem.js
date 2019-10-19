import React, { Component } from 'react';
import './index.css'
class TodoItem extends Component {
    headlerClearItem(id){
        this.props.onHandlerClear(id)
    }
    render() {
        const arr = this.props.arrToDo
        return (
            <div>
            {arr.map((item,i) =>
                <div id={i} key={i} className="list">
                    <li>{item}</li>
                    <input onClick={this.headlerClearItem.bind(this,i)} type="button" value="Удалить"/>
                    
                </div>
            )}
        </div>
        );
    }
}

export default TodoItem;