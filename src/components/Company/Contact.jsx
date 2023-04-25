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
import axios from "axios";
export default function Contact() {
  // có thể lưu status dạng int là 0, 1, 2, mặc định là 0, xuống đây dựa dô cái mảng cvstatus dưới này mà lấy
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/contact/candidatelist/"
        );
        setData(response.data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
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
              <Typography variant="h5" fontWeight={550} sx={{ ml: 1 }}>
                Danh sách ứng viên ứng tuyển theo bài
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Tên ứng viên</TableCell>
                    <TableCell>Chức danh</TableCell>
                    <TableCell>Công việc ứng tuyển</TableCell>
                    <TableCell sx={{ width: "20%" }}>Trạng thái</TableCell>
                  </TableRow>
                </TableHead>
                {/* Map CV ra, truyền trạng thái dô default chỗ select cho nó hiện ra, hàm handleStatusChange này truyền vào ID của cv để đổi trạng thái */}
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <Typography>Nguyễn Hữu Thái</Typography>
                    </TableCell>

                    <TableCell>
                      <Typography>Nhân Viên</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>
                        PHP Web Developer (3+ Năm Kinh Nghiệm)
                      </Typography>
                    </TableCell>
                    <TableCell>
                      {/* <Box>
                        {" "}
                        <Select
                          // defaultValue={item.process}
                          size="small"
                          onChange={(e) => handleStatusChange(e, 1)}
                        >
                          {contactProcesses.map((el) => {
                            return (
                              <MenuItem value={el.val}>{el.title}</MenuItem>
                            );
                          })}
                        </Select>
                      </Box> */}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      )}
    </>
  );
}
