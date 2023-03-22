import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
  Typography,
  Grid,
  Input,
} from "@mui/material";
import JoditEditor from "jodit-react";
import Autocomplete from "@mui/material/Autocomplete";
import Calendar from "react-calendar";
import RichText from "../RichText";
import "../../App.css";
import { Margin } from "@mui/icons-material";
const getTextArrayFromRich = function (rawdata) {
  if (rawdata.blocks.length > 0) {
    return rawdata.blocks.map((item) => item.text);
  }
};

const PostJob = () => {
  return (
    <Box
      maxWidth={900}
      margin="0 auto"
      marginTop={10}
      marginBottom={5}
      sx={{
        backgroundColor: "#fff",
        borderRadius: "4px",
        boxShadow: "0 1px 3px 0 rgba(0,0,0,0.15)",
        padding: "32px",
      }}
    >
      <Typography variant="h4" align="center" marginBottom={2}>
        Đăng tin tuyển dụng
      </Typography>
      <form>
        <Typography variant="p">Tiêu đề công việc</Typography>
        <TextField
          variant="outlined"
          fullWidth
          margin="normal"
          sx={{ marginBottom: "16px" }}
        />

        {/* <TextField
          label="Job Description"
          variant="outlined"
          fullWidth
          multiline
          rows={5}
          margin="normal"
          sx={{ marginBottom: "16px" }}
        /> */}
        <Typography variant="p">Mô tả công việc</Typography>
        <JoditEditor
          sx={{
            height: "1000px !important ",
          }}
        />

        <Box marginTop={3}>
          <Grid container spacing={2}>
            <Grid item xs={6} md={6}>
              <Box>
                <Typography>Kiểu thời gian làm việc</Typography>
              </Box>

              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={top100Films}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Chọn thể loại công việc" />
                )}
              />
            </Grid>
            <Grid item xs={6} md={6}>
              <Typography>Ngành nghề</Typography>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={nganhnghe}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Chọn lĩnh vực" />
                )}
              />
            </Grid>
          </Grid>
        </Box>
        {/* <Box marginTop={3}>
          <Typography>Mức lương</Typography>

          <Grid container spacing={2}>
            <Grid item xs={12} md={2} sx={{}}>
              <TextField
                label="Salary"
                variant="outlined"
                fullWidth
                margin="normal"
                sx={{ marginBottom: "16px" }}
              />
            </Grid>
            <Grid item xs={12} md={2} sx={{}}>
              <TextField
                label="Salary"
                variant="outlined"
                fullWidth
                margin="normal"
                sx={{ marginBottom: "16px" }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              md={8}
              sx={{ marginTop: "0px", backgroundColor: "#ffffff" }}
            >
              <Grid sx={{ marginTop: "15px" }} container spacing={2}>
                {Array.from({ length: 4 }, (_, index) => (
                  <Grid item xs={3}>
                    <input key={index} type="text" sx={{}} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Box> */}

        <Typography>Mư</Typography>
        <Box display={"flex"}>
          <TextField
            label="Salary"
            variant="outlined"
            fullWidth
            margin="normal"
            sx={{ marginBottom: "16px", marginRight: "20px", width: "160px" }}
          />
          <TextField
            label="Salary"
            variant="outlined"
            fullWidth
            margin="normal"
            sx={{ marginBottom: "16px", width: "160px" }}
          />
          <div className="container1">
            <div className="container-Item">Year</div>
            <div className="container-Item">month</div>
            <div className="container-Item">week</div>
            <div className="container-Item">hour</div>
          </div>
        </Box>

        <Typography>Làm thế nào để apply</Typography>
        <TextField
          label="Nhập email"
          variant="outlined"
          fullWidth
          margin="normal"
          sx={{ marginBottom: "16px" }}
        />

        <Typography>Ngày hết hạn</Typography>
        <Box>
          {" "}
          <input
            style={{
              width: "250px",
              height: "40px",
              fontSize: "16px",
              borderRadius: "10px",
            }}
            type={"date"}
          />
        </Box>

        <FormGroup sx={{ marginBottom: "16px" }}>
          <FormControlLabel
            control={<Checkbox />}
            label="I agree to the terms and conditions"
          />
        </FormGroup>

        <Button
          variant="contained"
          fullWidth
          sx={{ backgroundColor: "#4caf50", color: "#fff" }}
        >
          Post Job
        </Button>
      </form>
    </Box>
  );
};

const top100Films = [
  { label: "FullTime" },
  { label: "PartTime" },
  { label: "Intern" },
  { label: "Training" },
  { label: "Remote" },
  { label: "Test1" },
  { label: "Test2" },
];

const nganhnghe = [
  { label: "Công nghệ thông tin" },
  { label: "Ngân Hàng" },
  { label: "Ô tô" },
  { label: "Kinh Tế" },
  { label: "Công nghệ sinh học" },
  { label: "Giáo dục" },
  { label: "Thiết bị điện tử" },
  { label: "Viễn thông" },
  { label: "Khoa học kỹ thuật" },
  { label: "Y tế" },
];

export default PostJob;
