// import { useState } from "react";
// import { HexColorPicker } from "react-colorful";
// import "react-colorful/dist/index.css";
// import { Button } from "@mui/material";
// import { ChromePicker } from "react-color";
// import IconButton from "@mui/material";
// import { FormatColorFill } from "@mui/icons-material";
// import Popover from "@mui/material";
// const ColorPickerButton = ({ onColorChange }) => {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [color, setColor] = useState("#000000"); // Khai báo state color và gán giá trị mặc định
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };
//   const handleColorChange = (color) => {
//     setColor(color.hex); // Sửa giá trị của state color khi màu được thay đổi
//     onColorChange(color.hex);
//     handleClose();
//   };
//   return (
//     <>
//       <IconButton onClick={handleClick}>
//         <FormatColorFill />
//       </IconButton>
//       <Popover
//         open={Boolean(anchorEl)}
//         anchorEl={anchorEl}
//         onClose={handleClose}
//         anchorOrigin={{
//           vertical: "bottom",
//           horizontal: "left",
//         }}
//       >
//         <ChromePicker color={color} onChange={handleColorChange} />
//       </Popover>
//     </>
//   );
// };

// export default ColorPickerButton;
