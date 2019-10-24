import React, { useState, useEffect, useCallback } from "react";
import TodoItems from "./TodoItems";
import SearchForm from "./SearchForm";

/*
1 вызов App
1 вызов useState([])
  arrToDo = [] //id1
2 вызов App
arrToDo //id1
*/

function App() {
  const [value, setValue] = useState("");
  const [arrToDo, setArrToDo] = useState([]);
  // const [filterToDo, setFilterToDo] = useState([])

  //Сделать async для всех

  //Сделать useCallback. Если не понятно как это и зачем - почитать доки
  const handleDelete = useCallback(
    async id => {
      let url = `/api/todos/${id}`;
      await fetch(url, {
        method: "DELETE"
      });
      setArrToDo(arrToDo.filter(item => item.id !== id));
    },
    [arrToDo, setArrToDo]
  );

  const handleChecked = useCallback(
    async id => {
      const url = `/api/todos/${id}/done`;
      let response = await fetch(url, {
        method: "post"
      });
      const { done } = await response.json();
      arrToDo.find(item => item.id === id).done = done;
      setArrToDo([...arrToDo]);
    },
    [arrToDo, setArrToDo]
  );

  //Сделать useCallback?. Сделать POST. Сделать добавление в массив ответа от сервера!
  const handleSubmit = useCallback(async () => {
    if (!value.length) {
      return;
    }
    let todoValue = {
      name: value
    };
    const url = "/api/todos";

    let response = await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(todoValue)
    });
    let result = await response.json();
    setArrToDo(arrToDo.concat(result));
    //добавить post. Добавить body в post, получить ответ в виде todo { id: 1, name: "Выучить JS" }!
    setValue("");
  }, [value, setArrToDo, setValue, arrToDo]);

  useEffect(() => {
    async function viewToDo() {
      const url = "/api/todos";
      let response = await fetch(url);
      if (response.ok) {
        let data = await response.json();
        setArrToDo(data);
      } else console.log("Ошибка HTTP", response.status);
    }
    viewToDo();
  }, []); ///вопрос по id ?? обновление DOM
  return (
    <div>
      <SearchForm
        onSubmit={handleSubmit}
        onChange={setValue}
        value={value}
      />
      <TodoItems
        arrToDo={arrToDo}
        onChecked={handleChecked}
        onDelete={handleDelete}
      />
    </div>
  );
}
export default App;

//chrome ./chrome.exe --disable-web-security --user-data-dir
