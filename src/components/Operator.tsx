import { IoMdTrash } from "react-icons/io";
import { IoFlash } from "react-icons/io5";
import { ThemedColors } from "../constants";
import "./Operator.css";

interface OperatorProps {
  getData: () => void;
  resetData: () => void;
}

const Operator: React.FC<OperatorProps> = ({ getData, resetData }) => {
  return (
    <>
      <IoFlash
        onClick={getData}
        className="icon"
        style={{
          backgroundColor: ThemedColors.primary,
        }}
        data-testid="flash-icon"
      />
      <IoMdTrash
        onClick={resetData}
        className="icon"
        style={{
          backgroundColor: ThemedColors.background,
        }}
        data-testid="trash-icon"
      />
    </>
  );
};

export default Operator;
