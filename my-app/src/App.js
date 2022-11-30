import './App.css';

import pictures from './data';
import { useState } from 'react';

const pict2 = pictures

function DisplayKitty() {
  return (
    <div className='media_content'>
      <div className='gallery'>
         {pict2 ? pict2.map(picture => <img className={picture.className} src="./picture/CAM00383.jpg" alt={picture.alt}></img>) : null}
         
      </div>
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0)
 
  return (
    <>
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
