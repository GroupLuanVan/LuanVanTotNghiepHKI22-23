import { Container, Grid, Paper, Typography } from "@mui/material";
import JobCard from "../.././components/JobPost/JobCardCompany";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { JobListSimilar } from "../JobPost/JobListSimilar";
import JobCardSimilar from "../JobPost/JobCardSimilar";
import axios from "axios";
export default function SimilarJob({ jobPostId }) {
  const [jobRecs, setJobRecs] = useState([]);
  const cvId = useSelector((state) => state.user.cvId);

  useEffect(() => {
    console.log("Calling API...");
    async function getData() {
      const sugListDbData = await axios.get(
        `http://127.0.0.1:8080/findJobForCv/${cvId}`
      );
      const jobRecs = sugListDbData.data; // sửa lại phần lấy dữ liệu ở đây
      console.log(jobRecs);
      setJobRecs(jobRecs);
    }

    getData();
  }, []);
  console.log(jobRecs);

  return (
    <>
      <Container
        maxWidth
        sx={{
          mb: 3,
        }}
      >
        <Paper
          elevation={4}
          sx={{
            p: 3,
          }}
        >
          <Grid
            container
            sx={{
              rowGap: 2,
            }}
          >
            <Grid item xs={12}>
              <Typography
                variant="h5"
                fontWeight="600"
                gutterBottom
                sx={{ ml: 3 }}
              >
                Việc làm tương tự
              </Typography>
            </Grid>
            <Grid
              container
              item
              xs={12}
              sx={{
                rowGap: 2,
              }}
            >
              {/* {jobRecs.map((item) => {
                return (
                  <Grid item xs={4}>
                    <JobListSimilar jobSimilar={item} />
                  </Grid>
                );
              })} */}
              <JobListSimilar jobSimilar={jobRecs} />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
}
