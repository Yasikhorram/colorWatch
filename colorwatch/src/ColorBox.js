function ColorBox({ text, hexVal, isDarkText }) {
  return (
    <div
      className="box"
      style={{ backgroundColor: text, color: isDarkText ? "#000" : "#FFF" }}
    >
      <p> {text ? text : "empty value"}</p>
    </div>
  );
}

ColorBox.defaultProps = {
  text: "Empty Color Value",
};

export default ColorBox;
