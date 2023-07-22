import { useState } from "react";
import Button from "./components/Button";


function App() {
  const [position, setPosition] = useState("top");

  const handlePosition = (pos) => {
    const TooltopPosition = ["top", "bottom", "left", "right"];
    const val = TooltopPosition.map(positions => positions === pos );

    if(val){
      setPosition(pos);
    }
    // console.log("app", position);
  };

  return (
    <div className="App">
      <h2 className="txt">Enter Tooltip Position</h2>
      <input onKeyUp={(e)=> handlePosition(e.target.value)} className="userInput" placeholder="top, bottom, left, right" required></input>

      <Button position={position} />
    </div>
  );
}

export default App;
