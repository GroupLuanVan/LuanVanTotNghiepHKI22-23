// import React from "react";
// import { Box, Button, Grid, Typography } from "@mui/material";
// import { AccountCircle, Person } from "@mui/icons-material";

// const RegisterAccount = () => {
//   return (
//     <Box sx={{ mt: 20, display: "flex", justifyContent: "center" }}>
//       <Grid justifyContent="center" alignItems="center">
//         <Grid item xs={12} sm={8} md={6}>
//           <Box sx={{ mb: 3 }}>
//             <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
//               Tạo tài khoản
//             </Typography>
//             <Typography
//               variant="subtitle1"
//               sx={{
//                 display: "flex",
//                 justifyContent: "center",
//                 color: "text.secondary",
//               }}
//             >
//               Chọn kiểu của bạn
//             </Typography>
//           </Box>
//           <Box sx={{ mb: 3 }}>
//             <Button
//               variant="contained"
//               color="primary"
//               size="large"
//               startIcon={<Person />}
//             >
//               Job Seeker
//             </Button>
//           </Box>
//           <Box sx={{ mb: 3 }}>
//             <Button
//               variant="contained"
//               color="secondary"
//               size="large"
//               startIcon={<AccountCircle />}
//             >
//               Employer
//             </Button>
//           </Box>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default RegisterAccount;

// import * as React from "react";
// import { Grid, Button, Avatar, Typography } from "@mui/material";

// const RegisterOption = () => {
//   const handleRegisterEmployer = () => {
//     // TODO: Handle register for employer
//   };

//   const handleRegisterJobSeeker = () => {
//     // TODO: Handle register for job seeker
//   };

//   return (
//     <Grid
//       container
//       direction="column"
//       alignItems="center"
//       justifyContent="center"
//       height="100vh"
//     >
//       <Grid item>
//         <Typography variant="h4" component="h1" gutterBottom>
//           Chọn tài khoản đăng ký
//         </Typography>
//       </Grid>
//       <Grid item>
//         <Button
//           variant="contained"
//           size="large"
//           onClick={handleRegisterEmployer}
//           sx={{ width: "300px", mb: 2 }}
//         >
//           <Grid container spacing={2} alignItems="center">
//             <Grid item>
//               <Avatar alt="Employer" src="/assets/images/employer.png" />
//             </Grid>
//             <Grid item>
//               <Typography variant="subtitle1">Nhà tuyển dụng</Typography>
//             </Grid>
//           </Grid>
//         </Button>
//       </Grid>
//       <Grid item>
//         <Button
//           variant="outlined"
//           size="large"
//           onClick={handleRegisterJobSeeker}
//           sx={{ width: "300px" }}
//         >
//           <Grid container spacing={2} alignItems="center">
//             <Grid item>
//               <Avatar alt="Job seeker" src="/assets/images/job-seeker.png" />
//             </Grid>
//             <Grid item>
//               <Typography variant="subtitle1">Người tìm việc</Typography>
//             </Grid>
//           </Grid>
//         </Button>
//       </Grid>
//     </Grid>
//   );
// };

// export default RegisterOption;

// import {
//   Box,
//   Button,
//   Grid,
//   Paper,
//   Radio,
//   RadioGroup,
//   Stack,
//   Typography,
// } from "@mui/material";

// const ChooseAccountTypeForm = () => {
//   return (
//     <Box sx={{ p: 3 }}>
//       <Paper elevation={3} sx={{ p: 3 }}>
//         <Grid container spacing={3}>
//           <Grid item xs={12}>
//             <Typography variant="h6">Choose account type</Typography>
//           </Grid>
//           <Grid item xs={12}>
//             <RadioGroup aria-label="accountType" name="accountType">
//               <Stack direction="column" spacing={2}>
//                 <Box
//                   sx={{
//                     p: 2,
//                     borderRadius: 1,
//                     backgroundColor: "secondary.main",
//                     color: "white",
//                   }}
//                 >
//                   <Radio value="employer" sx={{ color: "white" }} />
//                   <Typography variant="h6" sx={{ ml: 2 }}>
//                     Employer
//                   </Typography>
//                   <Typography variant="body1" sx={{ ml: 2 }}>
//                     Post job openings and manage applicants
//                   </Typography>
//                 </Box>
//                 <Box sx={{ p: 2, borderRadius: 1 }}>
//                   <Radio value="jobseeker" />
//                   <Typography variant="h6" sx={{ ml: 2 }}>
//                     Job Seeker
//                   </Typography>
//                   <Typography variant="body1" sx={{ ml: 2 }}>
//                     Create a profile and find job opportunities
//                   </Typography>
//                 </Box>
//               </Stack>
//             </RadioGroup>
//           </Grid>
//           <Grid item xs={12}>
//             <Button variant="contained" color="primary" fullWidth>
//               Next
//             </Button>
//           </Grid>
//         </Grid>
//       </Paper>
//     </Box>
//   );
// };
// export default ChooseAccountTypeForm;

import { useState } from "react";
import { Box, Button, Grid, Icon, Typography } from "@mui/material";
import { AccountCircle, Person, Business } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const RegisterOption = () => {
  const navigate = useNavigate();
  const [accountType, setAccountType] = useState("");

  const handleAccountTypeClick = (type) => {
    setAccountType(type);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      marginTop="270px"
      marginBottom={"280px"}
      marginLeft={"620px"}
      borderRadius={5}
      boxShadow={"5px 10px 20px #ccc"}
      sx={{
        ":hover": {
          boxShadow: "10px 10px 20px #ccc ",
        },
        height: "250px",
        maxWidth: "600px", // Giảm chiều ngang của box cha bao bọc bên ngoài
      }}
    >
      <Typography marginTop={"45px"} variant="h4" gutterBottom>
        Choose Account Type
      </Typography>
      <Box container spacing={0}>
        <Button
          width="50%"
          variant="contained"
          color="primary"
          // onClick={() => handleAccountTypeClick("jobSeeker")}
          onClick={() => {
            navigate("/Rseeker");
          }}
          sx={{
            borderRadius: 2,
            marginRight: "20px",
            fontSize: { xs: "1rem", md: "1.2rem" },
            py: { xs: 2, md: 3 },
          }}
        >
          <Icon component={Person} sx={{ mr: 1 }} />
          Job Seeker
        </Button>

        <Button
          width="50%"
          variant="contained"
          color="primary"
          // onClick={() => handleAccountTypeClick("employer")}
          onClick={() => {
            navigate("/Remployer");
          }}
          sx={{
            borderRadius: 2,
            marginLeft: "30px",
            fontSize: { xs: "1rem", md: "1.2rem" },
            py: { xs: 2, md: 3 },
          }}
        >
          <Icon component={Business} sx={{ mr: 1 }} />
          Employer
        </Button>
      </Box>
      {/* {accountType && (
        <Typography variant="body1" sx={{ mt: 2 }}>
          You selected {accountType} account type.
        </Typography>
      )} */}
    </Box>
  );
};

export default RegisterOption;
