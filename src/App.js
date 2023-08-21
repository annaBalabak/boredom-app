import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [advice, setAdvice] = useState('');
  const [visible, setVisible] = useState(false)

  const showAdvise = ()=>{
setVisible(true)
getAdvice()
  }
 
    const getAdvice = async()=>{
      const responce = await fetch("https://www.boredapi.com/api/activity/");
      const data = await responce.json();
      setAdvice(data.activity)
    }

    useEffect(()=>{
      getAdvice();
    }, [])

  return (
    <div className="App">
      <div className='container'>
        <h1>Are you bored?</h1>
      <h2>Find out what can you do...</h2>
      
      
      <button onClick={showAdvise}>Get Idea</button>
      {visible && <p>{advice}</p>}
    </div>
    </div>
  );
}

export default App;
