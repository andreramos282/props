import React, { useState } from "react";
import Exercise1 from "./components/Exercise1";
import Exercise2 from "./components/Exercise2";
import "./App.css";

const App: React.FC = () => {
  const [exercise2Numbers, setExercise2Numbers] = useState<number[]>([]);

  return (
    <div className="app-root">
      <div className="app-card">
        <Exercise1 />
        <Exercise2 numbers={exercise2Numbers} setNumbers={setExercise2Numbers} />
      </div>
    </div>
  );
};

export default App;