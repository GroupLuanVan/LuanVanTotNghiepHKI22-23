// import React, { useEffect, useState } from "react";
// import { ChromePicker } from 'react-color';
// import { Editor, EditorState, RichUtils, convertToRaw, convertFromRaw } from "draft-js";
// import "draft-js/dist/Draft.css";
// import createToolbarPlugin from '@draft-js-plugins/static-toolbar';
// import { Box, Button, Typography } from '@mui/material'
// import FormatItalicIcon from '@mui/icons-material/FormatItalic';
// import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
// import FormatBoldIcon from '@mui/icons-material/FormatBold';
// import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
// import createInlineToolbarPlugin from '@draft-js-plugins/inline-toolbar';
// import '@draft-js-plugins/inline-toolbar/lib/plugin.css';
// const inlineToolbarPlugin = createInlineToolbarPlugin({
//   structure: [
//       BoldButton,
//       ItalicButton,
//       UnderlineButton,
//       {
//           type: 'color',
//           inlineStyle: {
//               backgroundColor: 'yellow'
//           }
//       },
//   ],
// });
// const { InlineToolbar } = inlineToolbarPlugin;
// const plugins = [staticToolbarPlugin, inlineToolbarPlugin];

// const [color, setColor] = useState('#000000');
// const [showColorPicker, setShowColorPicker] = useState(false);
// ...
// <Typography
//     onMouseDown={(e) => {
//         e.preventDefault();
//         setEditorState(RichUtils.toggleInlineStyle(editorState, 'color'));
//         setShowColorPicker(true);
//     }}
//     variant="p"
//     fontWeight={550}
//     sx={{ cursor: "pointer" }}>
//     <PaletteIcon color={activeUtils.color ? 'success' : ''} />
// </Typography>
// {showColorPicker ? (
//     <ChromePicker
//         color={color}
//         onChange={(newColor) => {
//             setColor(newColor.hex);
//             setEditorState(RichUtils.toggle



// Lý thuyết ChosseCv
// Để hiển thị dữ liệu mong muốn khi nhấn vào nút trên CVCard1, bạn cần thực hiện các bước sau:

// Xác định trạng thái của từng card trong ChooseCV, ví dụ như một thuộc tính isActive để đánh dấu card được chọn.
// Xây dựng hàm để xử lý sự kiện nhấn nút trên CVCard1. Hàm này sẽ thực hiện các công việc như đổi trạng thái của card được chọn trong ChooseCV, 
// lấy dữ liệu tương ứng với card được chọn và hiển thị dữ liệu đó.
// Gán hàm xử lý sự kiện này vào sự kiện onclick của nút trên CVCard1.
// Sau khi hoàn thành các bước trên, khi người dùng nhấn vào nút trên CVCard1, hàm xử lý sự kiện sẽ được gọi.
//  Hàm này sẽ thay đổi trạng thái của card được chọn trong ChooseCV và lấy dữ liệu tương ứng với card đó để hiển thị. 
//  Vì đã đổi trạng thái của card được chọn, nên giao diện người dùng sẽ cập nhật lại để thể hiện rõ ràng card đang được chọn.