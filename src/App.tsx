import { useState } from "react";
import "./App.css";
import {
  PRIMARY_WINNING_NUMBERS,
  ResultType,
  SECONDARY_WINNING_NUMBERS,
} from "./constants";
import Circle from "./components/Circle";

const defaultPrimaryNumbers = Array(PRIMARY_WINNING_NUMBERS).fill(undefined);
const defaultSecondaryNumbers = Array(SECONDARY_WINNING_NUMBERS).fill(
  undefined
);

function App() {
  const [primaryNumbers, setPrimaryNumbers] = useState<number[]>(
    defaultPrimaryNumbers
  );

  const [secondaryNumbers, setSecondaryNumbers] = useState<number[]>(
    defaultSecondaryNumbers
  );

  return (
    <div className="result-container">
      {/* Header */}
      <header className="header">
        <h1>Powerball Results</h1>
      </header>
      {/* Result Numbers */}
      <div className="numbers-container">
        {primaryNumbers.map((number, index) => (
          <Circle
            value={number?.toString()}
            key={index}
            type={ResultType.PRIMARY}
          />
        ))}
        {secondaryNumbers.map((number, index) => (
          <Circle
            value={number?.toString()}
            key={index}
            type={ResultType.SECONDARY}
            fallbackValue="PB"
          />
        ))}
      </div>
    </div>
  );
}

export default App;
