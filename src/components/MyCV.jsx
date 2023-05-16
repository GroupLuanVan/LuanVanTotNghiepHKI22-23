import {
  Divider,
  Grid,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import CV1 from "../CV/CV1";
import CV2 from "../CV/CV2";
import CV3 from "../CV/CV3";
import CV4 from "../CV/CV4";
import CV5 from "../CV/CV5";
import CV6 from "../CV/CV6";
import useFetch from "../hook/useFetch";
import { useSelector } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { toast } from "react-toastify";
import Modal from "@mui/material";
import ReactModal from "react-modal";

export default function MyCV() {
  const navigate = useNavigate();
  const [print, setPrint] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const role = useSelector((state) => state.user.token);

  const [data, setData] = useState(null);
  const [token, setToken] = useState("");

  useEffect(() => {
    // Lấy token từ local storage hoặc server
    const token = localStorage.getItem("token");
    setToken(token);
  }, []);

  useEffect(() => {
    // Lấy dữ liệu từ server khi token đã được lưu
    if (token) {
      axios
        .get("http://localhost:5000/api/candidate/resume/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log(response.data);
          setData(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [token, deleted]);

  const [loading, setLoading] = useState(false);

  const handleDeleteClick = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      await axios.delete("http://localhost:5000/api/candidate/resume/delete", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Cập nhật lại state của component sau khi xóa thành công
      setData(null);
      toast.success("Xóa CV thành công");
      console.log("CV deleted successfully");
    } catch (error) {
      toast.error("Có lỗi xảy ra trong quá trình xóa CV");
      console.error(error);
    }
    setLoading(false);
  };

  if (!data || deleted) {
    // Check if deleted is true
    return (
      <Dialog
        open
        PaperProps={{
          sx: {
            // backgroundColor: "#415726",
            display: "flex",
            flexDirection: "column",
            height: "200px",
            width: "1500px",
          },
        }}
      >
        <DialogTitle>Thông báo</DialogTitle>
        <DialogContent sx={{ flexGrow: 1 }}>
          <DialogContentText>
            <Typography variant="h5">
              Hiện tại bạn chưa có CV. Hãy tạo một CV mới để tiếp tục.
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            sx={{
              backgroundColor: "#5490cc",
              color: "black",
              height: "50px",
              width: "120px",
            }}
            onClick={() => navigate(-1)}
          >
            Trở lại
          </Button>
          <Button
            sx={{
              backgroundColor: "#5490cc",
              color: "black",
              height: "50px",
              width: "120px",
            }}
            onClick={() => navigate("/CreateCV")}
            autoFocus
          >
            Tạo CV
          </Button>
        </DialogActions>
      </Dialog>
    );
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
            <CV6
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
            color="warning"
            onClick={() => setPrint(true)}
          >
            Xuất CV
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={handleDeleteClick}
            disabled={loading}
            sx={{ position: "relative" }}
          >
            {loading && (
              <CircularProgress
                size={24}
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  marginTop: "-12px",
                  marginLeft: "-12px",
                }}
              />
            )}
            {loading ? "Đang xóa..." : "Xóa CV"}
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
