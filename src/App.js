import React, { useState, useEffect, useCallback } from "react";
import TodoItems from "./TodoItems";
import SearchForm from "./SearchForm";
import { async } from "q";
// import { async } from "q";

function App() {
  const [value, setValue] = useState("");
  const [arrToDo, setArrToDo] = useState([]);
  // const [filterToDo, setFilterToDo] = useState([])

  //Сделать async для всех

  //Сделать useCallback. Если не понятно как это и зачем - почитать доки
  const handleDelete = useCallback(
    async function handleDelete(id) {
      let url = `/api/todos/${id}`;
      let response = await fetch(url, {
        method: 'DELETE'
      });
      setArrToDo(arrToDo.filter(item => item.id !== id));
    }, [arrToDo.length])
  const handleChecked = useCallback(
    async function handleChecked(id) {
      const url = `/api/todos/${id}/done`;
      let response = await fetch(url, {
        method: 'post',
      });
      let result = await response.json();
      console.log(arrToDo)
    }, [])

  //Сделать useCallback?. Сделать POST. Сделать добавление в массив ответа от сервера!
  async function handlerSubmit() {
    if (value.length > 0) {
      let todoValue = {
        name: value
      }
      const url = "/api/todos";
      let response = await fetch(url, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(todoValue)
      });
      let result = await response.json();
      setArrToDo(arrToDo.concat(result))
      //добавить post. Добавить body в post, получить ответ в виде todo { id: 1, name: "Выучить JS" }!
      setValue("");
      console.log(arrToDo.length)
    }
  }
  useEffect(() => {
    async function viewToDo() {
      const url = "/api/todos";
      let response = await fetch(url)
      if (response.ok) {
        let data = await response.json()
        setArrToDo(data)
      } else console.log("Ошибка HTTP", response.status)
    }
    viewToDo()
  }, []); ///вопрос по id ?? обновление DOM
  return (
    <div>
      <SearchForm
        handlerSubmit={handlerSubmit}
        handlerValueChange={setValue}
        value={value}
      />
      <TodoItems arrToDo={arrToDo}
        onChecked={handleChecked}
        onDelete={handleDelete} />
    </div>
  );
}
export default App;

//chrome ./chrome.exe --disable-web-security --user-data-dir
