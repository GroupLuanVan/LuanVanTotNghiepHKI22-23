import {
  Paper,
  Box,
  Typography,
  Grid,
  Card,
  CardActionArea,
  IconButton,
  Chip,
} from "@mui/material";
import { useNavigate, createSearchParams } from "react-router-dom";
import Image from "mui-image";

export default function JobCardCompany(props) {
  const { job } = props;
  console.log(props);
  function titleCut(title) {
    if (title?.length > 20) {
      return title.slice(0, 19) + "...";
    } else return title;
  }
  const style1 = {
    background: "#2E7D32",
    px: 1,
    borderRadius: "4px",
    mr: 2,
    color: "white",
    fontSize: "16px",
  };
  const navigate = useNavigate();
  console.log(job);
  let salaryChip = "";
  if (job?.salaryMin === 0 && job?.salaryMax === 0) {
    salaryChip = "Thỏa thuận";
  }
  if (job?.salaryMin === job?.salaryMax && job?.salaryMin > 0) {
    salaryChip = `${job?.salaryMin / 1000000} Triệu`;
  }
  if (
    job?.salaryMin > 0 &&
    job?.salaryMax < 999999999 &&
    job?.salaryMin < job?.salaryMax
  ) {
    salaryChip = `${job?.salaryMin / 1000000} Triệu  -  ${
      job?.salaryMax / 1000000
    } Triệu`;
  }
  if (job?.salaryMin === 0 && job?.salaryMax > 0) {
    salaryChip = `Lên đến ${job?.salaryMax / 1000000} Triệu`;
  }
  if (job?.salaryMax === 999999999 && job?.salaryMin > 0) {
    salaryChip = `Từ ${job?.salaryMin / 1000000} Triệu`;
  }

  return (
    <>
      <Card
        sx={{ boxShadow: "-1px 1px 4px rgb(0 0 0 / 20%)", width: "95%" }}
        onClick={() => {
          navigate({
            pathname: `/jobdetail/${job._id}`,
          });
        }}
      >
        <CardActionArea>
          <Box
            sx={{
              display: "flex",
              padding: "10px",
            }}
          >
            <Grid container sx={{ width: "20%" }}>
              <Grid xs="12">
                <Image
                  src={job?.companyId?.linkToLogo}
                  sx={{
                    borderRadius: "100%",
                    border: "1px solid gray",
                  }}
                  width="80px"
                  height="80px"
                  duration={0}
                  fit="scale-down"
                />
              </Grid>
            </Grid>
            <Box
              sx={{
                ml: 4,
              }}
            >
              <Typography fontWeight="600" fontSize="18px" variant="h6">
                {titleCut(job?.title)}
              </Typography>
              <Typography fontWeight="300" fontSize="20px" variant="h5">
                {job?.companyId?.name}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", padding: "10px", minWidth: "40%" }}>
            <Chip color="success" label={salaryChip} sx={{ mr: 1 }} />
            <Chip color="success" label={job?.fullAddress} />
          </Box>
        </CardActionArea>
      </Card>
    </>
  );
}
