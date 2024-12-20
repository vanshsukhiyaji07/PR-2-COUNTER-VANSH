import { useState , useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);}

  useEffect(() => {
    const savedCount = localStorage.getItem("counterValue");
    if (savedCount) {
      setCount(parseInt(savedCount, 10));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("counterValue", count);
    console.log("render..." + count);
    
  }, [count]);



  return (
    <>
      <h1>react counter {count}</h1>
      <div className="card">
        <h2>{count}</h2>
        <br />
        <br />
        <button onClick={decrement}> -</button>
        <button onClick={reset}>reset</button>
        <button onClick={increment}> +</button>
        
      </div>
    </>
  )
}

export default App
