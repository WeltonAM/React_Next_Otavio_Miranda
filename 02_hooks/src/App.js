import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [reverse, setReverse] = useState(false);
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setReverse(!reverse);
  }

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
    // componentWillUnmount
    console.log('Mounted with the DEPENDENCE', counter);
    
    return () => {
      console.log('Mounted with the DEPENDENCE', counter);
    }
  }, [counter])

  return (
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

    </div>
  );
}

export default App;
