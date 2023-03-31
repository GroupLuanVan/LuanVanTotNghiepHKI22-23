import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Chip,
  Button,
  Grid,
  Input,
  Typography,
  Autocomplete,
  TextField,
} from "@mui/material";
import { useRef, useState } from "react";
import logoImage from "../CV/cv1image.png";
import test from "../CV/cv2image.png";
import EditIcon from "@mui/icons-material/Edit";
import Image from "mui-image";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { CVCard1 } from "../CV/CVCard1";
import CV1 from "../CV/CV1";
import CV2 from "../CV/CV2";
import CV3 from "../CV/CV3";
export const PopCV = ({ show, setShow, selectedItem, template, image }) => {
  const [tempData, setTempData] = useState();

  const imageRef = useRef();

  let navigate = useNavigate();

  console.log({ template, image });

  return (
    <>
      <Box>
        <Dialog
          open={show}
          onClose={() => {
            setShow(false);
          }}
          fullWidth
          maxWidth="lg" //  custom (   'xs' 'sm''md''lg' 'xl' false string )
        >
          <DialogTitle variant="h4">Mẫu CV</DialogTitle>
          <DialogContent>
            <Grid
              item
              container
              xs={12}
              sx={{
                display: "flex",
                width: "100%",
                gap: 4,
              }}
            >
              <Grid
                item
                xs={8}
                sx={{
                  borderRadius: "25px",
                  background: "#fff",
                  p: 2,
                  boxShadow: "1px 1px 5px 1px blue",
                }}
              >
                <Image
                  //src={avatar}
                  src={image}
                  alt="avatar"
                  sx={{
                    border: "1px solid gray",
                  }}
                  width="100%"
                  height="100%"
                  duration={0}
                  fit="scale-down"
                ></Image>
              </Grid>

              <Grid
                item
                xs={3}
                sx={{
                  borderRadius: "25px",
                  background: "#fff",
                  p: 2,
                  boxShadow: "1px 1px 5px 1px red",
                  //mx: "auto",
                  //    display :"flex",
                }}
              >
                <Typography variant="h5">Mẫu CV Cho Bạn</Typography>
                <Grid
                  sx={{
                    mt: 5,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    variant="contained"
                    color="success"
                    //onClick={onClick}
                    onClick={() => {
                      navigate(`/use${template}`);
                      console.log(template);
                    }}
                    sx={{
                      width: "300px",
                      height: "50px",
                    }}
                  >
                    Dùng Mẫu Này
                  </Button>
                </Grid>

                <Grid
                  sx={{
                    mt: 4,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    variant="contained"
                    color="warning"
                    onClick={() => {
                      setShow(false);
                    }}
                    sx={{
                      width: "300px",
                      height: "50px",
                    }}
                  >
                    Hủy bỏ
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </DialogContent>
        </Dialog>
      </Box>
    </>
  );
  // return (
  //   <>
  //     <Box>
  //       <Dialog
  //         open={show}
  //         onClose={() => {
  //           setShow(false);
  //         }}
  //         fullWidth
  //         maxWidth="lg" //  custom (   'xs' 'sm''md''lg' 'xl' false string )
  //       >
  //         <DialogTitle variant="h4">Mẫu CV</DialogTitle>
  //         <DialogContent>
  //           <Grid
  //             item
  //             container
  //             xs={12}
  //             sx={{
  //               display: "flex",
  //               width: "100%",
  //               gap: 4,
  //             }}
  //           >
  //             <Grid
  //               item
  //               xs={8}
  //               sx={{
  //                 borderRadius: "25px",
  //                 background: "#fff",
  //                 p: 2,
  //                 boxShadow: "1px 1px 5px 1px blue",
  //               }}
  //             >
  //               <Image
  //                 //src={avatar}
  //                 src={image}
  //                 alt="avatar"
  //                 sx={{
  //                   border: "1px solid gray",
  //                 }}
  //                 width="100%"
  //                 height="100%"
  //                 duration={0}
  //                 fit="scale-down"
  //               ></Image>
  //             </Grid>

  //             <Grid
  //               item
  //               xs={3}
  //               sx={{
  //                 borderRadius: "25px",
  //                 background: "#fff",
  //                 p: 2,
  //                 boxShadow: "1px 1px 5px 1px red",
  //                 //mx: "auto",
  //                 //    display :"flex",
  //               }}
  //             >
  //               <Typography variant="h5">Mẫu CV Cho Bạn</Typography>
  //               <Grid
  //                 sx={{
  //                   mt: 5,
  //                   display: "flex",
  //                   justifyContent: "center",
  //                 }}
  //               >
  //                 <Button
  //                   variant="contained"
  //                   color="success"
  //                   onClick={onClick}
  //                   sx={{
  //                     width: "300px",
  //                     height: "50px",
  //                   }}
  //                 >
  //                   Dùng Mẫu Này
  //                 </Button>
  //               </Grid>

  //               <Grid
  //                 sx={{
  //                   mt: 4,
  //                   display: "flex",
  //                   justifyContent: "center",
  //                 }}
  //               >
  //                 <Button
  //                   variant="contained"
  //                   color="warning"
  //                   onClick={() => {
  //                     setShow(false);
  //                   }}
  //                   sx={{
  //                     width: "300px",
  //                     height: "50px",
  //                   }}
  //                 >
  //                   Hủy bỏ
  //                 </Button>
  //               </Grid>
  //             </Grid>
  //           </Grid>
  //         </DialogContent>
  //       </Dialog>
  //     </Box>
  //   </>
  // );
};
