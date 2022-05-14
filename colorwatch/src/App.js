import { useState } from "react";
import AddColor from "./AddColor";
import ColorBox from "./ColorBox";

function App() {
  const [text, setText] = useState("");
  const [isDarkText, setIsDarkText] = useState(true);

  return (
    <div className="App">
      <ColorBox text={text} isDarkText={isDarkText} />
      <AddColor
        text={text}
        setText={setText}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
    </div>
  );
}

export default App;
