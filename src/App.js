import React, { useState, useEffect } from "react";
import TodoItems from "./TodoItems";
import SearchForm from "./SearchForm";

function App() {
  const [value, setValue] = useState("");
  const [arrToDo, setArrToDo] = useState([]);
  // const [filterToDo, setFilterToDo] = useState([])

  //Сделать async для всех

  // Сделать useCallback. Если не понятно как это и зачем - почитать доки
  function handleDelete(id) {
    let url = `/delete.php?delete=${id}`;
    fetch(url)
      .then(response => {
        if (response.status === 200) {
          setArrToDo(arrToDo.filter(item => item.id !== id));
        } else {
          console.log(response.status);
        }
      })
      .catch(e => console.log(e));
  }

  //Сделать useCallback. Сделать POST. Сделать добавление в массив ответа от сервера
  function handlerSubmit() {
    if (value) {
      let url = `/add.php?name=${value}&desc=&add=add`;
      fetch(url).then(response => response.json());
      //добавить post. Добавить body в post, получить ответ в виде todo { id: 1, name: "Выучить JS" }
      setValue("");
    }
  }

  useEffect(() => {
    const url = "/view.php";
    fetch(url)
      .then(response => response.json())
      .then(data => setArrToDo(data))
      .catch(err => console.log(err));
  }, []); ///вопрос по id ?? обновление DOM
  
  return (
    <div>
      <SearchForm
        handlerSubmit={handlerSubmit}
        handlerValueChange={setValue}
        value={value}
      />
      <TodoItems arrToDo={arrToDo} onDelete={handleDelete} />
    </div>
  );
}

export default App;

//chrome ./chrome.exe --disable-web-security --user-data-dir
