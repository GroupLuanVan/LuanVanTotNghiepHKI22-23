import { useState, useEffect } from "react";
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
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import {
  useNavigate,
  BrowserRouter,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { Editor, EditorState, convertToRaw } from "draft-js";
import { useSelector } from "react-redux";
import { styled, alpha, createTheme } from "@mui/material/styles";
import "draft-js/dist/Draft.css";
import JoditEditor from "jodit-react";
import Autocomplete from "@mui/material/Autocomplete";
import EditIcon from "@mui/icons-material/Edit";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Calendar from "react-calendar";
import RichText from "../RichText";
import "../../App.css";
import { Margin } from "@mui/icons-material";

const PostJob = () => {
  const kieuluong = ["Trong Khoảng", "Cố Định", "Thỏa Thuận"];
  const currency = ["USD", "VND", "EURO"];

  const [kieuLuong, setKieuLuong] = useState("");
  const [Currency, setCurrency] = useState("");
  const [soLuong, setSoLuong] = useState("");

  const handleKieuLuongChange = (event, newValue) => {
    setKieuLuong(newValue);
  };
  const handleCurrencyChange = (event, newValue) => {
    setCurrency(newValue);
  };
  const handleSoLuongChange = (event) => {
    setSoLuong(event.target.value);
  };

  const navigate = useNavigate();
  const [description, setDescription] = useState(() =>
    EditorState.createEmpty()
  );
  const [candidateRequired, setCandidateRequired] = useState(() =>
    EditorState.createEmpty()
  );
  const [benefit, setBenefit] = useState(() => EditorState.createEmpty());

  const getTextArrayFromRich = function (rawdata) {
    if (rawdata.blocks.length > 0) {
      return rawdata.blocks.map((item) => item.text);
    }
  };

  return (
    <Box
      maxWidth={1000}
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
      <Box
        sx={{
          p: 2,
          borderBottom: "1px solid rgba(0,0,0,0.1)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#fff",
        }}
      >
        <EditIcon />
        <Typography variant="h5" fontWeight={550} sx={{ ml: 1 }}>
          Đăng tin tuyển dụng mới
        </Typography>
      </Box>
      <form>
        <Grid
          container
          item
          xs={12}
          sx={{ p: 2, rowGap: 1, columnGap: 2, background: "#fff", mb: 3 }}
        >
          <Box>
            <Typography
              sx={{ mt: 10 }}
              variant="p"
              fontWeight={700}
              fontSize={22}
            >
              Tiêu đề công việc
            </Typography>
            <TextField
              variant="outlined"
              fullWidth
              margin="normal"
              sx={{ marginBottom: "1px", mt: 1 }}
              placeholder="Fresher JAVA và .NET"
            />

            <Box marginTop={3}>
              <Grid container spacing={2}>
                <Grid item xs={4} md={4}>
                  <Box>
                    <Typography variant="p" fontWeight={500} fontSize={20}>
                      Kiểu thời gian làm việc
                    </Typography>
                  </Box>

                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={Loaihinh}
                    sx={{ width: 300 }}
                    renderInput={(params) => (
                      <TextField
                        sx={{ mt: 2 }}
                        {...params}
                        label="Chọn thể loại công việc"
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={4} md={4}>
                  <Typography variant="p" fontWeight={500} fontSize={20}>
                    Mảng công việc
                  </Typography>
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={nganhnghe}
                    sx={{ width: 300 }}
                    renderInput={(params) => (
                      <TextField
                        sx={{ mt: 2 }}
                        {...params}
                        label="Chọn mảng "
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={4} md={4}>
                  <Typography variant="p" fontWeight={500} fontSize={20}>
                    Chọn địa điểm làm việc
                  </Typography>
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={diadiem}
                    sx={{ width: 300 }}
                    renderInput={(params) => (
                      <TextField
                        sx={{ mt: 2 }}
                        {...params}
                        label="Chọn địa điểm"
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={4} md={4}>
                  <Typography variant="p" fontWeight={500} fontSize={20}>
                    Số Lượng Cần Tuyển
                  </Typography>
                  <TextField
                    type="number"
                    sx={{ mt: 2, width: 300 }}
                    label="Số Lượng"
                  />
                </Grid>
                <Grid item xs={4} md={4}>
                  <Typography variant="p" fontWeight={500} fontSize={20}>
                    Kinh Nghiệm Làm Việc
                  </Typography>
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={kinhnghiem}
                    sx={{ width: 300 }}
                    renderInput={(params) => (
                      <TextField
                        sx={{ mt: 2 }}
                        {...params}
                        label="Kinh nghiệm"
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={4} md={4}>
                  <Typography variant="p" fontWeight={500} fontSize={20}>
                    Chọn chức vụ
                  </Typography>
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={ChucVu}
                    sx={{ width: 300 }}
                    renderInput={(params) => (
                      <TextField
                        sx={{ mt: 2 }}
                        {...params}
                        label="Chọn chức vụ"
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={4} md={4}>
                  <Typography variant="p" fontWeight={500} fontSize={20}>
                    Giới Tính
                  </Typography>
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={gender}
                    sx={{ width: 300, mt: 1 }}
                    renderInput={(params) => (
                      <TextField {...params} label="Chọn giới tính" />
                    )}
                  />
                </Grid>
                <Grid item xs={4} md={4}>
                  <Typography variant="p" fontWeight={500} fontSize={20}>
                    Chọn loại tiền lương
                  </Typography>
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={currency}
                    value={Currency}
                    onChange={handleCurrencyChange}
                    sx={{ width: 300, mt: 1 }}
                    renderInput={(params) => (
                      <TextField {...params} label="Chọn loại tiền lương" />
                    )}
                  />
                </Grid>
                <Grid item xs={4} md={4}>
                  <Typography variant="p" fontWeight={500} fontSize={20}>
                    Kiểu Lương
                  </Typography>
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={kieuluong}
                    sx={{ width: 300, mt: 1 }}
                    value={kieuLuong}
                    onChange={handleKieuLuongChange}
                    renderInput={(params) => (
                      <TextField {...params} label="Chọn Kiểu Lương" />
                    )}
                  />
                </Grid>
                {kieuLuong === "Trong Khoảng" && (
                  <>
                    <Grid item xs={4} md={4}>
                      <Typography variant="p" fontWeight={500} fontSize={20}>
                        Từ
                      </Typography>
                      <TextField
                        fullWidth
                        sx={{ mt: 1 }}
                        type="number"
                        value={soLuong}
                        onChange={handleSoLuongChange}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              {Currency}
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>
                    <Grid item xs={4} md={4}>
                      <Typography variant="p" fontWeight={500} fontSize={20}>
                        Đến
                      </Typography>
                      <TextField
                        fullWidth
                        sx={{ mt: 1 }}
                        type="number"
                        value={soLuong}
                        onChange={handleSoLuongChange}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              {Currency}
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>
                  </>
                )}
                {kieuLuong === "Cố Định" && (
                  <Grid item xs={4} md={4}>
                    <Typography variant="p" fontWeight={500} fontSize={20}>
                      Lương
                    </Typography>
                    <TextField
                      fullWidth
                      sx={{ mt: 1 }}
                      type="number"
                      value={soLuong}
                      onChange={handleSoLuongChange}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            {Currency}
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                )}
                <Grid item xs={12}>
                  <Typography variant="p" fontWeight={500} fontSize={20}>
                    Khu vực làm việc{" "}
                    <Typography
                      variant="span"
                      sx={{ color: "rgba(0,0,0,0.6)" }}
                    >
                      (Địa chỉ cụ thể)
                    </Typography>
                  </Typography>
                  <OutlinedInput
                    fullWidth
                    sx={{ mt: 1 }}
                    placeholder="102/38A, Đường 3/2, Phường An khánh, Ninh Kiều, Cần Thơ"
                  />
                </Grid>
              </Grid>
              <Box sx={{ mt: 2 }}>
                <Typography variant="p" fontWeight={500} fontSize={20}>
                  Ngày hết hạn
                </Typography>
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
              </Box>
            </Box>
          </Box>
        </Grid>
        {/* <Box
          sx={{
            p: 2,
            borderBottom: "1px solid rgba(0,0,0,0.1)",
            display: "flex",
            alignItems: "center",
            background: "#fff",
          }}
        >
          <InfoOutlinedIcon fontSize="small" />
          <Typography variant="p" fontWeight={500} sx={{ ml: 1 }}>
            Thông tin chi tiết
          </Typography>
        </Box> */}

        <Grid
          container
          sx={{ p: 2, rowGap: 1, columnGap: 2, background: "#fff", mb: 2 }}
        >
          <Grid item xs={12}>
            <Typography variant="p" fontWeight={500} fontSize={20}>
              Mô tả công việc
            </Typography>
            <RichText
              editorState={description}
              setEditorState={setDescription}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="p" fontWeight={500} fontSize={20}>
              Yêu cầu ứng viên
            </Typography>
            <RichText
              editorState={candidateRequired}
              setEditorState={setCandidateRequired}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="p" fontWeight={500} fontSize={20}>
              Quyền lợi
            </Typography>
            <RichText editorState={benefit} setEditorState={setBenefit} />
          </Grid>
        </Grid>

        {/* <Typography variant="p">Mô tả công việc</Typography>
        <JoditEditor
          sx={{
            height: "1000px !important ",
          }}
        />
        <Typography variant="p">Yêu Cầu</Typography>
        <JoditEditor
          sx={{
            height: "1000px !important ",
          }}
        />
        <Typography variant="p">Quyền Lợi</Typography>
        <JoditEditor
          sx={{
            height: "1000px !important ",
          }}
        /> */}
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

function EditJobPost() {
  return (
    <Box
      maxWidth={1000}
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
      <Box
        sx={{
          p: 2,
          borderBottom: "1px solid rgba(0,0,0,0.1)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#fff",
        }}
      >
        <EditIcon />
        <Typography variant="h5" fontWeight={550} sx={{ ml: 1 }}>
          Đăng tin tuyển dụng mới
        </Typography>
      </Box>
    </Box>
  );
}

const Loaihinh = [
  { label: "FullTime" },
  { label: "PartTime" },

  { label: "Training" },
  { label: "Remote" },
  { label: "Consultant" },
];

const ChucVu = [
  { label: "Giám Đốc" },
  { label: "Trưởng Phòng" },
  { label: "Nhân Viên" },
  { label: "Quản Lý" },
  { label: "Thực Tập" },
];

const nganhnghe = [
  { label: "Back-End" },
  { label: "Front-End" },
  { label: "Full Stack" },
  { label: "DevOps" },
  { label: "Cyber security specialist" },
  { label: "QA/QC Engineer" },
  { label: "Data scientist" },
  { label: "App developer" },
  { label: "Tester" },
];

const diadiem = [
  { label: "TP HCM" },
  { label: "Cần Thơ" },
  { label: "Bạc Liêu" },
  { label: "Quận Tân Bình" },
  { label: "Quận 1" },
  { label: "Quận 7" },
  { label: "Quận 3" },
  { label: "Quận Tân Phú" },
  { label: "Quận 12" },
  { label: "Quận 9" },
];
const kinhnghiem = [
  { label: "Không Yêu Cầu" },
  { label: "1 Năm" },
  { label: "Trên 1 năm" },
  { label: " 2 năm" },
  { label: "Trên 2 năm" },
  { label: "3 năm" },
  { label: "Trên 3 Năm" },
  { label: "4 năm" },
  { label: "Trên 4 năm" },
  { label: "5 năm" },
];
const gender = [{ label: "Nam" }, { label: "Nữ" }, { label: "Không Yêu Cầu" }];
const salaryType = [{ label: "USD" }, { label: "EURO" }, { label: "VND" }];

export default PostJob;
