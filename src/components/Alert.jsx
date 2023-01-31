export const Alert = ({ binInput }) => {
  if (binInput.value.length > 0) {
    if (binInput.isBinary) {
      return <div className="right">Here's Your Decimal Number</div>;
    } else {
      return <div className="wrong">please write a binary number</div>;
    }
  } else {
    return <div className="wait">Waiting...</div>;
  }
};
