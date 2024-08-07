import React from "react";
import { ImCross } from "react-icons/im";
import "./Squre.css";
import { ThemedColors } from "../constants";

interface SqureProps {
  value: number;
  isSelected: boolean;
}

const Squre: React.FC<SqureProps> = ({ value, isSelected }) => {
  return (
    <div
      className="squre-container"
      style={{
        backgroundColor: isSelected ? ThemedColors.background_2 : undefined,
      }}
      data-testid="squreContainer"
    >
      <div className="sub-container">
        {isSelected && <ImCross className="cross" data-testid="crossIcon" />}

        <div className="value-number">{value}</div>
      </div>
    </div>
  );
};

export default Squre;
