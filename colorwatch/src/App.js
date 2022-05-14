import { useState } from "react";
import AddColor from "./AddColor";
import ColorBox from "./ColorBox";

function App() {
  const [text, setText] = useState("");
  const [hexVal, setHexVal] = useState("");

  return (
    <div className="App">
      <ColorBox text={text} hexVal={hexVal} />
      <AddColor text={text} setText={setText} setHexVal={setHexVal} />
    </div>
  );
}

export default App;
