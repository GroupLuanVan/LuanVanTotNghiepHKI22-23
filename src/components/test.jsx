import * as React from "react";
import { Box, Typography, Grid } from "@mui/material";
import CompanyCard from "../components/Home/CompanyCard";

const FEATURED_COMPANIES = [
  {
    id: 1,
    name: "Company A Nguyen Huu Thai",
    logoUrl: "https://via.placeholder.com/150",
    description: "Description for company A",
    websiteUrl: "https://www.company-a.com",
  },
  {
    id: 2,
    name: "Company B",
    logoUrl: "https://via.placeholder.com/150",
    description: "Description for company B",
    websiteUrl: "https://www.company-b.com",
  },
  {
    id: 3,
    name: "Company C",
    logoUrl: "https://via.placeholder.com/150",
    description: "Description for company C",
    websiteUrl: "https://www.company-c.com",
  },
  {
    id: 3,
    name: "Company D",
    logoUrl: "https://via.placeholder.com/150",
    description: "Description for company C",
    websiteUrl: "https://www.company-c.com",
  },
  {
    id: 3,
    name: "Company E",
    logoUrl: "https://via.placeholder.com/150",
    description: "Description for company C",
    websiteUrl: "https://www.company-c.com",
  },
  {
    id: 3,
    name: "Company F",
    logoUrl: "https://via.placeholder.com/150",
    description: "Description for company C",
    websiteUrl: "https://www.company-c.com",
  },
];

const FeaturedCompanies = () => {
  return (
    <Box sx={{ mt: 10 }}>
      <Typography variant="h5" sx={{ mb: 3 }}>
        Featured Companies
      </Typography>
      <Grid container spacing={3}>
        {FEATURED_COMPANIES.map((company) => (
          <Grid key={company.id} item xs={12} md={4}>
            <CompanyCard company={company} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturedCompanies;
