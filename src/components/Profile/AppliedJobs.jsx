import {
  Button,
  createTheme,
  Divider,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading";
import WorkIcon from "@mui/icons-material/Work";
import { setApplyJobs } from "../../store/userSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
export default function AppliedJobs({ user }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [result, setResult] = useState();
  const [loading, setLoading] = useState(false);
  const theme = createTheme();
  async function InitData() {
    let result1 = [];
    user.user.applyJobs.map(async (item) => {
      let result2 = await axios.get("jobpost/" + item);
      result1.push(result2.data);
    });
    return result1;
  }

  return (
    <Grid
      container
      sx={{
        background: "#f1f2f7",
        justifyContent: "center",
        p: 8,
        mt: 10,
      }}
    >
      <Grid
        xs={10}
        item
        container
        sx={{
          mb: 3,
          alignItems: "center",
          gap: 2,
        }}
      >
        <Grid item>
          <WorkIcon fontSize="large" />
        </Grid>
        <Grid item>
          <Typography fontWeight={600} variant="h4">
            Công việc bạn đã ứng tuyển
          </Typography>
          <Divider />
        </Grid>
      </Grid>
      <Grid item xs={10}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead
              sx={{
                background: theme.palette.primary.dark,
              }}
            >
              <TableRow sx={{ fontWeight: 600 }}>
                <TableCell>
                  <Typography
                    variant="body2"
                    fontWeight={600}
                    sx={{ color: "white" }}
                  >
                    Tên công việc
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    variant="body2"
                    fontWeight={600}
                    sx={{ color: "white" }}
                  >
                    Tên công ty
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    variant="body2"
                    fontWeight={600}
                    sx={{ color: "white" }}
                  >
                    Ngày hết hạn
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    variant="body2"
                    fontWeight={600}
                    sx={{ color: "white" }}
                  >
                    Địa chỉ
                  </Typography>
                </TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {loading ? (
                result.map((value, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell>{value.title}</TableCell>
                      <TableCell>{value.companyId.name}</TableCell>
                      <TableCell>
                        {new Date(value.endDate).toLocaleDateString()}
                      </TableCell>
                      <TableCell>{value.fullAddress}</TableCell>
                      <TableCell>
                        <Button variant="outlined" color="error">
                          Hủy ứng tuyển
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })
              ) : (
                <TableRow>
                  <Loading />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}
