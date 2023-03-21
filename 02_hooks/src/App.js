import React, { useState, useEffect, useCallback, useMemo } from 'react';
import logo from './logo.svg';
import './App.css';

import AppContext from './contexts/AppContext';
import Input from './components/Input';
import Div from './components/Card';
import Section from './components/Section';
import Main from './components/Main';

const Button = ({ incrementButton }) => {
  console.log('without memo and callback');
  return <button onClick={() => incrementButton(10)}>+</button>;
};

function App() {

  const [reverse, setReverse] = useState(false);
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setReverse(!reverse);
  }

  const incrementCounter = useCallback((num) => {
    setCounter((counter) => counter + num);
  }, []);

  const btn = useMemo(() => {
    console.log('if useMemo and useCallback render once only');
    return <Button incrementButton={incrementCounter} />
  }, [incrementCounter]);

  // componentDidUpdate
  useEffect(() => {
    // componentWillUnmount
    return () => {
      console.log('Mounted ALWAYS');
    }
  })

  // componentDidMount
  useEffect(() => {
    // componentWillUnmount
    return () => {
      console.log('Mounted ONCE');
    }
  }, [])

  // componentWillMount
  useEffect(() => {

    console.log('Mounted with the DEPENDENCE', counter);

    // componentWillUnmount    
    return () => {
      console.log('Mounted with the DEPENDENCE', counter);
    }
  }, [counter])

  return (
    <AppContext>
      <div className="App">
        <h1>Use State</h1>
        <header className="App-header">
          <img src={logo} className={reverse ? 'App-logo reverse' : 'App-logo'} alt="logo" />
          <button
            onClick={handleClick}
          >Reverse</button>
        </header>
        <hr />

        <h1>Use Effect</h1>
        <div className='App-header'>
          <h2>Counter: {counter}</h2>
          <button
            onClick={() => (setCounter(counter + 1))}
          >Increase</button>
        </div>
        <hr />

        <h1>Use Callback</h1>
        <div className='App-header'>
          <h2>Counter: {counter}</h2>
          <Button incrementButton={incrementCounter} />
        </div>
        <hr />

        <h1>Use Memo</h1>
        <div className='App-header'>
          <h2>Counter: {counter}</h2>
          {btn}
        </div>
        <hr />

        <h1>Use Ref</h1>
        <div className='App-header'>
          <Input />
        </div>
        <hr />

        <h1>Use Context</h1>
        <div className='App-header'>
          <Div />
        </div>
        <hr />

        <h1>Use Reducer</h1>
        <div className='App-header'>
          <Section />
        </div>
        <hr />

        <h1>Own Hook</h1>
        <div className='App-header'>
          <Main />
        </div>

      </div>
    </AppContext>
  );
}

export default App;
