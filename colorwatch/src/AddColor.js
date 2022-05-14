const AddColor = ({ text, setText }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="">
        <input
          type="text"
          value={text}
          placeholder="Add your color"
          onChange={(e) => setText(e.target.value)}
        />
      </label>
    </form>
  );
};

export default AddColor;
