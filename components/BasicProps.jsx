import React, { useState } from "react";

function Button({ text, color, size, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-6 py-2 rounded-lg font-medium transition-all duration-300
        ${size === "small" ? "text-sm px-4 py-1" : ""}
        ${size === "large" ? "text-lg px-8 py-3" : ""}
        ${color === "primary" ? "bg-blue-500 hover:bg-blue-600 text-white" : ""}
        ${color === "secondary" ? "bg-gray-500 hover:bg-gray-600 text-white" : ""}
        ${color === "danger" ? "bg-red-500 hiver:bg-green-600 text-white" : ""}
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
        `}
    >
      {text}
    </button>
  );
}

function BasicProps() {
  const [clickCount, setClickCount] = useState(0);
  return (
    <div className="flex flex-wrap gap-3  justify-start">
      <Button
        text="Primary"
        color="primary"
        onClick={() => setClickCount(clickCount + 1)}
      />
      <Button
        text="large"
        color="secondary"
        onClick={() => setClickCount(clickCount + 1)}
      />
      <Button
        text="small"
        size="small"
        color="danger"
        onClick={() => setClickCount(clickCount + 1)}
      />
      <Button
        text="large"
        size="large"
        color="primary"
        onClick={() => setClickCount(clickCount + 1)}
      />

      <span>Click Count : {clickCount}</span>
    </div>
  );
}

export default BasicProps;
