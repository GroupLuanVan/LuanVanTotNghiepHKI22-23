import {
  Container,
  Box,
  TextField,
  FormControl,
  InputAdornment,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Stack,
  Typography,
  createTheme,
  Grid,
  CircularProgress,
} from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Image from "mui-image";
import Image1 from "../../asset/5.jpg";
import { useState } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SendIcon from "@mui/icons-material/Send";
import PaidIcon from "@mui/icons-material/Paid";
import { alpha } from "@mui/material/styles";
import PeopleIcon from "@mui/icons-material/People";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import WcIcon from "@mui/icons-material/Wc";
import StarIcon from "@mui/icons-material/Star";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { RichTextDisplay } from "../RichText";
import { useLocation } from "react-router-dom";
import useFetch from "../../hook/useFetch";
import EditIcon from "@mui/icons-material/Edit";
import LanguageIcon from "@mui/icons-material/Language";
import { useEffect } from "react";

import axios from "axios";
import { toast } from "react-toastify";

import { setidApplyJob } from "../../store/userSlice";
import Loading from "../Loading";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
export default function MyCompany({ user }) {
  const idApply = useSelector((state) => state.user.idApplyJob);

  const dispatch = useDispatch();

  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [isApplied, setIsApplied] = useState();

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const role = useSelector((state) => state.user.token);
  const token = localStorage.getItem("token");

  const idcompany = useSelector((state) => state.user.idCompany);
  console.log(idcompany);
  const companyIn4 = useFetch(`http://localhost:5000/api/company/${idcompany}`);
  console.log(companyIn4?.data);

  return (
    <>
      <Container
        disableGutters
        maxWidth
        sx={{
          background: "#f1f2f6",
          py: 4,
          mt: 8,
          ml: 1.5,
        }}
      >
        <Container
          maxWidth
          disableGutters
          sx={{
            background: "#f1f2f6",
            mt: 15,
          }}
        >
          <Grid
            container
            sx={{
              background: "white",
              my: 2,
              mx: "auto",
              width: "70%",
              pb: 3,
              position: "relative", //Thêm thuộc tính position
            }}
          >
            <Image
              src="https://www.topcv.vn/images/default_cover/default_normal_cover.jpg"
              sx={{
                width: "100%",
                height: "100%",
              }}
              fit="cover"
            />
            <Box //Thêm một box để chứa logo
              sx={{
                position: "absolute",
                top: "65%",
                left: "20%",
                transform: "translate(-50%, -50%)",
                borderRadius: "100%",
                border: "1px solid gray",
                zIndex: 1,
              }}
            >
              <Image
                src={companyIn4?.data?.linkToLogo}
                width="200px"
                height="200px"
                duration={0}
                fit="cover"
              />
            </Box>
            <Grid xs={12} sx={{ my: 2, pl: 70 }}>
              <Typography
                variant="h5"
                color="initial"
                fontWeight={500}
                sx={{
                  color: "#105aa3",
                  position: "relative", //Thêm thuộc tính position
                  zIndex: 2, //Đặt lớp nằm trên cùng (z-index) và cao hơn lớp logo
                }}
              >
                {data?.title}
              </Typography>
              <Typography variant="h5" color="initial" sx={{ py: 1 }}>
                Công Ty: {companyIn4?.data?.nameCompany}
              </Typography>
              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                sx={{ color: "rgba(0,0,0,0.7)" }}
              >
                <PeopleIcon fontSize="small" />
                <Typography variant="body1">
                  Số lượng nhân viên: {companyIn4?.data?.members}
                </Typography>
              </Stack>
              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                sx={{ color: "rgba(0,0,0,0.7)" }}
              >
                {/* <LanguageIcon fontSize="small" />
                <Typography variant="body1">
                  Website: {data?.companyId?.website}
                </Typography> */}
              </Stack>
            </Grid>
          </Grid>

          {/* Giới thiệu công ty */}
          <Grid
            container
            sx={{
              background: "white",
              my: 2,
              mx: "auto",
              width: "70%",
              pb: 3,
              gap: 10,
              padding: "10px",
            }}
          >
            <Box display={"flex"}>
              <Grid xs={7} sx={{ my: 2, mr: 1 }}>
                <Typography
                  sx={{
                    px: 2,
                    ml: 3,
                    borderLeft: "7px solid #7cb1e6",
                  }}
                  variant="h5"
                  fontWeight={600}
                >
                  Giới thiệu công ty
                </Typography>
                <Box
                  sx={{
                    ml: 3,
                    py: 1,
                  }}
                >
                  <Typography>{companyIn4?.data?.introduce}</Typography>
                </Box>
              </Grid>
              <Grid item xs={1} />
              <Grid xs={4} sx={{ my: 2 }}>
                <Typography
                  sx={{
                    px: 2,
                    ml: 3,
                    borderLeft: "7px solid #7cb1e6",
                  }}
                  variant="h5"
                  fontWeight={600}
                >
                  Địa chỉ
                </Typography>
                <Box
                  sx={{
                    ml: 3,
                    py: 1,
                  }}
                >
                  <Typography>{companyIn4?.data?.detailAdress}</Typography>
                </Box>
              </Grid>
            </Box>
          </Grid>
        </Container>
      </Container>
    </>
  );
}
