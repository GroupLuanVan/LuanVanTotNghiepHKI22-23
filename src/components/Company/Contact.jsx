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
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";

import axios from "axios";
export default function Contact(user) {
  const { id } = useParams();
  console.log(id);

  const token = localStorage.getItem("token");

  // có thể lưu status dạng int là 0, 1, 2, mặc định là 0, xuống đây dựa dô cái mảng cvstatus dưới này mà lấy
  const [data, setData] = useState([]);

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
              <Typography variant="h5" fontWeight={550} sx={{ ml: 1 }}>
                Danh sách ứng viên ứng tuyển theo bài (trả về idJobpost đầy đủ
                thông tin in tên)
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Tên ứng viên (idCandidate tạm)</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>
                      Công việc ứng tuyển (jobpostID lấy tạm)
                    </TableCell>
                    <TableCell sx={{ width: "20%" }}>CV</TableCell>
                  </TableRow>
                </TableHead>
                {/* Map CV ra, truyền trạng thái dô default chỗ select cho nó hiện ra, hàm handleStatusChange này truyền vào ID của cv để đổi trạng thái */}
                <TableBody>
                  {data.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>{item.candidateId._id}</TableCell>
                      <TableCell>{item.candidateId.email}</TableCell>
                      <TableCell>{item.jobpostId}</TableCell>
                      <TableCell>{item.resumeId}</TableCell>
                      <TableCell>
                        {/* <Box>
                          <Select
                            defaultValue={item.process}
                            size="small"
                            onChange={(e) => handleStatusChange(e, item.id)}
                          >
                            {contactProcesses.map((el) => (
                              <MenuItem value={el.val}>{el.title}</MenuItem>
                            ))}
                          </Select>
                        </Box> */}
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
