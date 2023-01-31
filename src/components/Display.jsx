export function Display({ binInput, decNum }) {
  return (
    <div className="display">
      {!binInput.isBinary ? (
        <p className="not-result">🤷 Waiting for your Binary Number....</p>
      ) : (
        <p>{decNum}</p>
      )}
    </div>
  );
}
