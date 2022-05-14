const AddColor = ({ text, setText, hexVal, setHexVal }) => {
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
    </form>
  );
};

export default AddColor;
