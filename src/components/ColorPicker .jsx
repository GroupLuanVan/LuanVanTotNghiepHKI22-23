import React, { useState } from "react";
import { ChromePicker } from "react-color";

export default function ColorPicker({ color, onChange }) {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  const handleColorChange = (color) => {
    onChange(color.hex);
  };

  return (
    <div>
      <div
        style={{
          display: "inline-block",
          backgroundColor: color,
          width: "20px",
          height: "20px",
          border: "1px solid #ccc",
          cursor: "pointer",
        }}
        onClick={() => setDisplayColorPicker(true)}
      ></div>
      {displayColorPicker && (
        <div
          style={{
            position: "absolute",
            zIndex: "2",
          }}
        >
          <div
            style={{
              position: "fixed",
              top: "0px",
              right: "0px",
              bottom: "0px",
              left: "0px",
            }}
            onClick={() => setDisplayColorPicker(false)}
          ></div>
          <ChromePicker color={color} onChange={handleColorChange} />
        </div>
      )}
    </div>
  );
}
