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
      case "COLOR":
        setActiveUtils({
          ...activeUtils,
          color: !activeUtils.color,
        });
        break;

      default:
        break;
    }
  }

  // function handleColorChange(color) {
  //   setCurrentColor(color.hex);
  //   const newEditorState = RichUtils.toggleInlineStyle(
  //     editorState,
  //     "COLOR-" + color.hex
  //   );
  //   setEditorState(newEditorState);
  // }

  function handleColorChange(color) {
    setCurrentColor(color.hex);
    let newEditorState = editorState;
    const currentStyle = editorState.getCurrentInlineStyle();
    if (!currentStyle.has("COLOR")) {
      newEditorState = RichUtils.toggleInlineStyle(
        editorState,
        "COLOR-" + color.hex
      );
    } else {
      currentStyle.forEach((style) => {
        if (style.startsWith("COLOR-")) {
          newEditorState = RichUtils.toggleInlineStyle(newEditorState, style);
        }
      });
      newEditorState = RichUtils.toggleInlineStyle(
        newEditorState,
        "COLOR-" + color.hex
      );
    }
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
            <Button
              onClick={() => setColorPickerOpen(!colorPickerOpen)}
              sx={{
                bgcolor: currentColor,
                width: "40px",
                height: "40px",
                borderRadius: "50%",
              }}
            />
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
//   const [editorState, setEditorState] = useState(() =>
//     EditorState.createWithContent(convertFromRaw(data))
//   );

//   useEffect(() => {
//     setEditorState(EditorState.createWithContent(convertFromRaw(data)));
//   }, [data]);

//   return <Editor readOnly={true} editorState={editorState} />;
// };
