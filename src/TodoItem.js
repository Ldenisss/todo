import React from "react";

const ToDoItem = ({ item, onDelete }) => {
  const { id } = item;
  
  const handleClickDelete = useCallback(() => {
    onDelete(id)
  }, [onDelete, id]);

  return (
    <tr  className="list">
      <td>{item.name}</td>
      <td>
        <input
          className="inputButton"
          onClick={handleClickDelete}
          type="button"
          value="Удалить"
        />
      </td>
    </tr>
  );
};

export default ToDoItem;
