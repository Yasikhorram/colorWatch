function ColorBox({ text, hexVal }) {
  return (
    <div className="box" style={{ backgroundColor: text }}>
      <p> {text ? text : "empty value"}</p>
    </div>
  );
}

ColorBox.defaultProps = {
  text: "Empty Color Value",
};

export default ColorBox;
