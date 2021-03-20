import { useDispatch } from 'react-redux'
import React, { useEffect } from 'react'

import './App.css';
import Bugs from './Bugs'
import Routing from './Routing'
import StateFunctionalComponents from './StateFunctionalComponents'
import FetchIt from './FetchIt'
import RenderProp from './RenderProp';
import ReduxExample from './ReduxExample'
import Specialization from './Specialization'
import Containment from './Containment'
import TimeGreeting from './TimeGreeting'
import { fetchAllTodos } from './store/actions';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllTodos())
  })

  return (
    <div className="App">
      <h1>React Katas</h1>
      <Bugs />
      <Routing />
      {/* <StateFunctionalComponents /> */}
      <FetchIt />
      <RenderProp />
      <Specialization />
      <ReduxExample />
      <Containment />
      <TimeGreeting />
    </div>
  );
}

export default App;

