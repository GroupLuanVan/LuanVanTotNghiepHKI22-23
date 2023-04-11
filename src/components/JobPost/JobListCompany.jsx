import { Container } from "@mui/system";
import { Box, Typography, Grid } from "@mui/material";

import JobCardCompany from "./JobCardCompany";
import companylogo from "../../asset/companylogo_sample.png";
import { useEffect, useState } from "react";
import JobCardALL from "./JobCard_ALL";
export const JobListCompany = (jobsPage) => {
  //console.log(jobsPage);
  return (
    <>
      <>
        <Container maxWidth>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              variant="h5"
              fontWeight="600"
              gutterBottom
              sx={{ ml: 3, mt: 4 }}
            >
              Tin tuyển dụng, việc làm mới nhất
            </Typography>
          </Box>
          <Grid container sx={{ width: "100%", mt: 1 }} rowGap={2}>
            {jobsPage.jobsPage.jobsPage.length > 0 &&
              jobsPage.jobsPage.jobsPage.map((item) => {
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
