import JobSearch from "./JobSearch";
import { Box } from "@mui/material";
const JobListingPage = () => {
  return (
    <>
      <Box
        sx={{
          mt: 10,
        }}
      >
        <h1>Danh sách công việc</h1>
        <JobSearch />
      </Box>
    </>
  );
};

export default JobListingPage;
