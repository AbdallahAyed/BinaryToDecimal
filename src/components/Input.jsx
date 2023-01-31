export function Input({ value, handleInput }) {
  return (
    <div className="input">
      <input
        onChange={(e) => handleInput(e)}
        type="text"
        minLength="1"
        maxLength="20"
        autoFocus
        value={value}
      />
    </div>
  );
}
