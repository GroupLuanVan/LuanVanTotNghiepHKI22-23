import React, { useState } from "react";
import { TextField, MenuItem, Box } from "@mui/material";

const options = ["Option 1", "Option 2", "Option 3", "Option 4"];

const ComboBox = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Box sx={{  }}>
      <TextField width={100}
        select
        label="Select"
        value={selectedOption}
        onChange={handleChange}
        variant="outlined"
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
};

export default ComboBox;
