import { useMemo, useState } from "react";

const UseMemo = () => {
  const [inputVal, setInput] = useState("");
  const [finalInputValue, setFinalInputValue] = useState("");
  const handleChange = (event) => {
    setInput(event.target.value);
  };
  const handleClick = () => {
    setFinalInputValue(inputVal);
  };
  const memoizedVal = useMemo(() => {
    console.log("input changed " + finalInputValue);
    return finalInputValue;
  }, [finalInputValue]);

  return (
    <>
      <input type="text" onChange={(event) => handleChange(event)} />
      <input type="button" value="Click me" onClick={() => handleClick()} />
      {memoizedVal}
    </>
  );
};
export default UseMemo;
