import { Container } from "@mui/system";
import { Box, Typography, Grid } from "@mui/material";

import JobCardCompany from "./JobCardCompany";
import companylogo from "../../asset/companylogo_sample.png";
import { useEffect, useState } from "react";
import JobCardALL from "./JobCard_ALL";
export const JobNoiBat = (jobsnoibat) => {
  console.log(jobsnoibat?.jobsnoibat?.jobpost);
  return (
    <>
      <>
        <Container
          sx={{
            backgroundColor: "#f1f2f7",
          }}
          maxWidth
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}></Box>
          <Grid container sx={{ width: "100%", mt: 1 }} rowGap={2}>
            {jobsnoibat?.jobsnoibat?.jobpost?.length > 0 &&
              jobsnoibat?.jobsnoibat?.jobpost?.map((item) => {
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
