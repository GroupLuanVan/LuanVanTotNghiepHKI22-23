import React from "react";
import { Box, Typography, makeStyles } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#fff",
    boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "flex-start",
      padding: theme.spacing(1),
    },
  },
  icon: {
    marginRight: theme.spacing(2),
    fontSize: 50,
    color: theme.palette.primary.main,
    [theme.breakpoints.down("sm")]: {
      marginRight: 0,
      marginBottom: theme.spacing(1),
    },
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      alignItems: "flex-start",
      textAlign: "left",
    },
  },
  title: {
    fontWeight: "bold",
    color: "#333",
    marginBottom: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },
  description: {
    color: "#666",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8rem",
    },
  },
}));

const DashboardCard = ({ icon, title, description }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.icon}>{icon}</Box>
      <Box className={classes.content}>
        <Typography variant="h6" className={classes.title}>
          {title}
        </Typography>
        <Typography variant="body1" className={classes.description}>
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default DashboardCard;
