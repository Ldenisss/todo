import React, { Component } from 'react';
import TodoItem from './TodoItem'
import SearchForm from './SearchForm'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { value: '', arrToDo: []}
    this.handlerValueChange = this.handlerValueChange.bind(this)
    this.handlerSubmit = this.handlerSubmit.bind(this)
    this.handlerClear =this.handlerClear.bind(this)
  }
  handlerClear(id){
    let arrToDo = this.state.arrToDo
    arrToDo.splice(id,1)
    this.setState({arrToDo})
  }
  handlerSubmit(value) {
    if (this.state.value) {
      this.setState({ arrToDo: this.state.arrToDo.concat(this.state.value) })
      this.setState({ value: '' })
    }
  }
  handlerValueChange(value) {
    this.setState({ value })
  }
  render() {
    const value = this.state.value
    const arrToDo = this.state.arrToDo
    return (
      <div>
        <SearchForm
          onValueSubmit={this.handlerSubmit}
          onValueChange={this.handlerValueChange}
          value={value} />
        <TodoItem
          arrToDo={arrToDo} 
          onHandlerClear={this.handlerClear}
          />
      </div>
    );
  }
}

export default App;