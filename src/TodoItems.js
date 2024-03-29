import React from "react";
import "./index.css";
import ToDoItem from "./TodoItem";

function TodoItems({ onDelete, arrToDo, onChecked }) {
  return (
    <table>
      <tbody>
        {arrToDo.length
          ? arrToDo.map(item => (
              <ToDoItem key={item.id} checked={item.done} item={item} onDelete={onDelete} onChecked={onChecked} />
            ))
          : <tr><td>Нет заданий</td></tr>}
      </tbody>
    </table>
  );
}

export default TodoItems;
