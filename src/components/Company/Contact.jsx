import {
  Grid,
  Paper,
  Table,
  TableContainer,
  Typography,
  Box,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import BarChartIcon from "@mui/icons-material/BarChart";
import ArticleIcon from "@mui/icons-material/Article";
import useFetch from "../../hook/useFetch";
import Loading from "../Loading";
import { useSelector } from "react-redux";
import { getValFromTitle, getTitleFromVal } from "../../other/SelectDataUtils";
import { contactProcesses } from "../../DataClient/selectData";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";

import axios from "axios";
export default function Contact(user) {
  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [data, setData] = useState([]);
  const options = [
    { value: 1, label: "Xem xét" },
    { value: 2, label: "Đồng ý" },
    { value: 3, label: "Từ chối" },
  ];

  const [selectedOption, setSelectedOption] = useState(options[0]);

  // function handleStatusChange(e, cvID) {
  //   console.log(e.target.value, cvID);
  // }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/contact/candidatelist/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);
  console.log(data);

  function handleStatusChange(e, cvID) {
    const status = e.target.value;
    console.log(status, cvID);
    async function contactData() {
      try {
        const response = await axios.post(
          `http://localhost:5000/api/contact/approval/${cvID}`,
          { process: status }, // pass updated data to the API
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }
    contactData();
    const updatedData = data.map((item) => {
      if (item._id === cvID) {
        return {
          ...item,
          process: status,
        };
      }
      return item;
    });
    setData(updatedData);
  }
  console.log(data?.jobpostId?.title);

  const uniqueJobTitles = data.reduce((acc, curr) => {
    if (!acc.includes(curr.jobpostId.title)) {
      acc.push(curr.jobpostId.title);
    }
    return acc;
  }, []);

  return (
    <>
      {!data ? (
        <Loading />
      ) : (
        <Grid width={"95%"} container sx={{ m: 3 }}>
          <Grid item xs={12}>
            <Box
              sx={{
                p: 2,
                borderBottom: "1px solid rgba(0,0,0,0.1)",
                display: "flex",
                alignItems: "center",
                background: "#fff",
                mt: 15,
              }}
            >
              <ArticleIcon />
              {/* <Typography variant="h5" fontWeight={550} sx={{ ml: 1 }}>
                Danh sách ứng viên ứng tuyển theo bài {data?.jobpostId?.title}
              </Typography> */}
              <Typography variant="h5" fontWeight={550} sx={{ ml: 1 }}>
                Danh sách ứng viên ứng tuyển {uniqueJobTitles.join(", ")}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TableContainer component={Paper}>
              <Table>
                <TableHead sx={{ background: " #5490cc" }}>
                  <TableRow>
                    <TableCell>
                      {" "}
                      <Typography
                        variant="body2"
                        fontWeight={600}
                        fontSize={20}
                        sx={{ color: "Black" }}
                      >
                        Tên ứng viên
                      </Typography>{" "}
                    </TableCell>
                    <TableCell>
                      {" "}
                      <Typography
                        variant="body2"
                        fontWeight={600}
                        fontSize={20}
                        sx={{ color: "Black" }}
                      >
                        Email
                      </Typography>
                    </TableCell>
                    <TableCell>
                      {" "}
                      <Typography
                        variant="body2"
                        fontWeight={600}
                        fontSize={20}
                        sx={{ color: "Black" }}
                      >
                        Công việc ứng tuyển
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ width: "20%" }}>
                      {" "}
                      <Typography
                        variant="body2"
                        fontWeight={600}
                        fontSize={20}
                        sx={{ color: "Black" }}
                      >
                        CV
                      </Typography>
                    </TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                {/* Map CV ra, truyền trạng thái dô default chỗ select cho nó hiện ra, hàm handleStatusChange này truyền vào ID của cv để đổi trạng thái */}
                <TableBody>
                  {data.map((item) => (
                    <TableRow key={item._id}>
                      <TableCell>{item?.candidateId?.nameCandidate}</TableCell>
                      <TableCell>{item?.candidateId?.email}</TableCell>
                      <TableCell>{item?.jobpostId?.title}</TableCell>
                      <TableCell>
                        {/* {item.resumeId} */}
                        <Button
                          variant="outlined"
                          color="primary"
                          onClick={() =>
                            navigate(
                              `/viewcv/${item?.candidateId?.activatedCvId}`
                            )
                          }
                        >
                          Xem CV
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Box>
                          <Select
                            sx={{
                              width: 120,
                            }}
                            value={item.process}
                            size="small"
                            onChange={(e) => handleStatusChange(e, item._id)}
                          >
                            {options.map((option) => (
                              <MenuItem key={option.value} value={option.value}>
                                {option.label}
                              </MenuItem>
                            ))}
                          </Select>
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      )}
    </>
  );
}
