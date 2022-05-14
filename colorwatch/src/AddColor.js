const AddColor = ({ text, setText, setIsDarkText, isDarkText }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="color">
        <input
          autoFocus
          type="text"
          value={text}
          placeholder="Add your color"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </label>
      <button type="button" onClick={() => setIsDarkText(!isDarkText)}>
        Toggle text color
      </button>
    </form>
  );
};

export default AddColor;
