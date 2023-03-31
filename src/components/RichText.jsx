import React, { useEffect, useState } from "react";
import {
  Editor,
  EditorState,
  RichUtils,
  convertToRaw,
  convertFromRaw,
} from "draft-js";
import "draft-js/dist/Draft.css";
import createToolbarPlugin from "@draft-js-plugins/static-toolbar";
import { Box, Button, Typography } from "@mui/material";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { SketchPicker } from "react-color";
import ColorPickerButton from "./ColorPicker ";
export default function RichText({ editorState, setEditorState }) {
  const staticToolbarPlugin = createToolbarPlugin();
  const [activeUtils, setActiveUtils] = useState({
    bold: false,
    italic: false,
    underline: false,
    list: false,
  });
  const [colorPickerOpen, setColorPickerOpen] = useState(false);
  const [currentColor, setCurrentColor] = useState("#FF0000"); // set initial color to black

  function toggleRichUtil(util) {
    switch (util) {
      case "BOLD":
        setActiveUtils({
          ...activeUtils,
          bold: !activeUtils.bold,
        });
        break;
      case "ITALIC":
        setActiveUtils({
          ...activeUtils,
          italic: !activeUtils.italic,
        });
        break;
      case "UNDERLINE":
        setActiveUtils({
          ...activeUtils,
          underline: !activeUtils.underline,
        });
        break;
      case "UL":
        setActiveUtils({
          ...activeUtils,
          list: !activeUtils.list,
        });
        break;

      default:
        break;
    }
  }

  function handleColorChange(color) {
    setCurrentColor(color.hex);
    const newEditorState = RichUtils.toggleInlineStyle(
      editorState,
      "COLOR-" + color.hex
    );
    setEditorState(newEditorState);
  }

  const plugins = [staticToolbarPlugin];
  const editor = React.useRef(null);

  const customStyleMap = {
    ["COLOR-" + currentColor]: {
      color: currentColor,
    },
  };

  return (
    <>
      <Box
        sx={{
          mt: 1,
          p: 1,
          border: "1px solid rgba(0,0,0,0.1)",
          borderRadius: "5px",
          minHeight: "200px",
        }}
      >
        <Box sx={{ display: "flex", width: "10%" }}>
          <Typography
            onMouseDown={(e) => {
              e.preventDefault();
              setEditorState(RichUtils.toggleInlineStyle(editorState, "BOLD"));
              toggleRichUtil("BOLD");
            }}
            variant="p"
            fontWeight={550}
            sx={{ cursor: "pointer" }}
          >
            <FormatBoldIcon color={activeUtils.bold ? "success" : ""} />
          </Typography>
          <Typography
            onMouseDown={(e) => {
              e.preventDefault();
              setEditorState(
                RichUtils.toggleInlineStyle(editorState, "ITALIC")
              );
              toggleRichUtil("ITALIC");
            }}
            variant="p"
            fontWeight={550}
            sx={{ cursor: "pointer" }}
          >
            <FormatItalicIcon color={activeUtils.italic ? "success" : ""} />
          </Typography>
          <Typography
            onMouseDown={(e) => {
              e.preventDefault();
              setEditorState(
                RichUtils.toggleInlineStyle(editorState, "UNDERLINE")
              );
              toggleRichUtil("UNDERLINE");
            }}
            variant="p"
            fontWeight={550}
            sx={{ cursor: "pointer" }}
          >
            <FormatUnderlinedIcon
              color={activeUtils.underline ? "success" : ""}
            />
          </Typography>
          <Typography
            onMouseDown={(e) => {
              e.preventDefault();
              setEditorState(
                RichUtils.toggleBlockType(editorState, "unordered-list-item")
              );
              toggleRichUtil("UL");
            }}
            variant="p"
            fontWeight={550}
            sx={{ cursor: "pointer" }}
          >
            <FormatListBulletedIcon color={activeUtils.list ? "success" : ""} />
          </Typography>

          <Box
            sx={{
              ml: "auto",
            }}
          >
            {/* <Button
              onClick={() => setColorPickerOpen(!colorPickerOpen)}
              sx={{
                bgcolor: currentColor,
                width: "40px",
                height: "40px",
                borderRadius: "50%",
              }}
            /> */}
            <Button
              onClick={() => setColorPickerOpen(!colorPickerOpen)}
              sx={{
                bgcolor: currentColor,
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                "&:hover": {
                  bgcolor: currentColor,
                  opacity: "0.8",
                },
              }}
            >
              {activeUtils["COLOR-" + currentColor] && (
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                    width: "22px",
                    height: "22px",
                    borderRadius: "50%",
                    bgcolor: "success.main",
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  ✓
                </Box>
              )}
            </Button>
          </Box>

          {colorPickerOpen && (
            <SketchPicker
              color={currentColor}
              onChange={(color) => handleColorChange(color)}
            />
          )}
        </Box>

        <Editor
          editorState={editorState}
          onChange={(editorState) => setEditorState(editorState)}
          plugins={plugins}
          customStyleMap={{ ...customStyleMap }}
          ref={editor}
        />
      </Box>
    </>
  );
}

export const RichTextDisplay = function ({ data }) {
  useEffect(() => {
    if (!data) {
      data = null;
    }
  });
  const [editorState, setEditorState] = useState(() =>
    EditorState.createWithContent(convertFromRaw(data))
  );
  return <Editor readOnly={true} editorState={editorState} />;
};

// export const RichTextDisplay = function ({ data }) {
//   useEffect(()=>{
//       if(!data) {
//           data = null;
//       }
//   });
//   const [editorState, setEditorState] = useState(() =>
//       EditorState.createWithContent(convertFromRaw(data))
//   );
//   return (<Editor
//       readOnly={true}
//       editorState={editorState}
//   />)
// }

// function handleColorChange(color) {
//   const colorPrefix = "COLOR-" + color.hex;
//   setCurrentColor(color.hex);
//   setActiveUtils({
//     ...activeUtils,
//     [colorPrefix]: !activeUtils[colorPrefix],
//   });
//   const newEditorState = RichUtils.toggleInlineStyle(
//     editorState,
//     colorPrefix
//   );
//   setEditorState(newEditorState);
// }
