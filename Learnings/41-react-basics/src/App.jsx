import "./app.css";
import { useState } from "react";

function App() {
  const [count, setfirst] = useState(1);
  const decreaseCount = () => {
    if (count !== 0){
      setfirst(count-1)
    }
  }

  return (
    <>
      <main className="main">
        <div className="container">
          <h1>React Start</h1>
          <h2>
            counter: <span>{count}</span>
          </h2>
          <div className="buttons">
            <button onClick={() => setfirst(count + 1)} className="increase">Incriase</button>
            <button onClick={decreaseCount} className="decrease">Decrise</button>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
