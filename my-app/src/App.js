import './App.css';

import { useState } from 'react';
import DisplayKitty from './DisplayKitty';
import DisplayHeader from './header';
import LeftBar from './Leftbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DisplayHeader />
      <LeftBar />
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
