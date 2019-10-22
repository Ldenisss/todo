import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem'
import SearchForm from './SearchForm'

function App() {
  const [value, setValue] = useState('')
  const [arrToDo, setArrToDo] = useState([])
  // const [filterToDo, setFilterToDo] = useState([])
  const [id, setId] = useState(0)

  function handlerId(idItem) {
    setId(idItem)
  }

  function handlerClear(idItem) {
    let url = `http://laba6.com/delete.php?delete=${idItem}`;
    fetch(url).then(response => response.json())
  }

  function handlerSubmit() {
    if (value) {
      let url = `http://laba6.com/add.php?name=${value}&desc=&add=add`;
      fetch(url).then(response => response.json())
      setValue('')
    }
  }
  function handlerValueChange(valueInput) {
    setValue(valueInput)
  }
  useEffect(() => {
    const url = "http://laba6.com/view.php";
    fetch(url)
      .then(response => response.json())
      .then(data => setArrToDo(data))
      .catch(err => console.log(err))
  }, [value, id]) ///вопрос по id ?? обновление DOM
  return (
    <div>
      <SearchForm
        handlerSubmit={handlerSubmit}
        handlerValueChange={handlerValueChange}
        value={value}
      />
      <TodoItem
        arrToDo={arrToDo}
        handlerClear={handlerClear}
        handlerId={handlerId}
      />
    </div>
  );
}


export default App;

//chrome ./chrome.exe --disable-web-security --user-data-dir 