import colorNames from "colornames"; // npm i colornames -S

const Input = ({
  colorValue,
  setColorValue,
  setHexValue,
  isDarkText,
  setDarkText,
}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor=""> Add Color name: </label>
      <input
        type="text"
        autoFocus
        placeholder="Add Color Name"
        required
        value={colorValue}
        onChange={(e) => {
          setColorValue(e.target.value);
          setHexValue(colorNames(e.target.value));
        }}
      />
      <button type="button" onClick={() => setDarkText(!isDarkText)}>
        Toggle Text Color
      </button>
    </form>
  );
};

export default Input;
