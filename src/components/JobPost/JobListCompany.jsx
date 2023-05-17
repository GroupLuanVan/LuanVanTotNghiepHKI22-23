// import { Container } from "@mui/system";
// import { Box, Typography, Grid } from "@mui/material";

// import JobCardCompany from "./JobCardCompany";
// import companylogo from "../../asset/companylogo_sample.png";
// import { useEffect, useState } from "react";
// import JobCardALL from "./JobCard_ALL";
// export const JobListCompany = (jobsPage) => {
//   console.log(jobsPage?.jobsPage);
//   return (
//     <>
//       <>
//         <Container maxWidth>
//           <Box sx={{ display: "flex", justifyContent: "space-between" }}></Box>
//           <Grid container sx={{ width: "100%", mt: 1 }} rowGap={2}>
//             {jobsPage?.jobsPage?.jobpost?.length > 0 &&
//               jobsPage?.jobsPage?.jobpost?.map((item) => {
//                 return (
//                   <Grid item xs={3}>
//                     <JobCardALL job={item} />
//                   </Grid>
//                 );
//               })}
//           </Grid>
//         </Container>
//       </>
//     </>
//   );
// };

import { Container } from "@mui/system";
import { Box, Typography, Grid } from "@mui/material";
import JobCardCompany from "./JobCardCompany";
import companylogo from "../../asset/companylogo_sample.png";
import { useEffect, useState } from "react";
import JobCardALL from "./JobCard_ALL";

export const JobListCompany = (jobsPage) => {
  // Khai báo biến currentPage và pageSize để tính toán phân trang
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;

  // Tính toán số lượng trang dựa trên tổng số phần tử và pageSize
  const totalPages = Math.ceil(jobsPage?.jobsPage?.jobpost?.length / pageSize);

  // Hàm xác định phần tử bắt đầu và kết thúc sẽ được hiển thị trên trang hiện tại
  const getJobPostByPage = (page) => {
    const startIndex = (page - 1) * pageSize;
    const endIndex = Math.min(
      startIndex + pageSize - 1,
      jobsPage?.jobsPage?.jobpost?.length - 1
    );
    return jobsPage?.jobsPage?.jobpost?.slice(startIndex, endIndex + 1);
  };

  // Render danh sách công việc theo trang hiện tại
  const jobPost = getJobPostByPage(currentPage);

  return (
    <>
      <>
        <Container
          sx={{
            backgroundColor: "#f1f2f7",
          }}
          maxWidth
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          ></Box>
          <Grid container sx={{ width: "100%", mt: 1 }} rowGap={2}>
            {jobPost?.length > 0 &&
              jobPost?.map((item) => {
                return (
                  <Grid item xs={3}>
                    <JobCardALL job={item} />
                  </Grid>
                );
              })}
          </Grid>
          {/* Render phân trang */}
          <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            {Array.from(Array(totalPages).keys()).map((page) => (
              <Box
                key={page}
                sx={{
                  mx: 1,
                  color: currentPage === page + 1 ? "primary.main" : "inherit",
                  backgroundColor:
                    currentPage === page + 1 ? "primary.light" : "transparent",
                  fontSize: 16,
                  width: 40,
                  height: 40,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "50%",
                  cursor: "pointer",
                  border: "1px solid grey",
                  "&:hover": {
                    backgroundColor:
                      currentPage === page + 1 ? "primary.main" : "grey",
                    color: "white",
                  },
                }}
                onClick={() => setCurrentPage(page + 1)}
              >
                {page + 1}
              </Box>
            ))}
          </Box>
        </Container>
      </>
    </>
  );
};
