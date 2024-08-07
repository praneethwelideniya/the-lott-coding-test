import { useState } from "react";
import "./App.css";
import {
  PRIMARY_NUMBERS,
  PRIMARY_WINNING_NUMBERS,
  ResultType,
  SECONDARY_NUMBERS,
  SECONDARY_WINNING_NUMBERS,
} from "./constants";
import Circle from "./components/Circle";
import Squre from "./components/Squre";
import Operator from "./components/Operator";
import { getResults } from "./api";

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

  const resetData = () => {
    setPrimaryNumbers(defaultPrimaryNumbers);
    setSecondaryNumbers(defaultSecondaryNumbers);
  };

  const callResults = async () => {
    try {
      const result = await getResults();
      setPrimaryNumbers(result.PrimaryNumbers);
      setSecondaryNumbers(result.SecondaryNumbers);
    } catch (error) {
      alert("Failed to fetch");
    }
  };

  return (
    <div className="result-container">
      {/* Header */}
      <header className="header">
        <h1>Powerball Results</h1>
        <div className="button-container">
          <Operator getData={callResults} resetData={resetData} />
        </div>
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
      {/* Primary Numbers List */}
      <div className="results-grid">
        {Array.from({ length: PRIMARY_NUMBERS }).map((_, index) => (
          <Squre
            value={index + 1}
            isSelected={primaryNumbers.includes(index + 1)}
            key={index}
          />
        ))}
      </div>
      <div className="power-ball-text">
        <h2>Powerball</h2>
      </div>
      {/* Secondary Numbers List */}
      <div className="results-grid">
        {Array.from({ length: SECONDARY_NUMBERS }).map((_, index) => (
          <Squre
            value={index + 1}
            isSelected={secondaryNumbers.includes(index + 1)}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
