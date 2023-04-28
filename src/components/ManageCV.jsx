import { Box, Grid, Typography, CircularProgress } from "@mui/material";
import CV1 from "../CV/CV1";
import CV2 from "../CV/CV2";
import CV3 from "../CV/CV3";
import CV4 from "../CV/CV4";
import CV5 from "../CV/CV5";
import CV6 from "../CV/CV6";
import defaultCvData from "../asset/defaultCvData.json";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";

import { toast } from "react-toastify";
import CVCard from "../CV/CVCard";

import cvSchema from "../validate/cvValidate";
import { useDispatch } from "react-redux";
import { setActivatedCvId } from "../store/userSlice";
import { ChooseCV } from "../CV/ChooseCV";
import { CVCard1 } from "../CV/CVCard1";
import useFetch from "../hook/useFetch";
import { useSelector } from "react-redux";
export default function ManageCV({ user }) {
  console.log(user);

  const role = useSelector((state) => state.user.token);
  const token = localStorage.getItem("token");

  // const { data, setData, loading, error } = useFetch(
  //   `candidate/${user.user._id}/getuserprofilecvdata`
  // );

  let { usetemplate } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const navigateTo = function (location) {
    navigate(location);
  };
  const [print, setPrint] = useState(false);
  // const loggedUserId = user.user._id;
  const [defaultCv, setDefaultCv] = useState(defaultCvData);

  console.log(usetemplate);
  // console.log(useParams());

  if (usetemplate === "useCV1") {
    return (
      <>
        <Grid
          container
          sx={{
            background: "#f1f2f7",
            p: 3,
            columnGap: 4,
            display: "flex",
            justifyContent: "center", // căn giữa theo chiều ngang
            alignItems: "center", // căn giữa theo chiều dọc
            //height: "100vh", // đặt chiều cao cho container
            mt: 20,
            //mb: 5,
          }}
        >
          <Grid item xs={6}>
            <CV1
              editable={true}
              data={defaultCv}
              print={print}
              setPrint={setPrint}
              setCVDATA={setDefaultCv}
            />
          </Grid>
          <Grid
            sx={{
              alignSelf: "center",
              display: "flex",
              justifyContent: "center",
              gap: 2,
              mt: 4,
            }}
            item
            xs={6}
          >
            <Button
              sx={{ mr: 2 }}
              variant="contained"
              color="success"
              onClick={() => {
                cvSchema.validate(defaultCv).then(async (data) => {
                  const res = await axios.post(
                    `http://localhost:5000/api/candidate/resume/create`,
                    data,
                    {
                      headers: {
                        Authorization: `Bearer ${token}`,
                      },
                    }
                  );

                  if (res.data.status && res.data.status != 200) {
                    console.log("that bai r", res);
                    toast.warning("Lưu CV thất bại");
                  } else {
                    console.log(res.data);
                    toast.success("Lưu CV thành công");
                  }
                });
              }}
            >
              Lưu CV
            </Button>
            <Button
              variant="contained"
              color="success"
              onClick={() => {
                setPrint(true);
                console.log(`12`);
              }}
            >
              IN CV
            </Button>
          </Grid>
        </Grid>
      </>
    );
  }
  if (usetemplate === "useCV2") {
    return (
      <>
        <Grid
          container
          sx={{
            background: "#f1f2f7",
            p: 3,
            columnGap: 4,
            display: "flex",
            justifyContent: "center", // căn giữa theo chiều ngang
            alignItems: "center", // căn giữa theo chiều dọc
            //height: "100vh", // đặt chiều cao cho container
            mt: 20,
            //mb: 5,
          }}
        >
          <Grid item xs={6}>
            <CV2
              editable={true}
              data={defaultCv}
              print={print}
              setPrint={setPrint}
              setCVDATA={setDefaultCv}
            />
          </Grid>
          <Grid
            sx={{
              alignSelf: "center",
              display: "flex",
              justifyContent: "center",
              gap: 2,
              mt: 4,
            }}
            item
            xs={6}
          >
            <Button
              sx={{ mr: 2 }}
              variant="contained"
              color="success"
              onClick={() => {
                cvSchema.validate(defaultCv).then(async (data) => {
                  const res = await axios.post(
                    `http://localhost:5000/api/candidate/resume/create`,
                    data,
                    {
                      headers: {
                        Authorization: `Bearer ${token}`,
                      },
                    }
                  );

                  if (res.data.status && res.data.status != 200) {
                    console.log("that bai r", res);
                    toast.warning("Lưu CV thất bại");
                  } else {
                    console.log(res.data);
                    toast.success("Lưu CV thành công");
                  }
                });
              }}
            >
              Lưu CV
            </Button>
            <Button
              variant="contained"
              color="success"
              onClick={() => {
                setPrint(true);
                console.log(`12`);
              }}
            >
              IN CV
            </Button>
          </Grid>
        </Grid>
      </>
    );
  }
  if (usetemplate === "useCV3") {
    return (
      <Grid
        container
        sx={{
          background: "#f1f2f7",
          p: 3,
          columnGap: 4,
          display: "flex",
          justifyContent: "center", // căn giữa theo chiều ngang
          alignItems: "center", // căn giữa theo chiều dọc
          //height: "100vh", // đặt chiều cao cho container
          mt: 20,
          //mb: 5,
        }}
      >
        <Grid item xs={6}>
          <CV3
            editable={true}
            data={defaultCv}
            print={print}
            setPrint={setPrint}
            setCVDATA={setDefaultCv}
          />
        </Grid>
        <Grid
          sx={{
            alignSelf: "center",
            display: "flex",
            justifyContent: "center",
            gap: 2,
            mt: 4,
          }}
          item
          xs={6}
        >
          <Button
            sx={{ mr: 2 }}
            variant="contained"
            color="success"
            onClick={() => {
              cvSchema.validate(defaultCv).then(async (data) => {
                const res = await axios.post(
                  `http://localhost:5000/api/candidate/resume/create`,
                  data,
                  {
                    headers: {
                      Authorization: `Bearer ${token}`,
                    },
                  }
                );

                if (res.data.status && res.data.status != 200) {
                  console.log("that bai r", res);
                  toast.warning("Lưu CV thất bại");
                } else {
                  console.log(res.data);
                  toast.success("Lưu CV thành công");
                }
              });
            }}
          >
            Lưu CV
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={() => {
              setPrint(true);
              console.log(`12`);
            }}
          >
            IN CV
          </Button>
        </Grid>
      </Grid>
    );
  }
  if (usetemplate === "useCV4") {
    return (
      <>
        <Grid
          container
          sx={{
            background: "#f1f2f7",
            p: 3,
            columnGap: 4,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            mt: 20,
          }}
        >
          <Grid item xs={6}>
            <CV4
              editable={true}
              data={defaultCv}
              print={print}
              setPrint={setPrint}
              setCVDATA={setDefaultCv}
            />
          </Grid>
          <Grid
            sx={{
              alignSelf: "center",
              display: "flex",
              justifyContent: "center",
              gap: 2,
              mt: 4,
            }}
            item
            xs={6}
          >
            <Button
              sx={{ mr: 2 }}
              variant="contained"
              color="success"
              onClick={() => {
                cvSchema.validate(defaultCv).then(async (data) => {
                  const res = await axios.post(
                    `http://localhost:5000/api/candidate/resume/create`,
                    data,
                    {
                      headers: {
                        Authorization: `Bearer ${token}`,
                      },
                    }
                  );

                  if (res.data.status && res.data.status != 200) {
                    console.log("that bai r", res);
                    toast.warning("Lưu CV thất bại");
                  } else {
                    console.log(res.data);
                    toast.success("Lưu CV thành công");
                  }
                });
              }}
            >
              Lưu CV
            </Button>
            <Button
              variant="contained"
              color="success"
              onClick={() => {
                setPrint(true);
                console.log(`12`);
              }}
            >
              IN CV
            </Button>
          </Grid>
        </Grid>
      </>
    );
  }
  if (usetemplate === "useCV5") {
    return (
      <>
        <Grid
          container
          sx={{
            background: "#f1f2f7",
            p: 3,
            columnGap: 4,
            display: "flex",
            justifyContent: "center", // căn giữa theo chiều ngang
            alignItems: "center", // căn giữa theo chiều dọc
            //height: "100vh", // đặt chiều cao cho container
            mt: 20,
          }}
        >
          <Grid item xs={6}>
            <CV5
              editable={true}
              data={defaultCv}
              print={print}
              setPrint={setPrint}
              setCVDATA={setDefaultCv}
            />
          </Grid>
          <Grid
            sx={{
              alignSelf: "center",
              display: "flex",
              justifyContent: "center",
              gap: 2,
              mt: 4,
            }}
            item
            xs={6}
          >
            <Button
              sx={{ mr: 2 }}
              variant="contained"
              color="success"
              onClick={() => {
                cvSchema.validate(defaultCv).then(async (data) => {
                  const res = await axios.post(
                    `http://localhost:5000/api/candidate/resume/create`,
                    data,
                    {
                      headers: {
                        Authorization: `Bearer ${token}`,
                      },
                    }
                  );

                  if (res.data.status && res.data.status != 200) {
                    console.log("that bai r", res);
                    toast.warning("Lưu CV thất bại");
                  } else {
                    console.log(res.data);
                    toast.success("Lưu CV thành công");
                  }
                });
              }}
            >
              Lưu CV
            </Button>
            <Button
              variant="contained"
              color="success"
              onClick={() => {
                setPrint(true);
                console.log(`12`);
              }}
            >
              IN CV
            </Button>
          </Grid>
        </Grid>
      </>
    );
  }
  if (usetemplate === "useCV6") {
    return (
      <>
        <Grid
          container
          sx={{
            background: "#f1f2f7",
            p: 3,
            columnGap: 4,
            display: "flex",
            justifyContent: "center", // căn giữa theo chiều ngang
            alignItems: "center", // căn giữa theo chiều dọc
            //height: "100vh", // đặt chiều cao cho container
            mt: 20,
            //mb: 5,
          }}
        >
          <Grid item xs={6}>
            <CV6
              editable={true}
              data={defaultCv}
              print={print}
              setPrint={setPrint}
              setCVDATA={setDefaultCv}
            />
          </Grid>
          <Grid
            sx={{
              alignSelf: "center",
              display: "flex",
              justifyContent: "center",
              gap: 2,
              mt: 4,
            }}
            item
            xs={6}
          >
            <Button
              sx={{ mr: 2 }}
              variant="contained"
              color="success"
              onClick={() => {
                cvSchema.validate(defaultCv).then(async (data) => {
                  const res = await axios.post(
                    `http://localhost:5000/api/candidate/resume/create`,
                    data,
                    {
                      headers: {
                        Authorization: `Bearer ${token}`,
                      },
                    }
                  );

                  if (res.data.status && res.data.status != 200) {
                    console.log("that bai r", res);
                    toast.warning("Lưu CV thất bại");
                  } else {
                    console.log(res.data);
                    toast.success("Lưu CV thành công");
                  }
                });
              }}
            >
              Lưu CV
            </Button>
            <Button
              variant="contained"
              color="success"
              onClick={() => {
                setPrint(true);
                console.log(`12`);
              }}
            >
              IN CV
            </Button>
          </Grid>
        </Grid>
      </>
    );
  }
}
