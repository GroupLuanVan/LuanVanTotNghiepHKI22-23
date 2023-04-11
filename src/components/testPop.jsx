import { Button, Collapse, Typography } from "@mui/material";
import { useState } from "react";
export default function TestPop() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Button onClick={handleToggle}>Toggle Collapse</Button>
      <Collapse in={isOpen}>
        <Typography>Đây là nội dung của Collapse</Typography>
      </Collapse>
    </>
  );
}
