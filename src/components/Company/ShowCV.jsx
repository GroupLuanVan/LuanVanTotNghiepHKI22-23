import React from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  InputAdornment,
  Grid,
  Card,
  CardContent,
  CardActionArea,
  CardActions,
  CardMedia,
  Container,
} from "@mui/material";
import Image from "mui-image";
import { useNavigate, createSearchParams } from "react-router-dom";
import Image1 from "../../asset/JobS.png";
import { red } from "@mui/material/colors";
import { getAddressTitleFromId } from "../../other/SelectDataUtils";
import { styled } from "@mui/material/styles";
import JobCard from "../JobPost/JobCard";
import Loading from "../Loading";
import { JobListCompany } from "../JobPost/JobListCompany";
import useFetch from "../../hook/useFetch";

export const ShowCV = () => {
  const { data, loading, error } = useFetch(
    "http://localhost:5000/api/jobpost/all"
  );
};
