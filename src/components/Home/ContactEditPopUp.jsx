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
import { useRef, useState, useEffect } from "react";
import logoImage from "../../asset/camera_icon.png";
import EditIcon from "@mui/icons-material/Edit";
import Image from "mui-image";
import axios from "axios";

export default function ContactEditPopUp({ show, setShow, data, setData }) {
  const [tempData, setTempData] = useState();
  const [address, setAddress] = useState([]);
  const [avatar, setAvatar] = useState(logoImage);
  const imageRef = useRef();
  function updateData() {
    console.log(tempData);
    setData({
      ...data,
      ...tempData,
    });
    setShow(false);
  }

  const gender = () => {
    return [
      { id: 1, title: "Nam" },
      { id: 2, title: "Nữ" },
    ];
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/address")
      .then((res) => {
        setAddress(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleAddressesChange = (event, value) => {
    setData({
      ...data,
      addressId: value ? value._id : "",
    });
  };

  return (
    <>
      <Dialog
        open={show}
        onClose={() => {
          setShow(false);
        }}
        fullWidth
        maxWidth="md"
      >
        <DialogTitle>Chỉnh sửa thông tin chung</DialogTitle>
        <DialogContent>
          <Grid
            container
            sx={{
              m: 2,
              columnGap: 3,
              width: "100%",
              mx: "auto",
              rowGap: 4,
            }}
          >
            <Grid item xs={3} sx={{}}>
              <Image
                src={avatar}
                onClick={() => {
                  imageRef.current.click();
                }}
                sx={{
                  border: "1px solid gray",
                }}
                width="100%"
                height="100%"
                duration={0}
                fit="scale-down"
              ></Image>
              <Input
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
                    setTempData({
                      ...tempData,
                      avatar: fileReader.result,
                    });
                  };
                  fileReader.readAsDataURL(e.target.files[0]);
                }}
              />
            </Grid>
            <Grid
              container
              item
              xs={8}
              sx={{
                rowGap: 2,
                columnGap: 2,
              }}
            >
              <Grid item xs={6}>
                <Typography variant="p" fontWeight={500}>
                  Họ và tên
                </Typography>
                <Input
                  fullWidth
                  color="success"
                  size="small"
                  sx={{ mt: 1 }}
                  placeholder="Nguyễn Văn A"
                  onBlur={(e) => {
                    setTempData({
                      ...tempData,
                      name: e.target.value,
                    });
                  }}
                />
              </Grid>
              <Grid item xs={5}>
                <Typography variant="p" fontWeight={500}>
                  Ngày sinh
                </Typography>
                <Input
                  color="success"
                  fullWidth
                  size="small"
                  sx={{ mt: 1 }}
                  type="date"
                  onChange={(e) => {
                    setTempData({
                      ...tempData,
                      dob: e.target.value,
                    });
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <Typography variant="p" fontWeight={500}>
                  Email
                </Typography>
                <Input
                  fullWidth
                  color="success"
                  size="small"
                  sx={{ mt: 1 }}
                  placeholder="congphongkiemsi@gmail.com"
                  onBlur={(e) => {
                    setTempData({
                      ...tempData,
                      email: e.target.value,
                    });
                  }}
                />
              </Grid>
              <Grid item xs={5}>
                <Typography variant="p" fontWeight={500}>
                  Số điện thoại
                </Typography>
                <Input
                  fullWidth
                  color="success"
                  size="small"
                  sx={{ mt: 1 }}
                  placeholder="0808123789"
                  onBlur={(e) => {
                    setTempData({
                      ...tempData,
                      phone: e.target.value,
                    });
                  }}
                />
              </Grid>

              <Grid item xs={6}>
                <Typography variant="p" fontWeight={500} fontSize={20}>
                  Địa điểm
                </Typography>
                <Autocomplete
                  disablePortal
                  sx={{ width: 280 }}
                  options={address}
                  getOptionLabel={(address) => address.title}
                  onChange={handleAddressesChange}
                  renderInput={(params) => (
                    <TextField {...params} placeholder="Chọn địa điểm " />
                  )}
                />
              </Grid>

              <Grid item xs={5}>
                <Typography variant="p" fontWeight={500} fontSize={20}>
                  Giới Tính
                </Typography>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  sx={{ width: 250 }}
                  options={gender()}
                  getOptionLabel={(option) => option.title}
                  renderInput={(params) => (
                    <TextField {...params} placeholder="Chọn giới tính" />
                  )}
                  onChange={(event, value) => {
                    setData({
                      ...data,
                      gender: value ? value.title : null,
                    });
                  }}
                />
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="p" fontWeight={500}>
                Chức danh
              </Typography>
              <Input
                fullWidth
                color="success"
                size="small"
                sx={{ mt: 1 }}
                placeholder="Lập trình viên"
                onBlur={(e) => {
                  setTempData({
                    ...tempData,
                    title: e.target.value,
                  });
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="p" fontWeight={500}>
                Địa chỉ đầy đủ
              </Typography>
              <Input
                fullWidth
                color="success"
                size="small"
                sx={{ mt: 1 }}
                placeholder="Ấp Tân An, Xã Tân An, Huyện Đầm Dơi, Tỉnh Cà Mau"
                onBlur={(e) => {
                  setTempData({
                    ...tempData,
                    fulladdress: e.target.value,
                  });
                }}
              />
            </Grid>
            <Grid
              item
              xs={4}
              sx={{
                mx: "auto",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <Button variant="contained" color="success" onClick={updateData}>
                Cập nhật
              </Button>
              <Button
                variant="contained"
                color="warning"
                onClick={() => {
                  setShow(false);
                }}
              >
                Hủy bỏ
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
}
