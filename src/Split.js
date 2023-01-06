import { useState } from "react";

function SplitNumb() {
  const [number, setNumber] = useState(" ");
  const [sum, setSum] = useState(0);

  console.log(sum);

  const handleInput = (event) => {
    setNumber(event.target.value);
  };

  const numberFunc = () => {
    console.log(number);
    let str = number.split("");

    let arrayOfNumber = str.map(Number);

    const sum = arrayOfNumber.reduce((a, b) => a + b);
    console.log(sum);
    setSum(sum);
  };

  return (
    <div>
      <input type="number" onChange={handleInput} placeholder="Enter number" />
      <button onClick={numberFunc}>Enter number</button>
      <p>Calculation = {sum}</p>
    </div>
  );
}

export default SplitNumb;
