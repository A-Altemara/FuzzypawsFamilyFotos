import './App.css';

import pictures from './data';
import { useState } from 'react';
import DisplayKitty from './DisplayKitty';


function App() {
  const [count, setCount] = useState(0)
 
  return (
    <>
    {/* this is the way components are normally displayed in react */}
    <DisplayKitty /> 
      {DisplayKitty()}
      
      <p>Why the F******** can't I get this to show up?</p>


      <div>
        <p>OOOOOOOOOOKKKK!!!!!!!</p>
      </div>

      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </>
  );
}


export default App;
