import { Container } from "@mui/system";
import { Box, Typography, Grid } from "@mui/material";

import JobCardCompany from "./JobCardCompany";
import companylogo from "../../asset/companylogo_sample.png";
import { useEffect, useState } from "react";
import JobCardALL from "./JobCard_ALL";
export const JobListCompany = (jobsPage) => {
  console.log(jobsPage.jobsPage.jobpost);
  return (
    <>
      <>
        <Container maxWidth>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}></Box>
          <Grid container sx={{ width: "100%", mt: 1 }} rowGap={2}>
            {jobsPage?.jobsPage?.jobpost?.length > 0 &&
              jobsPage?.jobsPage?.jobpost?.map((item) => {
                return (
                  <Grid item xs={3}>
                    <JobCardALL job={item} />
                  </Grid>
                );
              })}
          </Grid>
        </Container>
      </>
    </>
  );
};

// import { Container } from "@mui/system";
// import { Box, Typography, Grid } from "@mui/material";
// import { useState } from "react";
// import JobCardALL from "./JobCard_ALL";
// import { Pagination } from "@mui/material";
// import {
//   useNavigate,
//   createSearchParams,
//   useSearchParams,
// } from "react-router-dom";
// import { useSelector } from "react-redux";
// import axios from "axios";

// export const JobListCompany = ({ jobsPage }) => {
//   console.log(jobsPage);
//   const navigate = useNavigate();
//   const user = useSelector((state) => state.user);
//   const [data, setData] = useState();
//   const [reload, setReload] = useState();
//   const MenuProps = {
//     PaperProps: {
//       style: {
//         maxHeight: 200,
//       },
//     },
//   };

//   const [currentPage, setCurrentPage] = useState(1);

//   const buildFilterApi = async (page = 1) => {
//     let filterApiArray = [];
//     let filterApiUrl = "/Jobpost?";

//     if (page) {
//       filterApiArray.push(`page=${page}&limit=12&`);
//     }

//     let queryUrl = "";
//     if (filterApiArray.length > 0) {
//       queryUrl = filterApiArray.join("");
//     }

//     if (queryUrl.endsWith("&")) {
//       queryUrl = queryUrl.substring(0, queryUrl.length - 1);
//     }

//     filterApiUrl += queryUrl;

//     const res = await axios.get("http://localhost:5000/api" + filterApiUrl);
//     setData(res.data);
//   };
//   console.log(data);

//   const changePage = (event, value) => {
//     setCurrentPage(value);
//     buildFilterApi(value);
//   };

//   return (
//     <>
//       <Container maxWidth>
//         <Box sx={{ display: "flex", justifyContent: "space-between" }}></Box>
//         <Grid container sx={{ width: "100%", mt: 1 }} rowGap={2}>
//           {jobsPage?.jobsPage?.length > 0 &&
//             jobsPage.jobsPage.map((item) => {
//               return (
//                 <Grid item xs={3}>
//                   <JobCardALL job={item} />
//                 </Grid>
//               );
//             })}
//         </Grid>

//         <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
//           <Pagination
//             onChange={changePage}
//             color="success"
//             count={jobsPage.pageCnt}
//             page={currentPage}
//           />
//         </Box>
//       </Container>
//     </>
//   );
// };
