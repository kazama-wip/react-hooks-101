import React, { useState, useEffect } from "react";


const App = props => {

  const [state, setState] = useState(props)
  const { name, price } = state
  const reset = () => {
    setState(props)
  }
  useEffect(() => {
    console.log('This is like  componentDidMount or conponentDidUpdate.')
  })
  useEffect(() => {
    console.log('This is like  componentDidMount.')
  }, [])

  useEffect(() => {
    console.log('This callback is for name only.')
  }, [name])

  return (
    <React.Fragment>
      <p>現在の{state.name}は、{state.price}です</p>
      <button onClick={() => setState({ ...state, price: price + 1 })}>+1</button>
      <button onClick={() => setState({ ...state, price: price - 1 })}>-1</button>
      <button onClick={reset}>Reset</button>
      <input value={name} onChange={e => setState({ ...state, name: e.target.value })} />
    </React.Fragment>
  )
}
App.defaultProps = {
  name: '',
  price: 1000
}
export default App;
