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
} from "@mui/material";
import Image from "../../asset/5.jpg";
import { red } from "@mui/material/colors";
export const JobList = () => {
  return (
    <>
      <Box
        sx={{
          background: "linear-gradient(to left, #8cebc84a, transparent)",
          mb: 0,
          p: 20,
          position: "relative",
        }}
      >
        <img
          src={Image}
          alt="background"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>

      <Box display={"flex"} justifyContent={"center"} marginTop={-22}>
        <Box
          display="flex"
          flexDirection={"column"}
          alignItems="center"
          justifyContent={"center"}
          margin="auto"
          padding={3}
          borderRadius={5}
          boxShadow={"5px 10px 20px #ccc"}
          backgroundColor="white"
          zIndex={999}
          sx={{
            mt: "7rem",
            flexDirection: "column",

            ":hover": {
              boxShadow: "10px 10px 20px #ccc ",
            },
            height: "100px",
            width: "1000px",
          }}
        >
          <Typography variant="h4" fontWeight="550" gutterBottom>
            Tìm kiếm công việc phù hợp với bạn
          </Typography>
          <Box
            sx={{
              display: "flex",
              //flexWrap: "wrap",
              zIndex: 1,
            }}
          >
            <TextField
              // onFocus={() => {
              //   setDisplayFilterBox("block");
              // }}

              size="small"
              sx={{ width: "100%", zIndex: 1, backgroundColor: "white" }}
              id="outlined-start-adornment"
              color="success"
              label="Từ Khóa"
              //onBlur={(e) => setKeyWord(e.target.value)}
              inputProps={{
                startAdornment: (
                  <InputAdornment position="start">Nguyen</InputAdornment>
                ),
              }}
            />
            <TextField
              // onFocus={() => {
              //   setDisplayFilterBox("block");
              // }}
              background="white"
              size="small"
              sx={{
                width: "100%",
                marginLeft: "25px",
                zIndex: 1,
                backgroundColor: "white",
              }}
              id="outlined-start-adornment"
              color="success"
              label="Địa Điểm"
              //onBlur={(e) => setKeyWord(e.target.value)}
              inputProps={{
                startAdornment: (
                  <InputAdornment position="start">kg</InputAdornment>
                ),
              }}
            />
            <Button
              size="small"
              sx={{
                ml: 2,
                width: "350px",
              }}
              variant="contained"
              color="success"
              // onClick={() => {
              //   navigate({
              //     pathname: "/jobs",
              //     search: keyWord ? `?job=${keyWord}` : "",
              //   });
              // }}
            >
              Tìm việc ngay
            </Button>
          </Box>
        </Box>
      </Box>

      <Box marginLeft={40} marginTop={10} marginBottom={10}>
        <Grid container spacing={5}>
          <Grid item xs={6} md={3} spacing={4}>
            <Typography>Danh mục</Typography>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2">
                  Nguyen Huu Thai
                </Typography>
                <Typography variant="body2" component="p">
                  Mang may tinh va truyen thong
                </Typography>
              </CardContent>

              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2">
                  Nguyen Huu Thai2
                </Typography>
                <Typography variant="body2" component="p">
                  Mang may tinh va truyen thong2
                </Typography>
              </CardContent>

              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={6} md={6} spacing={0}>
            <Typography>Công Việc Tìm Được</Typography>

            <Grid item xs={12} md={12}>
              <Box
                // display={"flex"}
                // justifyContent={"center"}
                marginTop={-12}
                marginBottom={5}
              >
                <Box
                  display="flex"
                  //flexDirection={"column"}
                  // alignItems="center"
                  // justifyContent={"center"}
                  // margin="auto"
                  padding={3}
                  borderRadius={5}
                  boxShadow={"5px 10px 20px #ccc"}
                  backgroundColor="white"
                  zIndex={999}
                  sx={{
                    mt: "7rem",
                    flexDirection: "column",

                    ":hover": {
                      boxShadow: "10px 10px 20px #ccc ",
                    },
                  }}
                >
                  {/* <Typography variant="h6" fontWeight="5500" gutterBottom>
                  Tìm kiếm công việc phù hợp với bạn
                </Typography> */}
                  <Box
                    sx={{
                      display: "flex",
                      //flexWrap: "wrap",
                    }}
                  >
                    <Typography variant="h6" fontWeight="550" gutterBottom>
                      Email me jobs like this
                    </Typography>
                    <TextField
                      size="small"
                      sx={{
                        width: "100%",
                        zIndex: 1,
                        backgroundColor: "white",
                      }}
                      id="outlined-start-adornment"
                      color="success"
                      label="Từ Khóa"
                    />

                    <Button
                      //size="small"
                      sx={{
                        ml: 2,
                        width: "250px",
                        height: "40px",
                      }}
                      variant="contained"
                      color="success"
                    >
                      Tìm việc ngay
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2">
                  Nguyen Huu Thai3
                </Typography>
                <Typography variant="body2" component="p">
                  Mang may tinh va truyen thong3
                </Typography>
              </CardContent>

              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>

            <Card>
              <CardContent>
                <Typography variant="h5" component="h2">
                  Nguyen Huu Thai4
                </Typography>
                <Typography variant="body2" component="p">
                  Mang may tinh va truyen thong4
                </Typography>
              </CardContent>

              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2">
                  Nguyen Huu Thai5
                </Typography>
                <Typography variant="body2" component="p">
                  Mang may tinh va truyen thong5
                </Typography>
              </CardContent>

              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
