const Input = ({ colorValue, setColorValue }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor=""> Add Color name: </label>
      <input
        type="text"
        autoFocus
        placeholder="Add Color Name"
        required
        value={colorValue}
        onChange={(e) => setColorValue(e.target.value)}
      />
    </form>
  );
};

export default Input;
