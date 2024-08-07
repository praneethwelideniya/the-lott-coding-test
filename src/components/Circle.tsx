import React from "react";

import "./Circle.css";
import clsx from "clsx";
import { ResultType } from "../constants";

interface CircleProps {
  value?: string;
  type?: ResultType.PRIMARY | ResultType.SECONDARY;
  fallbackValue?: string;
}

const Circle: React.FC<CircleProps> = ({
  value,
  type = ResultType.PRIMARY,
  fallbackValue = "",
}) => {
  return (
    <div
      className={clsx("circle", {
        value: value,
        primary: value && type == ResultType.PRIMARY,
        secondary: value && type == ResultType.SECONDARY,
      })}
    >
      {value ?? fallbackValue}
    </div>
  );
};

export default Circle;
