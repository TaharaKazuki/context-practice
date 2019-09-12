import React from 'react';
import ReactDOM from 'react-dom';
import CounterContext from './context/counter'
import Counter from './component/counter'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      increment: () => this.increment(),
      decrement: () => this.decrement()
    }
  }
  increment() {
    this.setState({ count: this.state.count + 1 })
  }
  
  decrement () {
    this.setState({ count: this.state.count - 1 })
  }
  
  render() {
    return (
      <CounterContext.Providor value={this.state}>
        <Counter />
      </CounterContext.Providor>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));