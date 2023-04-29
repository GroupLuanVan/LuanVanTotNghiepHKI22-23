import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";
import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

export default function AddJobCategoryDialog(props) {
  const token = useSelector((state) => state.user.token);
  const [jobCategory, setJobCategory] = useState("");
  const [jobCategoryName, setJobCategoryName] = useState("");

  const handleClose = () => {
    props.onClose();
  };

  const addJobCategory = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/jobcategory",
        { title: jobCategoryName },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log(response.data);
      toast.success("Thêm loại công việc thành công!");
      handleClose();
      window.location.reload(); // Tải lại trang sau khi thêm thành công
    } catch (error) {
      console.log(error);
      toast.warning("Thêm loại công việc thất bại");
    }
  };

  const handleAddJobCategory = () => {
    addJobCategory();
    handleClose();
    // call a function to refresh job category list
  };

  const handleJobCategoryChange = (event) => {
    setJobCategoryName(event.target.value);
  };

  return (
    <Dialog open={props.open} onClose={handleClose}>
      <DialogTitle>Thêm Loại Công Việc</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Tên Loại Công Việc"
          fullWidth
          value={jobCategoryName}
          onChange={handleJobCategoryChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Huỷ</Button>
        <Button onClick={handleAddJobCategory} color="primary">
          Thêm
        </Button>
      </DialogActions>
    </Dialog>
  );
}
