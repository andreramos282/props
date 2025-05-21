import React, { useState } from "react";
import "./Exercise.css";

interface BallProps {
  value: number;
  onRightClick: (e: React.MouseEvent) => void;
}
const Ball: React.FC<BallProps> = ({ value, onRightClick }) => (
  <div className="ball ball-red" onContextMenu={onRightClick}>
    {value}
  </div>
);

const MAX = 12;
interface Props {
  numbers: number[];
  setNumbers: React.Dispatch<React.SetStateAction<number[]>>;
}
const Exercise2: React.FC<Props> = ({ numbers, setNumbers }) => {
  const [input, setInput] = useState<string>("");

  const addNumber = () => {
    const num = Number(input);
    if (isNaN(num) || input.trim() === "") return;
    let arr = [...numbers, num];
    if (arr.length > MAX) arr = arr.slice(1);
    setNumbers(arr);
    setInput("");
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInput(e.target.value.replace(/\D/, ""));
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") addNumber();
  };
  const handleRightClick = (i: number, e: React.MouseEvent) => {
    e.preventDefault();
    setNumbers(numbers.filter((_, idx) => idx !== i));
  };

  return (
    <div className="exercise-box">
      <div className="exercise-title red">Exercicio 2</div>
      <input
        placeholder="Digite um número"
        value={input}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className="exercise-input"
        maxLength={3}
      />
      <div className="ball-list">
        {numbers.map((n, i) => (
          <Ball key={i} value={n} onRightClick={e => handleRightClick(i, e)} />
        ))}
      </div>
    </div>
  );
};

export default Exercise2;