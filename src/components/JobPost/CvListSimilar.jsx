// import React from "react";
// import {
//   Grid,
//   Paper,
//   Typography,
//   Box,
//   Tab,
//   Tabs,
//   FormGroup,
//   FormControlLabel,
//   Checkbox,
//   Autocomplete,
//   TextField,
//   Button,
//   Input,
//   CircularProgress,
//   Container,
// } from "@mui/material";
// import axios from "axios";
// import { useLocation } from "react-router-dom";
// import useFetch from "../../hook/useFetch";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import env from "../../asset/env.json";
// import { RichTextDisplay } from "../RichText";
// import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
// import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
// import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
// import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
// import SearchIcon from "@mui/icons-material/Search";
// import PropTypes from "prop-types";
// import { date } from "yup";

// import TransgenderIcon from "@mui/icons-material/Transgender";

// export const CvListSimilar = (CvRecs) => {
//   const data = CvRecs?.Cvdata;
//   console.log(data?.name);
//   const [Remuse, setRemuse] = useState([]);
//   function CandidateCard({ data, type }) {
//     const commonStyle = {
//       display: "flex",
//       alignItems: "center",
//       "& :nth-child(1)": {
//         mr: 1,
//       },
//     };
//     console.log(data);
//     const navigate = useNavigate();
//     return (
//       <>
//         {data?.map((item, index) => (
//           <Grid
//             container
//             sx={{
//               py: 2,
//               alignItems: "center",
//               justifyContent: "space-around",
//               borderBottom: "1px dashed gray",
//             }}
//           >
//             {/* thong tin chung */}
//             <Grid
//               item
//               xs={4}
//               sx={{
//                 borderRight: "1px solid gray",
//               }}
//             >
//               {/*name  */}
//               <Box display={"flex"} justifyContent={"center"}>
//                 {" "}
//                 <Typography
//                   variant="h4"
//                   color="initial"
//                   fontWeight={500}
//                   sx={{ mb: 1 }}
//                 >
//                   {item?.data?.name}
//                 </Typography>
//               </Box>

//               <Box>
//                 {" "}
//                 {/* title */}
//                 <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
//                   <WorkOutlineOutlinedIcon fontSize="small" sx={{ mr: 1 }} />
//                   <Typography variant="body1" color="initial">
//                     {item?.data?.title}
//                   </Typography>
//                 </Box>
//                 {/* address  */}
//                 <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
//                   <PlaceOutlinedIcon fontSize="small" sx={{ mr: 1 }} />
//                   <Typography variant="body1" color="initial">
//                     {item?.data?.fulladdress}
//                   </Typography>
//                 </Box>
//                 {/* email */}
//                 <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
//                   <EmailOutlinedIcon fontSize="small" sx={{ mr: 1 }} />
//                   <Typography variant="body1" color="initial">
//                     {item?.data?.email}
//                   </Typography>
//                 </Box>
//                 {/* phone */}
//                 <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
//                   <PhoneIphoneOutlinedIcon fontSize="small" sx={{ mr: 1 }} />
//                   <Typography variant="body1" color="initial">
//                     {item?.data?.phone}
//                   </Typography>
//                 </Box>
//                 <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
//                   <TransgenderIcon fontSize="small" sx={{ mr: 1 }} />
//                   <Typography variant="body1" color="initial">
//                     {item?.data?.gender}
//                   </Typography>
//                 </Box>
//               </Box>
//             </Grid>

//             {/* Thong tin Rich text */}
//             <Grid
//               item
//               container
//               xs={5}
//               spacing={3}
//               justifyContent="space-between"
//             >
//               {/* kinh nghiem */}
//               <Grid
//                 item
//                 xs={6}
//                 sx={{
//                   mb: 2,
//                 }}
//               >
//                 <Typography variant="h5" color="initial" fontWeight={600}>
//                   Kinh nghiệm
//                 </Typography>
//                 <Box
//                   sx={{
//                     width: "100%",
//                     mt: 2,
//                   }}
//                 >
//                   <RichTextDisplay
//                     data={JSON.parse(item?.data?.experienceCv)}
//                   />
//                 </Box>
//               </Grid>
//               {/* Hoat dong */}
//               <Grid
//                 item
//                 xs={6}
//                 sx={{
//                   mb: 2,
//                 }}
//               >
//                 <Typography variant="h5" color="initial" fontWeight={600}>
//                   Hoạt động
//                 </Typography>
//                 <Box
//                   sx={{
//                     width: "100%",
//                     mt: 2,
//                   }}
//                 >
//                   <RichTextDisplay
//                     data={JSON.parse(item?.data?.activitiesCv)}
//                   />
//                 </Box>
//               </Grid>
//               {/* Ky nang */}
//               <Grid
//                 item
//                 xs={6}
//                 sx={{
//                   mb: 2,
//                 }}
//               >
//                 <Typography variant="h5" color="initial" fontWeight={600}>
//                   Kỹ năng
//                 </Typography>
//                 <Box
//                   sx={{
//                     width: "100%",
//                     mt: 2,
//                   }}
//                 >
//                   <RichTextDisplay data={JSON.parse(item?.data?.skillsCv)} />
//                 </Box>
//               </Grid>
//               {/* Hoc van */}
//               <Grid
//                 item
//                 xs={6}
//                 sx={{
//                   mb: 2,
//                 }}
//               >
//                 <Typography variant="h5" color="initial" fontWeight={600}>
//                   Học vấn
//                 </Typography>
//                 <Box
//                   sx={{
//                     width: "100%",
//                     mt: 2,
//                   }}
//                 >
//                   <RichTextDisplay data={JSON.parse(item?.data?.educationCv)} />
//                 </Box>
//               </Grid>
//               <Grid
//                 item
//                 xs={6}
//                 sx={{
//                   mb: 2,
//                 }}
//               >
//                 <Typography variant="h5" color="initial" fontWeight={600}>
//                   Dự Án
//                 </Typography>
//                 <Box
//                   sx={{
//                     width: "100%",
//                     mt: 2,
//                   }}
//                 >
//                   {item?.data?.project}
//                 </Box>
//               </Grid>
//               <Grid
//                 item
//                 xs={6}
//                 sx={{
//                   mb: 2,
//                 }}
//               >
//                 <Typography variant="h5" color="initial" fontWeight={600}>
//                   Chứng Chỉ
//                 </Typography>
//                 <Box
//                   sx={{
//                     width: "100%",
//                     mt: 2,
//                   }}
//                 >
//                   {item?.data?.certifications}
//                 </Box>
//               </Grid>
//             </Grid>
//             <Grid item xs={2}>
//               <Button
//                 variant="outlined"
//                 color="primary"
//                 onClick={() => navigate(`/viewcv/${item?.resId}`)}
//               >
//                 Xem CV
//               </Button>
//             </Grid>
//           </Grid>
//         ))}
//       </>
//     );
//   }

//   function Result({ data, type }) {
//     return (
//       <>
//         {data?.map((item, index) => (
//           <Box
//             sx={{
//               background: "#fff",
//               p: 2,
//             }}
//           >
//             <Box
//               sx={{
//                 borderBottom: "1px solid rgba(0,0,0,0.1)",
//                 display: "flex",
//                 alignItems: "center",
//                 pb: 2,
//                 mb: 2,
//               }}
//             >
//               <SearchIcon />
//               {type !== "ungtuyen" ? (
//                 <Typography variant="h6" fontWeight={550} sx={{ ml: 1 }}>
//                   Tìm thấy{" "}
//                   <Typography variant="span" color="success">
//                     {item?.data?.length}
//                   </Typography>{" "}
//                   ứng viên phù hợp
//                 </Typography>
//               ) : (
//                 <Typography variant="h6" fontWeight={550} sx={{ ml: 1 }}>
//                   <Typography variant="span" color="success">
//                     {item?.length}
//                   </Typography>{" "}
//                   Ứng viên ứng tuyển
//                 </Typography>
//               )}
//             </Box>
//             {data &&
//               data?.map((item) => {
//                 return <CandidateCard data={item} type={type} />;
//               })}
//           </Box>
//         ))}
//       </>
//     );
//   }
//   const ungVienData = [data];
//   return (
//     <>
//       <Grid container sx={{ background: "#f1f2f6" }}>
//         <Result type="ungtuyen" data={ungVienData} />
//       </Grid>
//     </>
//   );
// };

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

import TransgenderIcon from "@mui/icons-material/Transgender";

export const CvListSimilar = (CvRecs) => {
  const data = CvRecs?.Cvdata;

  const [Remuse, setRemuse] = useState([]);
  function CandidateCard({ data, type }) {
    const commonStyle = {
      display: "flex",
      alignItems: "center",
      "& :nth-child(1)": {
        mr: 1,
      },
    };
    console.log(data);

    const navigate = useNavigate();
    return (
      <>
        {data?.map((item, index) => (
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
                  {item?.name}
                </Typography>
              </Box>

              <Box>
                {" "}
                {/* title */}
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <WorkOutlineOutlinedIcon fontSize="small" sx={{ mr: 1 }} />
                  <Typography variant="body1" color="initial">
                    {item?.title}
                  </Typography>
                </Box>
                {/* address  */}
                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <PlaceOutlinedIcon fontSize="small" sx={{ mr: 1 }} />
                  <Typography variant="body1" color="initial">
                    {item?.fulladdress}
                  </Typography>
                </Box>
                {/* email */}
                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <EmailOutlinedIcon fontSize="small" sx={{ mr: 1 }} />
                  <Typography variant="body1" color="initial">
                    {item?.email}
                  </Typography>
                </Box>
                {/* phone */}
                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <PhoneIphoneOutlinedIcon fontSize="small" sx={{ mr: 1 }} />
                  <Typography variant="body1" color="initial">
                    {item?.phone}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <TransgenderIcon fontSize="small" sx={{ mr: 1 }} />
                  <Typography variant="body1" color="initial">
                    {item?.gender}
                  </Typography>
                </Box>
              </Box>
            </Grid>

            {/* Thong tin Rich text */}
            <Grid
              item
              container
              xs={5}
              spacing={3}
              justifyContent="space-between"
            >
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
                  <RichTextDisplay data={JSON.parse(item?.experienceCv)} />
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
                  <RichTextDisplay data={JSON.parse(item?.activitiesCv)} />
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
                  <RichTextDisplay data={JSON.parse(item?.skillsCv)} />
                </Box>
              </Grid>
              {/* Hoc van */}
              <Grid
                item
                xs={6}
                sx={{
                  mb: 2,
                }}
              >
                <Typography variant="h5" color="initial" fontWeight={600}>
                  Học vấn
                </Typography>
                <Box
                  sx={{
                    width: "100%",
                    mt: 2,
                  }}
                >
                  <RichTextDisplay data={JSON.parse(item?.educationCv)} />
                </Box>
              </Grid>
              <Grid
                item
                xs={6}
                sx={{
                  mb: 2,
                }}
              >
                <Typography variant="h5" color="initial" fontWeight={600}>
                  Dự Án
                </Typography>
                <Box
                  sx={{
                    width: "100%",
                    mt: 2,
                  }}
                >
                  {item?.project}
                </Box>
              </Grid>
              <Grid
                item
                xs={6}
                sx={{
                  mb: 2,
                }}
              >
                <Typography variant="h5" color="initial" fontWeight={600}>
                  Chứng Chỉ
                </Typography>
                <Box
                  sx={{
                    width: "100%",
                    mt: 2,
                  }}
                >
                  {item?.certifications}
                </Box>
              </Grid>
            </Grid>
            <Grid item xs={2}>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => navigate(`/viewcv/${item?._id?.$oid}`)}
              >
                Xem CV
              </Button>
            </Grid>
          </Grid>
        ))}
      </>
    );
  }

  function Result({ data, type }) {
    return (
      <>
        {data?.map((item, index) => (
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
                    {item?.length}
                  </Typography>{" "}
                  ứng viên phù hợp
                </Typography>
              ) : (
                <Typography variant="h6" fontWeight={550} sx={{ ml: 1 }}>
                  <Typography variant="span" color="success">
                    {item?.length}
                  </Typography>{" "}
                  Ứng viên phù hợp nhất
                </Typography>
              )}
            </Box>
            {data &&
              data?.map((item) => {
                return <CandidateCard data={item} type={type} />;
              })}
          </Box>
        ))}
      </>
    );
  }
  const ungVienData = [data];
  return (
    <>
      <Grid container sx={{ background: "#f1f2f6" }}>
        <Result type="ungtuyen" data={ungVienData} />
      </Grid>
    </>
  );
};
