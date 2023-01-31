import { useEffect, useState } from "react";
import { Display } from "./components/Display";
import { Input } from "./components/Input";
import { Alert } from "./components/Alert";

export function App() {
  const [binInput, setBinInput] = useState({
    value: "",
    isBinary: false,
  });
  const [decNum, setDecNum] = useState();
  const regExpNotBin = /[^01]/;

  useEffect(() => {
    if (binInput.value.length > 0 && binInput.isBinary) {
      setDecNum(convertToDec(binInput.value));
    } else if (binInput.value.length === 0) {
      setDecNum("");
    }
  }, [binInput]);

  const convertToDec = (num) => {
    let convertedNum = 0;
    num
      .split("")
      .reverse()
      .map((item, index) => {
        return item === "1" && (convertedNum += Math.pow(2, index));
      });
    return convertedNum;
  };

  const handleInput = (e) => {
    const { value } = e.target;
    setBinInput({ value, isBinary: !regExpNotBin.test(value) });
  };

  return (
    <div className="App">
      <h1>Binary To Decimal</h1>
      <Alert binInput={binInput} />
      <Input handleInput={handleInput} value={binInput.value} />
      <Display binInput={binInput} decNum={decNum} />
      <code>
        Background Photo by{" "}
        <a href="https://unsplash.com/@swimstaralex">Alexander Sinn</a>
      </code>
    </div>
  );
}
