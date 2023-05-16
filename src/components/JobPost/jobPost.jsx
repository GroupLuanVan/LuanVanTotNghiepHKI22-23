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
import { ShowCV } from "../Company/ShowCV";
import { CvForYou } from "./CvForYou";
import MyCompany from "../Profile/MyCompany";
import "../../App.css";

import axios from "axios";
import { toast } from "react-toastify";
const JobPost = () => {
  const role = useSelector((state) => state.user.role);
  const user = useSelector((state) => state.user.user);

  const [jobcategories, setJobcategories] = useState([]);
  const [positions, setPositions] = useState([]);
  const [addresses, setAddresses] = useState([]);

  const getWorkExpList = () => {
    return [
      { id: 1, title: "Không yêu cầu" },
      { id: 2, title: "Dưới 1 năm" },
      { id: 3, title: "1 năm" },
      { id: 4, title: "2 năm" },
      { id: 5, title: "3 năm" },
      { id: 6, title: "4 năm" },
      { id: 7, title: "5 năm" },
      { id: 8, title: "Trên 5 năm" },
    ];
  };

  const gender = () => {
    return [
      { id: 1, title: "Nam" },
      { id: 2, title: "Nữ" },
      { id: 3, title: "Không yêu cầu" },
    ];
  };

  const salarytype = () => {
    return [
      { id: 1, title: "USD" },
      { id: 2, title: "VND" },
    ];
  };

  const kieuluong = () => {
    return [
      { id: 1, title: "Thỏa thuận" },
      { id: 2, title: "Trong khoảng" },
    ];
  };

  const workType = () => {
    return [
      { id: 1, title: "Toàn thời gian" },
      { id: 2, title: "Bán thời gian" },
      { id: 3, title: "Làm từ xa" },
    ];
  };

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/api/jobcategory/")
  //     .then((res) => {
  //       setJobcategories(res.data);
  //     })
  //     .catch((err) => console.error(err));
  // }, []);

  // const handleCategoryChange = (event, value) => {
  //   setData({
  //     ...data,
  //     categoryId: value ? value._id : "",
  //   });
  // };

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
      positionId: value ? value._id : "",
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
      addressId: value ? value._id : "",
    });
  };

  const navigate = useNavigate();
  // const [description, setDescription] = useState("");
  // const [required, setRequired] = useState();

  // const [benefit, setBenefit] = useState();

  const [description, setDescription] = useState(() =>
    EditorState.createEmpty()
  );
  const [required, setRequired] = useState(() => EditorState.createEmpty());
  const [benefit, setBenefit] = useState(() => EditorState.createEmpty());

  const [data, setData] = useState({
    title: "",
    addressId: "",
    //categoryId: "",

    amount: 0,
    workType: "",
    endDate: "",
    gender: "",
    positionId: "",
    workExp: "",
    currency: "",
    salaryType: "",

    salaryMax: 0,
    salaryMin: 0,
    fullAddress: "",
    // description: "",
    // required: "",
    // benefit: "",
    companyId: "",
    viewCount: "",

    description: JSON.stringify(convertToRaw(description.getCurrentContent())),
    required: JSON.stringify(convertToRaw(required.getCurrentContent())),
    benefit: JSON.stringify(convertToRaw(benefit.getCurrentContent())),
  });

  // useEffect(() => {
  //   setData({
  //     ...data,
  //     description: description,
  //     required: required,
  //     benefit: benefit,
  //   });
  // }, [description, required, benefit]);

  useEffect(() => {
    setData({
      ...data,
      description: JSON.stringify(
        convertToRaw(description.getCurrentContent())
      ),
      required: JSON.stringify(convertToRaw(required.getCurrentContent())),
      benefit: JSON.stringify(convertToRaw(benefit.getCurrentContent())),
    });
  }, [
    description.getCurrentContent(),
    required.getCurrentContent(),
    benefit.getCurrentContent(),
  ]);

  const getTextArrayFromRich = function (rawdata) {
    if (rawdata.blocks.length > 0) {
      return rawdata.blocks.map((item) => item.text);
    }
  };

  const [salaryType, setSalaryType] = useState(false);
  const [currency, setCurrency] = useState();

  // const sendPostData = async function () {
  //   const token = localStorage.getItem("token"); // Lấy token từ local storage
  //   console.log({ ...data, description, required, benefit });
  //   const res = await axios.post(
  //     "http://localhost:5000/api/jobpost",
  //     {
  //       ...data,
  //       description,
  //       required,
  //       benefit,
  //     },
  //     {
  //       headers: {
  //         Authorization: `Bearer ${token}`, // Thêm token vào header Authorization
  //       },
  //     }
  //   );
  //   if (res.data && res.data.status && res.data.status !== 200) {
  //     console.log(res);
  //     toast.warning("Tạo job post thất bại");
  //   } else {
  //     toast.success("Tạo job post thành công");
  //   }
  // };

  const sendPostData = async function () {
    const token = localStorage.getItem("token");
    console.log(JSON.stringify(convertToRaw(benefit.getCurrentContent())));
    let descriptionText = getTextArrayFromRich(
      convertToRaw(description.getCurrentContent())
    ).join(" ");
    let requiredText = getTextArrayFromRich(
      convertToRaw(required.getCurrentContent())
    ).join(" ");
    console.log({ ...data, descriptionText, requiredText });
    try {
      const res = await axios.post(
        "http://localhost:5000/api/jobpost",
        {
          ...data,
          descriptionText,
          requiredText,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Thêm token vào header Authorization
          },
        }
      );
      // if (res.data && res.data.status && res.data.status !== 200)
      if (res && res.status && res.status !== 200) {
        console.log(res);
        toast.warning("Tạo job post thất bại");
      } else {
        toast.success("Tạo job post thành công");
      }
    } catch (e) {
      console.log(e);
    }
    // const res = await axios.post(
    //   "http://localhost:5000/api/jobpost",
    //   {
    //     ...data,
    //     descriptionText,
    //     requiredText,
    //   },
    //   {
    //     headers: {
    //       Authorization: `Bearer ${token}`, // Thêm token vào header Authorization
    //     },
    //   }
    // );
  };

  console.log(data);

  return (
    <Box
      maxWidth={1200}
      margin="auto"
      marginTop={25}
      marginBottom={8}
      marginLeft={41}
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
              <Grid container spacing={7}>
                <Grid item xs={4} md={4}>
                  <Box>
                    <Typography variant="p" fontWeight={500} fontSize={20}>
                      Kiểu thời gian làm việc
                    </Typography>
                  </Box>

                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    sx={{ mt: 2, width: 350 }}
                    options={workType()}
                    getOptionLabel={(option) => option.title}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        placeholder="Kiểu thời gian làm việc"
                      />
                    )}
                    onChange={(event, value) => {
                      setData({
                        ...data,
                        workType: value ? value.title : null,
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
                    sx={{ mt: 2, width: 350 }}
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
                    sx={{ mt: 2, width: 350 }}
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
                  <Box mt={-3}>
                    {" "}
                    <Typography variant="p" fontWeight={500} fontSize={20}>
                      Số Lượng Cần Tuyển
                    </Typography>
                    <TextField
                      // value={data.amount}
                      type="number"
                      sx={{ mt: 2, width: 350 }}
                      label="Số Lượng"
                      onChange={(e) => {
                        setData({
                          ...data,
                          amount: e.target.value,
                        });
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={4} md={4}>
                  <Box mt={-3}>
                    <Typography variant="p" fontWeight={500} fontSize={20}>
                      Kinh Nghiệm Làm Việc
                    </Typography>
                    <Autocomplete
                      disablePortal
                      id="combo-box-demo"
                      sx={{ mt: 2, width: 350 }}
                      options={getWorkExpList()}
                      getOptionLabel={(option) => option.title}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          placeholder="Kinh nghiệm làm việc"
                        />
                      )}
                      onChange={(event, value) => {
                        setData({
                          ...data,
                          workExp: value ? value.title : null,
                        });
                      }}
                    />
                  </Box>
                </Grid>

                {/* <Grid item xs={4} md={4}>
                  <Box mt={-3}>
                    <Typography variant="p" fontWeight={500} fontSize={20}>
                      Loại Công Việc
                    </Typography>
                    <Autocomplete
                      freeSolo
                      sx={{ mt: 2, width: 350 }}
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
                  </Box>
                </Grid> */}
                <Grid item xs={4} md={4}>
                  <Box mt={-3}>
                    {" "}
                    <Typography variant="p" fontWeight={500} fontSize={20}>
                      Giới Tính
                    </Typography>
                    <Autocomplete
                      disablePortal
                      id="combo-box-demo"
                      sx={{ mt: 2, width: 350 }}
                      options={gender()}
                      getOptionLabel={(option) => option.title}
                      renderInput={(params) => (
                        <TextField {...params} placeholder="Chọn giới tính" />
                      )}
                      onChange={(event, value) => {
                        setData({
                          ...data,
                          gender: value ? value.title : null,
                        });
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={4} md={4}>
                  <Box mt={-3}>
                    {" "}
                    <Typography variant="p" fontWeight={500} fontSize={20}>
                      Chọn loại tiền lương
                    </Typography>
                    <Autocomplete
                      disablePortal
                      id="combo-box-demo"
                      sx={{ mt: 2, width: 350 }}
                      options={salarytype()}
                      getOptionLabel={(option) => option.title}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          placeholder="chọn loại tiền lương"
                        />
                      )}
                      onChange={(event, value) => {
                        setData({
                          ...data,
                          currency: value ? value.title : null,
                        });
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={4} md={4}>
                  <Box mt={-3}>
                    {" "}
                    <Typography variant="p" fontWeight={500} fontSize={20}>
                      Kiểu Lương
                    </Typography>
                    <Autocomplete
                      disablePortal
                      id="combo-box-demo"
                      sx={{ mt: 2, width: 350 }}
                      options={kieuluong()}
                      getOptionLabel={(option) => option.title}
                      renderInput={(params) => (
                        <TextField {...params} placeholder="Chọn Kiểu Lương" />
                      )}
                      onChange={(event, value) => {
                        setData({
                          ...data,
                          salaryType: value ? value.title : null,
                        });
                      }}
                    />
                  </Box>
                </Grid>
                {/* Lương theo khoảng */}
                {data.salaryType === "Trong khoảng" && (
                  <>
                    <Grid item xs={4}>
                      <Typography variant="p">Từ</Typography>
                      <OutlinedInput
                        fullWidth
                        sx={{ mt: 1 }}
                        type="number"
                        endAdornment={
                          <InputAdornment position="end">
                            {data.currency}
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
                            {data.currency}
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

                <Grid item xs={12}>
                  <Box mt={-3}>
                    {" "}
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
                      onChange={(event) =>
                        setData({
                          ...data,
                          fullAddress: event.target.value,
                        })
                      }
                    />
                  </Box>
                </Grid>
              </Grid>
              <Box sx={{ mt: 3 }}>
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
            <Box mt={-3}>
              {" "}
              <Typography variant="p" fontWeight={500} fontSize={20}>
                Mô tả công việc
              </Typography>
              {/* <TextField
                sx={{
                  mt: 2,
                }}
                multiline
                rows={4}
                variant="outlined"
                fullWidth
                placeholder="Nhập mô tả công việc"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              /> */}
              <RichText
                editorState={description}
                setEditorState={setDescription}
              />
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box mt={2}>
              <Typography variant="p" fontWeight={500} fontSize={20}>
                Yêu cầu ứng viên
              </Typography>
              {/* <TextField
                sx={{
                  mt: 2,
                }}
                multiline
                rows={4}
                variant="outlined"
                fullWidth
                placeholder="Nhập mô tả công việc"
                value={required}
                onChange={(e) => setRequired(e.target.value)}
              /> */}

              <RichText editorState={required} setEditorState={setRequired} />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box mt={2}>
              <Typography variant="p" fontWeight={500} fontSize={20}>
                Quyền lợi
              </Typography>
              {/* <TextField
                sx={{ mt: 2 }}
                multiline
                rows={4}
                variant="outlined"
                fullWidth
                placeholder="Nhập mô tả công việc"
                value={benefit}
                onChange={(e) => setBenefit(e.target.value)}
              /> */}
              <RichText editorState={benefit} setEditorState={setBenefit} />
            </Box>
          </Grid>
        </Grid>

        {/* <FormGroup sx={{ marginBottom: "16px" }}>
          <FormControlLabel
            control={<Checkbox />}
            label="I agree to the terms and conditions"
          />
        </FormGroup> */}

        <Button
          onClick={sendPostData}
          variant="contained"
          fullWidth
          sx={{ backgroundColor: "#00a7ac", color: "#fff" }}
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
        {/* <Grid item xs={2}></Grid> */}
        <Grid item xs={12}>
          <Routes>
            <Route path="/" element={<JobPost user={user} />}></Route>
            <Route
              path="/editjobpost/:id"
              element={<EditJobPost user={user} />}
            ></Route>
            <Route path="/company" element={<Company />} />
            <Route path="/Mycompany" element={<MyCompany />} />
            <Route path="/charts" element={<Charts user={user} />} />
            <Route path="/jobdetail" element={<JobDetail />} />
            {/* <Route
              path="/searchcandidate/:id"
              element={<SearchCandidate user={user} />}
            /> */}
            <Route
              path="/contacts/:id"
              element={<Contact user={user} />}
            ></Route>
            <Route
              path="/CvForYou/:id"
              element={<CvForYou user={user} />}
            ></Route>
            <Route
              path="/SearchCandi"
              element={<ShowCV user={user} env={env} />}
            ></Route>
          </Routes>
        </Grid>
        {/* <Grid item xs={2}></Grid> */}
      </Grid>
    </>
  );
}

/// Cấp bậc thay thế bằng vị trí làm việc, nhập tay thẳng "rank thành póition" ( ví dụ: fresher, Intern, junior, senior,  )
/// Lấy từ csdl từ giao diện
/// jobCate: back-end, front-end,.... lấy từ database

/// so sánh loại công việc vị trí và tiêu đề
