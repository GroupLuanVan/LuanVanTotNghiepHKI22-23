import { Divider, Grid, Typography, Button } from "@mui/material";
import CV1 from "../CV/CV1";
import CV2 from "../CV/CV2";
import CV3 from "../CV/CV3";
import CV4 from "../CV/CV4";
import CV5 from "../CV/CV5";
import CV6 from "../CV/CV4";

import useFetch from "../hook/useFetch";
import { useSelector } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
export default function ViewCV() {
  const location = useLocation();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const resumeId =
    location.pathname.split("/")[location.pathname.split("/").length - 1];
  const [print, setPrint] = useState(false);
  console.log(resumeId);
  const token = localStorage.getItem("token");
  useEffect(() => {
    console.log(resumeId);
    async function fetchData() {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/resume/viewcv/${resumeId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  console.log(data);
  return (
    <>
      <Grid
        container
        sx={{
          background: "#f1f2f7",
          p: 3,
          columnGap: 4,
          justifyContent: "center",
          mt: 20,
        }}
      >
        <Grid item xs={6}>
          {data.cv.cvTemplate === "CV1" && (
            <CV1
              editable={false}
              print={print}
              setPrint={setPrint}
              data={data.cv}
            />
          )}
          {data.cv.cvTemplate === "CV2" && (
            <CV2
              editable={false}
              print={print}
              setPrint={setPrint}
              data={data.cv}
            />
          )}
          {data.cv.cvTemplate === "CV3" && (
            <CV3
              editable={false}
              print={print}
              setPrint={setPrint}
              data={data.cv}
            />
          )}
          {data.cv.cvTemplate === "CV4" && (
            <CV4
              editable={false}
              print={print}
              setPrint={setPrint}
              data={data.cv}
            />
          )}
          {data.cv.cvTemplate === "CV5" && (
            <CV5
              editable={false}
              print={print}
              setPrint={setPrint}
              data={data.cv}
            />
          )}
          {data.cv.cvTemplate === "CV6" && (
            <CV5
              editable={false}
              print={print}
              setPrint={setPrint}
              data={data.cv}
            />
          )}
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            alignSelf: "center",
            display: "flex",
            justifyContent: "center",
            gap: 2,
            mt: 4,
          }}
        >
          <Button
            variant="contained"
            color="error"
            onClick={() => {
              navigate(-1);
            }}
          >
            Trở lại
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={() => setPrint(true)}
          >
            Xuất CV
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
