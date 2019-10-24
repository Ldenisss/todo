import React, {useCallback} from "react";

const ToDoItem = ({ item, onDelete, onChecked, checked }) => {
  const { id } = item;

  const handleClickDelete = useCallback(() => {
    onDelete(id)
  }, [onDelete, id]);
  const handleChecked = useCallback(() => {
    onChecked(id)
  }, [onChecked, id])
  return (
    <tr  className="list">
      <td>
        <input
          type="checkbox"
          onChange={handleChecked}
          checked={checked}
        />
      </td>
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
