import { Container } from "@mui/system";
import { Box, Typography, Grid } from "@mui/material";

import JobCardCompany from "./JobCardCompany";
import companylogo from "../../asset/companylogo_sample.png";
import { useEffect, useState } from "react";
import JobCardSimilar from "./JobCardSimilar";
export const JobListSimilar = (jobRecs) => {
  console.log(jobRecs?.jobSimilar);
  return (
    <>
      <>
        <Container maxWidth>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}></Box>
          <Grid container sx={{ width: "100%", mt: 1 }} rowGap={2}>
            {jobRecs?.jobSimilar?.length > 0 &&
              jobRecs?.jobSimilar?.map((item, index) => {
                return (
                  <Grid key={index} item xs={3}>
                    <JobCardSimilar job={item} />
                  </Grid>
                );
              })}
          </Grid>
        </Container>
      </>
    </>
  );
};
