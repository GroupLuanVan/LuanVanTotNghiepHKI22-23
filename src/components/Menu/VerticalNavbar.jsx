import React, { useState } from "react";
import { List, ListItem, ListItemText, Popover } from "@mui/material";

const VerticalMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <List component="nav">
        <ListItem button onClick={handleOpen}>
          <ListItemText primary="Menu Item" />
        </ListItem>
      </List>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <div>
          <p>Thông tin popup</p>
        </div>
        <div>
          <p>Thông tin popup</p>
        </div>
        <div>
          <p>Thông tin popup</p>
        </div>
        <div>
          <p>Thông tin popup</p>
        </div>
        ``
      </Popover>
    </>
  );
};

export default VerticalMenu;
