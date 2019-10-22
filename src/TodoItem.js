
import React from 'react';
import './index.css'

function TodoItem(props) {
    function headlerClearItem(id) {
        props.handlerClear(id)
        props.handlerId(id)
    }
    const arr = props.arrToDo

    return (
        <table>
            <tbody>
                {arr.length ? arr.map((item) =>
                    <tr key={item.id} className="list">
                        <td>{item.name}</td>
                        <td>
                            <input className="inputButton" onClick={() => headlerClearItem(item.id)} type="button" value="Удалить" />
                        </td>
                    </tr>
                ) : "Нет заданий"}
            </tbody>
        </table>
    );
}

export default TodoItem;