import React from "react";
import "./index.css";
import ToDoItem from "./ToDoItem";

function TodoItems({ onDelete, arrToDo }) {
  return (
    <table>
      <tbody>
        {arrToDo.length
          ? arr.map(item => (
              <ToDoItem key={item.id} item={item} onDelete={onDelete} />
            ))
          : "Нет заданий"}
      </tbody>
    </table>
  );
}

export default TodoItems;
