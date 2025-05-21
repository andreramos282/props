import React, { useState } from "react";
import "./Exercise.css";

interface BallProps {
  value: number;
}
const Ball: React.FC<BallProps> = ({ value }) => (
  <div className="ball ball-blue">{value}</div>
);

const MAX = 12;

const Exercise1: React.FC = () => {
  const [qty, setQty] = useState<string>("");
  const [balls, setBalls] = useState<number[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/, "");
    setQty(val);
    const n = Math.max(0, Math.min(Number(val) || 0, MAX));
    if (n < 1) {
      setBalls([]);
      return;
    }
    const s = new Set<number>();
    while (s.size < n) {
      s.add(Math.floor(Math.random() * 100));
    }
    setBalls(Array.from(s).sort((a, b) => a - b));
  };

  return (
    <div className="exercise-box">
      <div className="exercise-title blue">Exercicio 1</div>
      <input
        placeholder="Quantidade de números"
        value={qty}
        onChange={handleChange}
        className="exercise-input"
        maxLength={2}
      />
      <div className="ball-list">
        {balls.map((v, i) => (
          <Ball key={i} value={v} />
        ))}
      </div>
    </div>
  );
};

export default Exercise1;