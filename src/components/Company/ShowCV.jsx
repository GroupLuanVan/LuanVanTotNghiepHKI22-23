import React from "react";
import {
  Grid,
  Paper,
  Typography,
  Box,
  Tab,
  Tabs,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Autocomplete,
  TextField,
  Button,
  Input,
  CircularProgress,
  Container,
} from "@mui/material";
import axios from "axios";
import { useLocation } from "react-router-dom";
import useFetch from "../../hook/useFetch";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import env from "../../asset/env.json";
import { RichTextDisplay } from "../RichText";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import SearchIcon from "@mui/icons-material/Search";
import PropTypes from "prop-types";
import { date } from "yup";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function ALLRemuse({ setRemuse, onSuggestClick, handleAllClick }) {
  const [searchParams, setSearchParams] = useState({
    title: false,
    experience: false,
    activities: false,
    skills: false,
    education: false,
    keyword: "",
    address: "",
  });

  const [showSuggestion, setShowSuggestion] = useState(false);

  const handleShowSuggestion = () => {
    setShowSuggestion(true);
  };

  function handleCheck(e, item) {
    setSearchParams({
      ...searchParams,
      [item]: e.target.checked,
    });
  }
  const [isLoading, setIsLoading] = useState(false);

  const token = localStorage.getItem("token");
  const getALLRemuse = async () => {
    const res = await axios.get("http://localhost:5000/api/resume/all", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      searchParams,
    });
    setRemuse(res.data);
    console.log(res.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getALLRemuse();
  }, []);

  return (
    <>
      <Box
        sx={{
          //background: "linear-gradient(to left, #8cebc84a, transparent)",
          background:
            "transparent linear-gradient(6deg,#fff,#c4ffdd 100%,rgba(195,255,221,.702) 0) 0 0 no-repeat",
          //   mb: 0,
          p: 15,
          height: "290px",
          position: "relative",
          mt: 15,
        }}
      >
        <Box mt={1}>
          <Typography variant="h3" sx={{ color: "#00b14f", mb: "37px" }}>
            Khám phá Ứng Viên Tiềm Năng Cho Bạn
          </Typography>
          <Typography variant="h6" sx={{ color: "#00b14f" }}>
            Tra Cứu Thông Tin Ứng Viên
          </Typography>
        </Box>

        <Box>
          <Box
            display="flex"
            flexDirection={"column"}
            alignItems="center"
            justifyContent={"center"}
            margin="auto"
            padding={3}
            borderRadius={5}
            sx={{
              mt: "2rem",
              ml: "2rem",
            }}
          >
            <Box mr={5}>
              <Typography variant="h4" fontWeight="550" gutterBottom>
                Tìm kiếm Ứng Viên
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                zIndex: 1,
                flex: 1,
              }}
            >
              <Box sx={{ display: "flex", ml: 7 }}>
                <TextField
                  size="small"
                  sx={{
                    width: "700px",
                    backgroundColor: "white",
                    borderRadius: "100rem",
                    mr: 2,
                    border: "1px solid black",
                  }}
                  color="success"
                  label="Nhập tên công ty"
                />

                <Button
                  size="small"
                  sx={{
                    ml: 2,
                    borderRadius: "10rem",
                  }}
                  variant="contained"
                  color="success"
                >
                  Tìm Kiếm
                </Button>
              </Box>
              <Box sx={{ display: "flex", mt: 2 }}>
                <Button
                  onClick={() => {
                    getALLRemuse();
                    handleAllClick();
                  }}
                  sx={{
                    mr: 2,
                    width: "200px",
                    height: "50px",
                    fontWeight: "bold",
                    fontSize: "18px",
                    borderRadius: "10rem",
                    backgroundColor: isLoading ? "white" : "#fff",
                    color: isLoading ? "#0061b1" : "#000",
                    "&:hover": {
                      backgroundColor: isLoading ? "#00b14f" : "white",
                      color: isLoading ? "white" : "#00b14f",
                    },
                  }}
                  variant="contained"
                  disabled={isLoading}
                >
                  {isLoading ? "Đang tải..." : "Tất Cả"}
                </Button>

                <Button
                  onClick={() => {
                    getALLRemuse();
                    onSuggestClick();
                  }}
                  sx={{
                    backgroundColor: "#282828",
                    color: "#ffffff",
                    borderRadius: "10rem",
                    width: "200px",
                    fontWeight: "bold",
                    fontSize: "18px",
                    "&:hover": {
                      backgroundColor: "#ffffff",
                      color: "#282828",
                    },
                  }}
                  variant="contained"
                >
                  Gợi Ý
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ my: 6 }}>
        <Typography
          variant="h3"
          fontWeight="600"
          gutterBottom
          sx={{ display: "flex", justifyContent: "center", ml: 3, mt: 4 }}
        >
          Các Ứng Viên Tiềm Năng
        </Typography>
      </Box>
    </>
  );
}

function CandidateCard({ data, type }) {
  console.log(data);

  const commonStyle = {
    display: "flex",
    alignItems: "center",
    "& :nth-child(1)": {
      mr: 1,
    },
  };
  const navigate = useNavigate();
  return (
    <Grid
      container
      sx={{
        py: 2,
        alignItems: "center",
        justifyContent: "space-around",
        borderBottom: "1px dashed gray",
      }}
    >
      {/* thong tin chung */}
      <Grid
        item
        xs={4}
        sx={{
          borderRight: "1px solid gray",
        }}
      >
        {/*name  */}
        <Box display={"flex"} justifyContent={"center"}>
          {" "}
          <Typography
            variant="h4"
            color="initial"
            fontWeight={500}
            sx={{ mb: 1 }}
          >
            {data.name}
          </Typography>
        </Box>

        <Box>
          {" "}
          {/* title */}
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <WorkOutlineOutlinedIcon fontSize="small" sx={{ mr: 1 }} />
            <Typography variant="body1" color="initial">
              {data.title}
            </Typography>
          </Box>
          {/* address  */}
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <PlaceOutlinedIcon fontSize="small" sx={{ mr: 1 }} />
            <Typography variant="body1" color="initial">
              {data.fulladdress}
            </Typography>
          </Box>
          {/* email */}
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <EmailOutlinedIcon fontSize="small" sx={{ mr: 1 }} />
            <Typography variant="body1" color="initial">
              {data.email}
            </Typography>
          </Box>
          {/* phone */}
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <PhoneIphoneOutlinedIcon fontSize="small" sx={{ mr: 1 }} />
            <Typography variant="body1" color="initial">
              {data.phone}
            </Typography>
          </Box>
        </Box>
      </Grid>

      {/* Thong tin Rich text */}
      <Grid item container xs={5}>
        {/* kinh nghiem */}
        <Grid
          item
          xs={6}
          sx={{
            mb: 2,
          }}
        >
          <Typography variant="h5" color="initial" fontWeight={600}>
            Kinh nghiệm
          </Typography>
          <Box
            sx={{
              width: "100%",
              mt: 2,
            }}
          >
            <RichTextDisplay data={JSON.parse(data.experienceCv)} />
          </Box>
        </Grid>
        {/* Hoat dong */}
        <Grid
          item
          xs={6}
          sx={{
            mb: 2,
          }}
        >
          <Typography variant="h5" color="initial" fontWeight={600}>
            Hoạt động
          </Typography>
          <Box
            sx={{
              width: "100%",
              mt: 2,
            }}
          >
            <RichTextDisplay data={JSON.parse(data.activitiesCv)} />
          </Box>
        </Grid>
        {/* Ky nang */}
        <Grid
          item
          xs={6}
          sx={{
            mb: 2,
          }}
        >
          <Typography variant="h5" color="initial" fontWeight={600}>
            Kỹ năng
          </Typography>
          <Box
            sx={{
              width: "100%",
              mt: 2,
            }}
          >
            <RichTextDisplay data={JSON.parse(data.skillsCv)} />
          </Box>
        </Grid>
        {/* Hoc van */}
        <Grid item xs={6}>
          <Typography variant="h5" color="initial" fontWeight={600}>
            Học vấn
          </Typography>
          <Box
            sx={{
              width: "100%",
              mt: 2,
            }}
          >
            <RichTextDisplay data={JSON.parse(data.educationCv)} />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h5" color="initial" fontWeight={600}>
            Dự Án
          </Typography>
          <Box
            sx={{
              width: "100%",
              mt: 2,
            }}
          >
            {data.project}
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h5" color="initial" fontWeight={600}>
            Chứng Chỉ
          </Typography>
          <Box
            sx={{
              width: "100%",
              mt: 2,
            }}
          >
            {data.certifications}
          </Box>
        </Grid>
      </Grid>
      <Grid item xs={2}>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => navigate(`/viewcv/${data._id}`)}
        >
          Xem CV
        </Button>
        {/* {type === "ungtuyen" ? (
          <Button
            variant="outlined"
            sx={{ ml: 2 }}
            //onClick={() => navigate(`/hrhub/contacts?id=${data.contactID}`)}
            color="success"
          >
            Quản lý
          </Button>
        ) : (
          <Button
            variant="outlined"
            sx={{ ml: 2 }}
            onClick={() => navigate(`/hrhub/contacts/id=${data.contactID}`)}
            color="error"
          >
            Liên hệ
          </Button>
        )} */}
      </Grid>
    </Grid>
  );
}

function Result({ data, type }) {
  return (
    <>
      <Box
        sx={{
          background: "#fff",
          p: 2,
        }}
      >
        <Box
          sx={{
            borderBottom: "1px solid rgba(0,0,0,0.1)",
            display: "flex",
            alignItems: "center",
            pb: 2,
            mb: 2,
          }}
        >
          <SearchIcon />
          {type !== "ungtuyen" ? (
            <Typography variant="h6" fontWeight={550} sx={{ ml: 1 }}>
              Tìm thấy{" "}
              <Typography variant="span" color="success">
                {data.length}
              </Typography>{" "}
              ứng viên phù hợp
            </Typography>
          ) : (
            <Typography variant="h6" fontWeight={550} sx={{ ml: 1 }}>
              <Typography variant="span" color="success">
                {/* {data.length} */}
                100
              </Typography>{" "}
              Ứng viên ứng tuyển
            </Typography>
          )}
        </Box>
        {data &&
          data.map((item) => {
            return <CandidateCard data={item} type={type} />;
          })}
      </Box>
    </>
  );
}

function ResultSuggest({ data, type }) {
  return (
    <>
      <Box
        sx={{
          background: "#fff",
          p: 2,
        }}
      >
        <Box
          sx={{
            borderBottom: "1px solid rgba(0,0,0,0.1)",
            display: "flex",
            alignItems: "center",
            pb: 2,
            mb: 2,
          }}
        >
          <SearchIcon />
          {type !== "ungtuyen" ? (
            <Typography variant="h6" fontWeight={550} sx={{ ml: 1 }}>
              Tìm thấy{" "}
              <Typography variant="span" color="success">
                {/* {data.length} */}
                10
              </Typography>{" "}
              ứng viên phù hợp
            </Typography>
          ) : (
            <Typography variant="h6" fontWeight={550} sx={{ ml: 1 }}>
              <Typography variant="span" color="success">
                {/* {data.length} */}
                100
              </Typography>{" "}
              Ứng viên ứng tuyển
            </Typography>
          )}
        </Box>
        {data &&
          data.map((item) => {
            return <CandidateCard data={item} type={type} />;
          })}
      </Box>
    </>
  );
}

export const ShowCV = (user, env) => {
  const location = useLocation();
  const strArr = location.pathname.split("/");

  const jobPostId = strArr[strArr.length - 1];

  // const { data, setData, loading, error } = useFetch(`/jobpost/${jobPostId}`);

  //cv list
  const [recommendData, setRecommendData] = useState([]);
  const [Remuse, setRemuse] = useState([]);
  const [jobContacts, setJobContacts] = useState([]);

  //cv list
  const fetchJobContactsCvData = async () => {
    const jobContactsRes = await axios.get(
      `/rec/${user.user._id}/job/${jobPostId}/jobcontacts`
    );

    let contactResumes = jobContactsRes.data.map((item) => {
      let resumeData = item.resumeId;
      let rs = { ...resumeData, contactID: item._id };
      return rs;
    });

    setJobContacts(contactResumes);
  };

  const [tabValue, setTabValue] = useState(0);
  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const [showSuggestion, setShowSuggestion] = useState(false);

  const handleShowSuggestion = () => {
    setShowSuggestion(true);
  };

  const handleSuggestClick = () => {
    setTabValue(1);
  };

  const handleAllClick = () => {
    setTabValue(0); // quay lại tab chính
  };

  return (
    <>
      {/* <Box
        sx={{
          //background: "linear-gradient(to left, #8cebc84a, transparent)",
          background:
            "transparent linear-gradient(6deg,#fff,#c4ffdd 100%,rgba(195,255,221,.702) 0) 0 0 no-repeat",
          //   mb: 0,
          p: 15,
          height: "290px",
          position: "relative",
          mt: 20,
        }}
      >
        <Box mt={1}>
          <Typography variant="h3" sx={{ color: "#00b14f", mb: "37px" }}>
            Khám phá công việc của công ty nổi bật
          </Typography>
          <Typography variant="h6" sx={{ color: "#00b14f" }}>
            Tra cứu thông tin công ty và tìm kiếm nơi làm việc tốt nhất dành cho
            bạn
          </Typography>
        </Box>

        <Box>
          <Box
            display="flex"
            flexDirection={"column"}
            alignItems="center"
            justifyContent={"center"}
            margin="auto"
            padding={3}
            borderRadius={5}
            sx={{
              mt: "2rem",
              ml: "-2rem",
            }}
          >
            <Box mr={5}>
              <Typography variant="h4" fontWeight="550" gutterBottom>
                Tìm kiếm công việc phù hợp với bạn
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                zIndex: 1,
                flex: 1, // Thêm thuộc tính flex để chia đều chiều rộng của 2 button
              }}
            >
              <Button
                size="small"
                sx={{
                  ml: 2,
                  width: "150px",
                  borderRadius: "10rem",
                }}
                variant="contained"
                color="success"
              >
                Tất Cả
              </Button>
              <Button
                size="small"
                sx={{
                  ml: 2,
                  width: "150px",
                  borderRadius: "10rem",
                }}
                variant="contained"
                color="success"
              >
                Gợi Ý
              </Button>
              <TextField
                size="small"
                sx={{
                  width: "500px",
                  backgroundColor: "white",
                  borderRadius: "100rem",
                  mr: 10,
                  ml: 10,
                }}
                color="success"
                label="Nhập tên công ty"
              />
              <Button
                size="small"
                sx={{
                  ml: 2,
                  width: "150px",
                  borderRadius: "10rem",
                }}
                variant="contained"
                color="success"
              >
                Tìm Kiếm
              </Button>
            </Box>
          </Box>
        </Box>
      </Box> */}

      {/* <Container maxWidth>
        <TabPanel
          value={tabValue}
          index={0}
          sx={{
            background: "#f1f2f7",
          }}
        >
          <ALLRemuse setRemuse={setRemuse} />
          <Result data={Remuse} />
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          <ResultSuggest data={Remuse} />
        </TabPanel>
      </Container> */}

      <Container maxWidth>
        <TabPanel value={tabValue} index={0}>
          <ALLRemuse
            setRemuse={setRemuse}
            onSuggestClick={handleSuggestClick}
            handleAllClick={handleAllClick}
          />
          <Result data={Remuse} />
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          <ALLRemuse setRemuse={setRemuse} handleAllClick={handleAllClick} />
          <ResultSuggest data={Remuse} />
        </TabPanel>
      </Container>
    </>
  );
};
