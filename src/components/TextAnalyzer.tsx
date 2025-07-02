import React, { useState } from "react";

interface TextAnalyzerProps {
  placeholder: string;
}

const TextAnalyzer: React.FC<TextAnalyzerProps> = ({ placeholder }) => {
  const [text, setText] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  // Count different types of characters
  const countLetters = (str: string): number => {
    return (str.match(/[a-zA-Z]/g) || []).length;
  };

  const countNumbers = (str: string): number => {
    return (str.match(/[0-9]/g) || []).length;
  };

  const countOthers = (str: string): number => {
    return (str.match(/[^a-zA-Z0-9]/g) || []).length;
  };

  const letterCount = countLetters(text);
  const numberCount = countNumbers(text);
  const otherCount = countOthers(text);

  return (
    <div
      style={{
        background: "#3a3a3a",
        borderRadius: "8px",
        padding: "16px",
        marginBottom: "18px",
      }}
    >
      <div
        style={{
          fontWeight: "bold",
          fontSize: "18px",
          marginBottom: "8px",
          color: "#4caf50",
        }}
      >
        Analisador de Texto
      </div>
      
      <input
        placeholder={placeholder}
        value={text}
        onChange={handleChange}
        style={{
          width: "100%",
          padding: "7px 10px",
          borderRadius: "6px",
          border: "none",
          fontSize: "16px",
          marginBottom: "8px",
          background: "#fff",
          color: "#555",
          outline: "none",
          boxSizing: "border-box",
        }}
      />
      
      <div
        style={{
          background: "#2a2a2a",
          borderRadius: "6px",
          padding: "12px",
          marginTop: "8px",
        }}
      >
        <div
          style={{
            color: "#fff",
            fontSize: "14px",
            marginBottom: "8px",
            fontWeight: "500",
          }}
        >
          Texto digitado:
        </div>
        <div
          style={{
            color: "#ccc",
            fontSize: "16px",
            marginBottom: "12px",
            minHeight: "20px",
            fontStyle: text ? "normal" : "italic",
          }}
        >
          {text || "Nenhum texto digitado ainda..."}
        </div>
        
        <div
          style={{
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              color: "#4caf50",
              fontSize: "14px",
              fontWeight: "600",
            }}
          >
            Letras: {letterCount}
          </div>
          <div
            style={{
              color: "#2196f3",
              fontSize: "14px",
              fontWeight: "600",
            }}
          >
            Números: {numberCount}
          </div>
          <div
            style={{
              color: "#ff9800",
              fontSize: "14px",
              fontWeight: "600",
            }}
          >
            Outros: {otherCount}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextAnalyzer;