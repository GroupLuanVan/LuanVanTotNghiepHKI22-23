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
  TextareaAutosize,
} from "@mui/material";
import {
  useNavigate,
  BrowserRouter,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import env from "../../asset/env.json";

import {
  getCatIdFromName,
  getCatNameList,
  getSalaryTypeTitleList,
  getSalaryTypeIdFromTitle,
  getRankTitleList,
  getRankIdFromTitle,
  getWorkTypeTitleList,
  getWorkTypeIdFromTitle,
  getWorkExpTitleList,
  getWorkExpIdFromTitle,
  getAddressTitleList,
  getAddressIdFromTitle,
  getCatNameFromId,
  getAddressTitleFromId,
  getWorkTypeTitleFromId,
  getWorkExpTitleFromId,
  getSalaryTypeTitleFromId,
  getRankTitleFromId,
} from "../../other/SelectDataUtils";
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
import Company from "../Company/Company";
import Charts from "../Company/Charts";
import JobDetail from "../Job/JobDetail";
import Contact from "../Company/Contact";
import SearchCandidate from "../Company/SearchCandidate";
import "../../App.css";

import axios from "axios";
import { toast } from "react-toastify";
const JobPost = () => {
  const role = useSelector((state) => state.user.role);
  const user = useSelector((state) => state.user.user);

  const [jobcategories, setJobcategories] = useState([]);
  const [positions, setPositions] = useState([]);
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/jobcategory/")
      .then((res) => {
        setJobcategories(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleCategoryChange = (event, value) => {
    setData({
      ...data,
      categoryId: value ? value._id : "",
    });
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/position")
      .then((res) => {
        setPositions(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const handlePositionChange = (event, value) => {
    setData({
      ...data,
      rankId: value ? value._id : "",
    });
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/address")
      .then((res) => {
        setAddresses(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleAddressesChange = (event, value) => {
    setData({
      ...data,
      rankId: value ? value._id : "",
    });
  };

  const navigate = useNavigate();
  const [description, setDescription] = useState("");
  const [candidateRequired, setCandidateRequired] = useState();

  const [benefit, setBenefit] = useState();
  const [data, setData] = useState({
    title: "",
    categoryId: "",
    locationId: "",
    amount: 0,
    workTypeId: "",
    endDate: "",
    gender: "",
    rankId: "",
    workExpId: "",
    currency: "",
    salaryTypeId: "",

    salaryMax: 0,
    salaryMin: 0,
    fullAddress: "",
    description: "",
    candidateRequired: "",
    benefit: "",
  });
  useEffect(() => {
    setData({
      ...data,
      description: description,
      candidateRequired: candidateRequired,
      benefit: benefit,
    });
  }, [description, candidateRequired, benefit]);

  const [salaryType, setSalaryType] = useState(false);
  const [currency, setCurrency] = useState();

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
              // value={data.title}
              variant="outlined"
              fullWidth
              margin="normal"
              sx={{ marginBottom: "1px", mt: 1 }}
              placeholder="Fresher JAVA và .NET"
              onBlur={(e) => {
                setData({
                  ...data,
                  title: e.target.value,
                });
              }}
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
                    // value={data.workTypeId}
                    disablePortal
                    id="combo-box-demo"
                    sx={{ width: 300 }}
                    options={getWorkTypeTitleList()}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        placeholder="-- Chọn hình thức làm việc --"
                      />
                    )}
                    onInputChange={(e, value) => {
                      setData({
                        ...data,
                        workTypeId: getWorkTypeIdFromTitle(value),
                      });
                    }}
                    onBlur={(e) => {
                      setData({
                        ...data,
                        workTypeId: getWorkTypeIdFromTitle(e.target.value),
                      });
                    }}
                  />
                </Grid>

                <Grid item xs={4} md={4}>
                  <Typography variant="p" fontWeight={500} fontSize={20}>
                    Vị Trí Làm Việc
                  </Typography>
                  <Autocomplete
                    freeSolo
                    sx={{ mt: 0 }}
                    options={positions}
                    getOptionLabel={(position) => position.title}
                    onChange={handlePositionChange}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        placeholder="Chọn vị trí công việc cần tuyển"
                      />
                    )}
                  />
                </Grid>

                <Grid item xs={4} md={4}>
                  <Typography variant="p" fontWeight={500} fontSize={20}>
                    Địa điểm làm việc
                  </Typography>
                  <Autocomplete
                    freeSolo
                    sx={{ mt: 0 }}
                    options={addresses}
                    getOptionLabel={(address) => address.title}
                    onChange={handleAddressesChange}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        placeholder="Chọn địa điểm làm việc"
                      />
                    )}
                  />
                </Grid>

                <Grid item xs={4} md={4}>
                  <Typography variant="p" fontWeight={500} fontSize={20}>
                    Số Lượng Cần Tuyển
                  </Typography>
                  <TextField
                    // value={data.amount}
                    type="number"
                    sx={{ mt: 0, width: 300 }}
                    label="Số Lượng"
                    onChange={(e) => {
                      setData({
                        ...data,
                        amount: e.target.value,
                      });
                    }}
                  />
                </Grid>
                <Grid item xs={4} md={4}>
                  <Typography variant="p" fontWeight={500} fontSize={20}>
                    Kinh Nghiệm Làm Việc
                  </Typography>
                  <Autocomplete
                    // value={data.workExpId}
                    disablePortal
                    id="combo-box-demo"
                    sx={{ width: 300 }}
                    options={getWorkExpTitleList()}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        placeholder="Kinh nghiệm làm việc"
                      />
                    )}
                    onInputChange={(e, value) => {
                      setData({
                        ...data,
                        workExpId: getWorkExpIdFromTitle(value),
                      });
                    }}
                    onBlur={(e) => {
                      setData({
                        ...data,
                        workExpId: getWorkExpIdFromTitle(e.target.value),
                      });
                    }}
                  />
                </Grid>
                <Grid item xs={4} md={4}>
                  <Typography variant="p" fontWeight={500} fontSize={20}>
                    Loại Công Việc
                  </Typography>
                  <Autocomplete
                    freeSolo
                    sx={{ mt: 0 }}
                    options={jobcategories}
                    getOptionLabel={(jobcategory) => jobcategory.title}
                    onChange={handleCategoryChange}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        placeholder="Chọn vị trí công việc cần tuyển"
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={4} md={4}>
                  <Typography variant="p" fontWeight={500} fontSize={20}>
                    Giới Tính
                  </Typography>
                  <Autocomplete
                    // value={data.gender}
                    disablePortal
                    id="combo-box-demo"
                    sx={{ width: 300, mt: 1 }}
                    options={env.REACT_APP_SEXS.split(", ")}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        placeholder="-- Chọn giới tính --"
                      />
                    )}
                    onInputChange={(e, value) => {
                      setData({
                        ...data,
                        gender: value,
                      });
                    }}
                  />
                </Grid>
                <Grid item xs={4} md={4}>
                  <Typography variant="p" fontWeight={500} fontSize={20}>
                    Chọn loại tiền lương
                  </Typography>
                  <Autocomplete
                    // value={data.currency}
                    disablePortal
                    id="combo-box-demo"
                    sx={{ width: 300, mt: 1.1 }}
                    options={env.REACT_APP_CURRENCY.split(", ")}
                    onInputChange={(e, value) => {
                      setCurrency(value);
                      setData({
                        ...data,
                        currency: value,
                      });
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        placeholder="-- Chọn loại tiền lương --"
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={4} md={4}>
                  <Typography variant="p" fontWeight={500} fontSize={20}>
                    Kiểu Lương
                  </Typography>
                  <Autocomplete
                    // value={getSalaryTypeTitleFromId(data.salaryTypeId)}
                    disablePortal
                    id="combo-box-demo"
                    sx={{ width: 300, mt: 1 }}
                    options={getSalaryTypeTitleList()}
                    onInputChange={(e, value) => {
                      setSalaryType(value);
                      setData({
                        ...data,
                        salaryTypeId: getSalaryTypeIdFromTitle(value),
                      });
                    }}
                    renderInput={(params) => (
                      <TextField {...params} placeholder="-- Chọn kiểu lương" />
                    )}
                  />
                </Grid>
                {/* Lương theo khoảng */}
                {salaryType === "Trong khoảng" && (
                  <>
                    <Grid item xs={4}>
                      <Typography variant="p">Từ</Typography>
                      <OutlinedInput
                        fullWidth
                        sx={{ mt: 1 }}
                        type="number"
                        endAdornment={
                          <InputAdornment position="end">
                            {currency}
                          </InputAdornment>
                        }
                        onBlur={(e) => {
                          setData({
                            ...data,
                            salaryMin: e.target.value,
                          });
                        }}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="p">Đến</Typography>
                      <OutlinedInput
                        fullWidth
                        sx={{ mt: 1 }}
                        type="number"
                        endAdornment={
                          <InputAdornment position="end">
                            {currency}
                          </InputAdornment>
                        }
                        onBlur={(e) => {
                          setData({
                            ...data,
                            salaryMax: e.target.value,
                          });
                        }}
                      />
                    </Grid>
                  </>
                )}
                {/* Lương cố định */}
                {salaryType === "Cố định" && (
                  <>
                    <Grid item xs={3}>
                      <Typography variant="p">Lương</Typography>
                      <OutlinedInput
                        fullWidth
                        size="small"
                        sx={{ mt: 1 }}
                        type="number"
                        endAdornment={
                          <InputAdornment position="end">
                            {currency}
                          </InputAdornment>
                        }
                        onBlur={(e) => {
                          setData({
                            ...data,
                            salaryMax: e.target.value,
                            salaryMin: e.target.value,
                          });
                        }}
                      />
                    </Grid>
                  </>
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
                  <OutlinedInput
                    // value={data.endDate}
                    fullWidth
                    size="small"
                    sx={{ mt: 1 }}
                    type="date"
                    placeholder=""
                    onChange={(e) => {
                      setData({
                        ...data,
                        endDate: e.target.value,
                      });
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid
          container
          sx={{ p: 2, rowGap: 1, columnGap: 2, background: "#fff", mb: 2 }}
        >
          <Grid item xs={12}>
            <Typography variant="p" fontWeight={500} fontSize={20}>
              Mô tả công việc
            </Typography>
            <TextField
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              placeholder="Nhập mô tả công việc"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="p" fontWeight={500} fontSize={20}>
              Yêu cầu ứng viên
            </Typography>
            <TextField
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              placeholder="Nhập mô tả công việc"
              value={candidateRequired}
              onChange={(e) => setCandidateRequired(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="p" fontWeight={500} fontSize={20}>
              Quyền lợi
            </Typography>
            <TextField
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              placeholder="Nhập mô tả công việc"
              value={benefit}
              onChange={(e) => setBenefit(e.target.value)}
            />
          </Grid>
        </Grid>

        <FormGroup sx={{ marginBottom: "16px" }}>
          <FormControlLabel
            control={<Checkbox />}
            label="I agree to the terms and conditions"
          />
        </FormGroup>

        <Button
          //onClick={sendPostData}
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

//export default PostJob;

export default function PostJob() {
  const navigate = useNavigate();
  function navigateTo(location) {
    navigate(location);
  }
  const user = useSelector((state) => state.user);

  return (
    <>
      <Grid container sx={{ background: "#f1f2f6" }}>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <Routes>
            <Route path="/" element={<JobPost user={user} />}></Route>
            <Route
              path="/editjobpost/:id"
              element={<EditJobPost user={user} />}
            ></Route>
            <Route path="/company" element={<Company />} />
            <Route path="/charts" element={<Charts user={user} />} />
            <Route path="/jobdetail" element={<JobDetail />} />
            <Route
              path="/searchcandidate/:id"
              element={<SearchCandidate user={user} />}
            />
            <Route path="/contacts" element={<Contact user={user} />}></Route>
          </Routes>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </>
  );
}

/// Cấp bậc thay thế bằng vị trí làm việc, nhập tay thẳng "rank thành póition" ( ví dụ: fresher, Intern, junior, senior,  )
/// Lấy từ csdl từ giao diện
/// jobCate: back-end, front-end,.... lấy từ database

/// so sánh loại công việc vị trí và tiêu đề
