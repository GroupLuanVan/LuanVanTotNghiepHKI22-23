import {
  Autocomplete,
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  OutlinedInput,
  TextField,
  Typography,
  Input,
} from "@mui/material";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { useNavigate, BrowserRouter, Route, Routes } from "react-router-dom";
import PhotoCameraRoundedIcon from "@mui/icons-material/PhotoCameraRounded";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Editor, EditorState, convertToRaw } from "draft-js";
import "draft-js/dist/Draft.css";
import ApartmentIcon from "@mui/icons-material/Apartment";
import env from "../../asset/env.json";
import logoImage from "../../asset/camera_icon.png";
import logoTest from "../../asset/Logo_Silicon.jpg";
import Image from "mui-image";
import { useEffect, useState, useRef } from "react";
import RichText from "../../components/RichText";
import axios from "axios";
import { maxHeight, maxWidth } from "@mui/system";
import { useDispatch } from "react-redux";
import useFetch from "../../hook/useFetch";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
export default function Company({ user }) {
  const idcompany = useSelector((state) => state.user.idCompany);
  console.log(idcompany);
  const imageRef = useRef();
  const dispatch = useDispatch();
  const [avatar, setAvatar] = useState(logoImage);
  const [skills, setSkills] = useState(() => EditorState.createEmpty());
  const [education, setEducation] = useState(() => EditorState.createEmpty());

  const [target, setTarget] = useState(() => EditorState.createEmpty());
  const [activity, setActivity] = useState(() => EditorState.createEmpty());
  const [certificate, setCertificate] = useState(() =>
    EditorState.createEmpty()
  );
  const [aboutMe, setAboutMe] = useState(() => EditorState.createEmpty());
  const [experience, setExperience] = useState(() => EditorState.createEmpty());
  const [userData, setUserData] = useState({
    candidate: "",
    dob: "",
    gender: "",
    email: "",
    phone: "",
    avatar: "",
    addressId: "",
    fullAddress: "",

    skillsCv: JSON.stringify(convertToRaw(skills.getCurrentContent())),
    educationCv: JSON.stringify(convertToRaw(education.getCurrentContent())),
    objectiveCv: JSON.stringify(convertToRaw(target.getCurrentContent())),
    activitiesCv: JSON.stringify(convertToRaw(activity.getCurrentContent())),
    certificationsCv: JSON.stringify(
      convertToRaw(certificate.getCurrentContent())
    ),
    aboutMe: JSON.stringify(convertToRaw(aboutMe.getCurrentContent())),
    experienceCv: JSON.stringify(convertToRaw(experience.getCurrentContent())),
  });

  const navigate = useNavigate();
  const [logo, setLogo] = useState(logoImage);

  // export const imageUpload = async (file) => {
  //   //name
  //   const formData = new FormData();
  //   formData.append("file", file);
  //   formData.append("upload_preset", "presetabc");
  //   formData.append("cloud_name", "abc");

  //   const res = await fetch("https://api.cloudinary.com/v1_1/abc/upload", {
  //     method: "POST",
  //     body: formData,
  //   });

  //   const data = await res.json();

  //   return { public_id: data.public_id, url: data.secure_url };
  // };

  // export const checkImage = (file) => {
  //   const types = ["image/png",]

  const [data, setData] = useState({
    email: "",
    nameCompany: "",
    location: "",
    phone: 0,
    detailAdress: "",
    foundingAt: "",
    introduce: "",
    linkToLogo: "",
    members: "",
    //introduce: JSON.stringify(convertToRaw(introduce.getCurrentContent())),
  });

  const [introduce, setIntroduce] = useState("");
  const companyIn4 = useFetch(`http://localhost:5000/api/company/${idcompany}`);
  console.log(companyIn4?.data);

  useEffect(() => {
    setData({
      ...data,
      introduce: introduce,
    });
  }, [introduce]);

  console.log(data);

  const updateCompany = async function () {
    const token = localStorage.getItem("token"); // Lấy token từ local storage
    console.log({ ...data, introduce });
    const res = await axios.post(
      "http://localhost:5000/api/company/updateinfo",
      {
        ...data,
        introduce,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`, // Thêm token vào header Authorization
        },
      }
    );
    if (res.data && res.data.status && res.data.status !== 200) {
      console.log(res);
      toast.warning("Cập nhật thất bại");
    } else {
      toast.success("Cập nhật công ty thành công");
    }
  };

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    const logoUrl = URL.createObjectURL(file);
    setData({
      ...data,
      linkToLogo: logoUrl,
    });
  };

  return (
    <>
      {/* Header */}
      <Box
        maxWidth={1200}
        margin="auto"
        marginTop={25}
        marginBottom={8}
        marginLeft={45}
        sx={{
          backgroundColor: "#fff",
          borderRadius: "4px",
          boxShadow: "0 1px 3px 0 rgba(0,0,0,0.15)",
          padding: "32px",
        }}
      >
        <Box
          sx={{
            p: 0,
            borderBottom: "1px solid rgba(0,0,0,0.1)",
            display: "flex",
            alignItems: "center",
            background: "#fff",
            mt: 5,
          }}
        >
          <ApartmentIcon />
          <Typography variant="h5" fontWeight={550} sx={{ ml: 1 }}>
            Cập nhật thông tin công ty
          </Typography>
        </Box>
        {/* head info */}
        <Grid
          container
          sx={{
            p: 2,
            rowGap: 2,
            columnGap: 2,
            background: "#fff",
            mb: 2,
            alignItems: "center",
          }}
        >
          <Grid
            container
            item
            xs={12}
            sx={{
              rowGap: 2,
              columnGap: 4,
              background: "#fff",
              alignItems: "center",
            }}
          >
            <Grid item xs={2}>
              <Image
                src={companyIn4?.data?.linkToLogo}
                onClick={() => {
                  imageRef.current.click();
                }}
                sx={{
                  borderRadius: "100%",
                  border: "1px solid gray",
                }}
                width="200px"
                height="200px"
                duration={0}
                fit="scale-down"
              ></Image>
              {/* <OutlinedInput
                fullWidth
                color="success"
                type="file"
                size="small"
                inputRef={imageRef}
                sx={{
                  mt: 1,
                  display: "none",
                }}
                onChange={(e) => {
                  const fileReader = new FileReader();
                  fileReader.onloadend = () => {
                    setAvatar(fileReader.result);
                    setData({
                      ...data,
                      linkToLogo: fileReader.result,
                    });
                  };
                  fileReader.readAsDataURL(e.target.files[0]);
                }}
              /> */}
            </Grid>
            <Grid
              container
              item
              xs={9}
              sx={{
                rowGap: 2,
                columnGap: 2,
              }}
            >
              <Grid item xs={11.2}>
                <Typography variant="p" fontWeight={500}>
                  Tên công ty
                </Typography>
                <OutlinedInput
                  fullWidth
                  color="success"
                  size="small"
                  sx={{ mt: 1 }}
                  placeholder="FPT"
                  onBlur={(e) => {
                    setData({
                      ...data,
                      nameCompany: e.target.value,
                    });
                  }}
                />
              </Grid>

              <Grid item xs={5}>
                <Typography variant="p" fontWeight={500}>
                  Email
                </Typography>
                <OutlinedInput
                  fullWidth
                  color="success"
                  size="small"
                  sx={{ mt: 1 }}
                  placeholder="congty@gmail.com"
                  onBlur={(e) => {
                    setData({
                      ...data,
                      email: e.target.value,
                    });
                  }}
                />
              </Grid>
              <Grid item xs={3}>
                <Typography variant="p" fontWeight={500}>
                  Số điện thoại
                </Typography>
                <OutlinedInput
                  fullWidth
                  color="success"
                  size="small"
                  sx={{ mt: 1 }}
                  placeholder="0808123789"
                  onBlur={(e) => {
                    setData({
                      ...data,
                      phone: e.target.value,
                    });
                  }}
                />
              </Grid>
              <Grid item xs={3}>
                <Typography variant="p" fontWeight={500}>
                  Địa chỉ
                </Typography>
                <OutlinedInput
                  fullWidth
                  color="success"
                  size="small"
                  sx={{ mt: 1 }}
                  placeholder="TP Hồ Chí Minh"
                  onBlur={(e) => {
                    setData({
                      ...data,
                      location: e.target.value,
                    });
                  }}
                />
              </Grid>

              <Grid item xs={11.2}>
                <Typography variant="p" fontWeight={500}>
                  Địa chỉ cụ thể
                </Typography>
                <OutlinedInput
                  fullWidth
                  color="success"
                  size="small"
                  sx={{ mt: 1 }}
                  placeholder="Ấp Thạnh Điền, Thị Trấn Phú Lộc, Thạnh Trị, Sóc Trăng"
                  onBlur={(e) => {
                    setData({
                      ...data,
                      detailAdress: e.target.value,
                    });
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* body info */}
        <Box
          sx={{
            p: 2,
            borderBottom: "1px solid rgba(0,0,0,0.1)",
            display: "flex",
            alignItems: "center",
            background: "#fff",
          }}
        >
          <InfoOutlinedIcon fontSize="small" />
          <Typography variant="p" fontWeight={500} sx={{ ml: 1 }}>
            Thông tin chung
          </Typography>
        </Box>
        <Grid
          container
          sx={{ p: 2, rowGap: 1, columnGap: 2, background: "#fff", mb: 2 }}
        >
          <Grid container item xs={12} sx={{ columnGap: 2 }}>
            <Grid item xs={3}>
              <Typography variant="p">Quy mô công ty</Typography>
              <OutlinedInput
                fullWidth
                size="small"
                sx={{ mt: 1 }}
                type="number"
                placeholder="Số nhân viên"
                onBlur={(e) => {
                  setData({
                    ...data,
                    members: e.target.value,
                  });
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <Typography variant="p">Ngày thành lập</Typography>
              <OutlinedInput
                fullWidth
                size="small"
                sx={{ mt: 1 }}
                type="date"
                placeholder="Số lượng cần tuyển"
                onBlur={(e) => {
                  setData({
                    ...data,
                    foundingAt: e.target.value,
                  });
                }}
              />
            </Grid>
            {/* <Grid item xs={4}>
              <Typography variant="p">Chọn logo</Typography>
              <OutlinedInput
                fullWidth
                type="file"
                size="small"
                sx={{ mt: 1 }}
                onChange={(e) => {
                  setData({
                    ...data,
                    linkToLogo: e.target.value,
                  });
                  const fileReader = new FileReader();

                  fileReader.readAsDataURL(e.target.files[0]);
                }}
              />
            </Grid> */}
            {/* <Grid item xs={4}>
              <Typography variant="p">Chọn logo</Typography>
              <OutlinedInput
                fullWidth
                type="file"
                size="small"
                sx={{ mt: 1 }}
                onChange={handleLogoChange}
              />
              {data.linkToLogo && (
                <img src={data.linkToLogo} alt="Logo Preview" />
              )}
            </Grid> */}
            <Grid item xs={3} sx={{}}>
              <Image
                src={avatar}
                onClick={() => {
                  imageRef.current.click();
                }}
                sx={{
                  border: "1px solid gray",
                }}
                width="50%"
                height="50%"
                duration={0}
                fit="scale-down"
              ></Image>

              <OutlinedInput
                fullWidth
                color="success"
                type="file"
                size="small"
                inputRef={imageRef}
                sx={{
                  mt: 1,
                  display: "none",
                }}
                onChange={(e) => {
                  const fileReader = new FileReader();
                  fileReader.onloadend = () => {
                    setAvatar(fileReader.result);
                    setData({
                      ...data,
                      linkToLogo: fileReader.result,
                    });
                  };
                  fileReader.readAsDataURL(e.target.files[0]);
                }}
              />
            </Grid>
          </Grid>
          {/* <Grid item xs={12}>
            <Typography variant="p">
              Khu vực làm việc{" "}
              <Typography variant="span" sx={{ color: "rgba(0,0,0,0.6)" }}>
                (Địa chỉ cụ thể)
              </Typography>
            </Typography>
            <OutlinedInput
              fullWidth
              size="small"
              sx={{ mt: 1 }}
              placeholder="Số 7, Ngô Tất Tố, KDC 91B, Phường An khánh, Ninh Kiều, Cần Thơ"
            />
          </Grid> */}
        </Grid>
        <Box
          sx={{
            p: 2,
            borderBottom: "1px solid rgba(0,0,0,0.1)",
            display: "flex",
            alignItems: "center",
            background: "#fff",
          }}
        >
          <InfoOutlinedIcon fontSize="small" />
          <Typography variant="p" fontWeight={500} sx={{ ml: 1 }}>
            Giới thiệu công ty
          </Typography>
        </Box>
        <Grid
          container
          sx={{ p: 2, rowGap: 1, columnGap: 2, background: "#fff", mb: 2 }}
        >
          <Grid item xs={12}>
            {/* <RichText editorState={introduce} setEditorState={setIntroduce} /> */}

            <TextField
              sx={{
                mt: 2,
              }}
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              placeholder="Nhập mô tả công việc"
              value={introduce}
              onChange={(e) => setIntroduce(e.target.value)}
            />
          </Grid>
          <Button
            onClick={updateCompany}
            sx={{ mt: 1, minWidth: 200, mr: "auto" }}
            size="small"
            variant="contained"
          >
            Cập nhật
          </Button>
        </Grid>
      </Box>
    </>
  );
}
