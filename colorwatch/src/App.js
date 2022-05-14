import { useState } from "react";
import AddColor from "./AddColor";
import ColorBox from "./ColorBox";
function App() {
  const [text, setText] = useState("");
  return (
    <div className="App">
      <ColorBox />
      <AddColor text={text} setText={setText} />
    </div>
  );
}

export default App;
