import React from 'react';
import './App.css';
import {useSelector, useDispatch} from "react-redux";
import { increment } from "./actions";
import { changeName } from './actions/name'

function App() {
  const counter = useSelector(state => state.counter)
  const logged = useSelector(state => state.isLogged)
  const name = useSelector(state => state.name)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>redux {counter} </h1>
      <button onClick={() => {dispatch(increment())}}>adicionar</button>
      <h1>seu nome é {name}</h1>
      <input type='text' onChange={event => dispatch(changeName(event.target.value))}></input>
      {logged ? <h1>esta logado</h1> : <h2>não esta logado</h2>}
    </div>
  );
}

export default App;
//(text) => {dispatch(changeName(text))}