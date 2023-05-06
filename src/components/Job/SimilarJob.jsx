import { Container, Grid, Paper, Typography } from "@mui/material";
import JobCard from "../.././components/JobPost/JobCardCompany";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
export default function SimilarJob({ jobPostId }) {
  const [jobRecs, setJobRecs] = useState([]);
  const cvId = useSelector((state) => state.user.cvId);

  useEffect(() => {
    async function getData() {
      const sugListDbData = await axios.get(
        `http://127.0.0.1:8080/findJobForCv/${cvId}`
      );
      console.log(sugListDbData);
      setJobRecs(sugListDbData.data);
    }
    getData();
  }, []);
  //console.log(jobRecs);

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
              {jobRecs.map((item) => {
                return (
                  <Grid item xs={4}>
                    <JobCard job={item} />
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
}
