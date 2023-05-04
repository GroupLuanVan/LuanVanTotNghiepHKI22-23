import {
  Box,
  Button,
  Chip,
  createTheme,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  styled,
  Typography,
  TextField,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import background from "../asset/BK_CV4.png";
import RichText, { RichTextDisplay } from "../components/RichText";
import SchoolIcon from "@mui/icons-material/School";
import FlagIcon from "@mui/icons-material/Flag";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CrisisAlertIcon from "@mui/icons-material/CrisisAlert";
import Image from "mui-image";
import camera from "../asset/camera_icon.png";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import FacebookIcon from "@mui/icons-material/Facebook";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { convertToRaw, EditorState } from "draft-js";
import ContactEditPopUp from "../components/Home/ContactEditPopUp";

import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { MdVolunteerActivism } from "react-icons/md";

export default function CV4({ editable, data, setPrint, print, setCVDATA }) {
  const cvTemplate = "CV4";

  function RichEditor({ item, data, setData, setOpen }) {
    const [editorState, setEditorState] = useState(() =>
      EditorState.createEmpty()
    );
    const [close, setClose] = useState();
    const getTextArrayFromRich = function (rawdata) {
      if (rawdata.blocks.length > 0) {
        return rawdata.blocks.map((item) => item.text).join(" ");
      }
    };
    const text = item.slice(0, item.length - 2);

    // Lấy màu chữ từ editorState
    const getColor = () => {
      const currentStyle = editorState.getCurrentInlineStyle();
      if (currentStyle.has("COLOR")) {
        return currentStyle
          .toJS()
          .filter((style) => style.startsWith("color-"))[0]
          .replace("color-", "");
      } else {
        return null;
      }
    };

    useEffect(() => {
      if (close) {
        setOpen(false);
      }
    });

    function handleClose() {
      setClose(true);
    }

    function updateData() {
      setClose(true);
      setTimeout(() => {
        setData((prevData) => ({
          ...prevData,
          [item]: JSON.stringify(convertToRaw(editorState.getCurrentContent())),
          [text]: getTextArrayFromRich(
            convertToRaw(editorState.getCurrentContent())
          ),
        }));
      });
    }

    return (
      <>
        <RichText editorState={editorState} setEditorState={setEditorState} />
        <Box sx={{ m: 1 }}>
          <Button
            onClick={editable && handleClose}
            color="warning"
            variant="outlined"
            sx={{
              mr: 1,
            }}
          >
            Đóng1
          </Button>
          <Button variant="outlined" onClick={editable && updateData}>
            Cập nhật
          </Button>
        </Box>
      </>
    );
  }
  const CustomChip = styled(Chip)(({ theme }) => ({
    "&": {
      //background: theme.palette.primary.dark,
      background: "rgba(0, 0, 0, 0)",
      border: "3px solid black",
      borderRadius: 0,
      color: "black",
      fontSize: "20px",
      fontWeight: "600",
      padding: "20px",
      "& .MuiChip-icon": {
        color: "black",
      },
      // "& .MuiChip-label": {
      //   opacity: 0.6,
      // },
    },
  }));
  const RichContent = function ({ show, toggle, item, data, config }) {
    let parsedData;

    try {
      parsedData = JSON.parse(data[item]);
    } catch (error) {
      console.error("Invalid JSON:", error);
      return null;
    }

    return (
      <>
        {show ? (
          <RichEditor
            item={item}
            setOpen={toggle}
            setData={config}
            data={parsedData}
          />
        ) : (
          <RichTextDisplay data={parsedData} />
        )}
      </>
    );
  };

  const ref = useRef();
  const [showEduEdit, setShowEduEdit] = useState();
  const [showSkillsEdit, setShowSkillsEdit] = useState();
  const [showCertificationsEdit, setShowCertificationsEdit] = useState();
  const [showExperienceEdit, setShowExperienceEdit] = useState();
  const [showObjectiveEdit, setShowObjectiveEdit] = useState();
  const [showActivate, setShowActivate] = useState();
  const [showProject, setShowProject] = useState();
  // state quan ly popup
  const [showPopup, setShowPopup] = useState(false);

  const handlePrint = useReactToPrint({
    content: () => ref.current,
    documentTitle: "test",
    onAfterPrint: () => console.log("QA print"),
  });
  useEffect(() => {
    if (print) {
      handlePrint();
      setPrint(false);
    }
  }, [print]);
  useEffect(() => {
    console.log(data);
  }, [data]);

  useEffect(() => {
    if (editable) setCVDATA({ ...data, cvTemplate });
  }, []);
  const [name, setName] = useState(data.name || "");
  return (
    <>
      <Box
        ref={ref}
        sx={{
          width: "100%",
          backgroundImage: `url(${background})`,
          minHeight: "1080px",
          //width: "950px",
          p: 0,
          backgroundRepeat: "repeat",
          backgroundSize: "cover",
        }}
      >
        <Grid container>
          {/* tt chung */}
          <Grid
            item
            xs={5}
            sx={{
              display: "flex",
              flexDirection: "column",
              //background: "rgba(255, 0, 0, 0.5)",
              background: "rgba(252, 224, 224, 20)",
              color: "black",
              width: "1px",
            }}
          >
            <Box
              sx={{
                width: "80%",
                //display: "flex",
                //justifyContent: "center",
                flexDirection: "column",
                p: 4,
                "&:hover": {
                  border: "1px dashed red",
                },
                "p, h5, h6": {
                  color: "black ",
                },
              }}
              onClick={() => {
                editable && setShowPopup(true);
              }}
            >
              {/* <Typography variant="h4" fontWeight={550}>
                <TextField
                  defaultValue={name}
                  // onClick={() => editable && setShowPopup(true)}
                  onChange={(e) => setName(e.target.value)}
                />
              </Typography> */}
              <Image
                src={data.avatar || camera}
                width="160px"
                height="160px"
                fit="scale-down"
                duration={0}
                sx={{
                  //display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "0%",
                  border: "1px dashed blue",
                  background: "#f1f2f7",
                  mb: 4,
                }}
              />
              <Typography variant="h4" fontWeight={550}>
                {data.name}
              </Typography>
              {/* <TextField {data.phone} /> */}
              <Typography
                sx={{ mb: 4 }}
                variant="h6"
                fontWeight={300}
                color="initial"
              >
                {data.title}
              </Typography>
              <Typography
                variant="h5"
                fontSize={20}
                fontWeight={500}
                color="initial"
              >
                THÔNG TIN
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mt: 3,
                  mb: 1,
                }}
              >
                <CalendarMonthIcon fontSize="small" sx={{ mr: 1 }} />
                <Typography variant="body1" color="initial">
                  {new Date(data.dob).toLocaleDateString()}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 1,
                }}
              >
                <PhoneIcon fontSize="small" sx={{ mr: 1 }} />
                <Typography variant="body1" color="initial">
                  {data.phone}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 1,
                }}
              >
                <MailIcon fontSize="small" sx={{ mr: 1 }} />
                <Typography variant="body1" color="initial">
                  {data.email}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 1,
                }}
              >
                <FacebookIcon fontSize="small" sx={{ mr: 1 }} />
                <Typography variant="body1" color="initial">
                  {data.gender}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 1,
                }}
              >
                <LocationOnIcon fontSize="small" sx={{ mr: 1 }} />
                <Typography variant="body1" color="initial">
                  {data.fullAddress}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                width: "80%",
                mt: 4,
                display: "flex",
                flexDirection: "column",
                ml: "30px",
                mt: "150px",
              }}
            >
              <CustomChip
                //alignSelf="flex-end"
                icon={<FlagIcon color="success" />}
                label="Kỹ Năng"
              />
              <Box
                sx={{
                  mb: 2,
                  px: 2,
                  mt: 1,
                  minHeight: "60%",
                  "&:hover": {
                    border: "1px dashed red",
                  },
                }}
                onClick={() => {
                  editable && setShowSkillsEdit(true);
                }}
              >
                <RichContent
                  show={showSkillsEdit}
                  toggle={setShowSkillsEdit}
                  data={data}
                  config={setCVDATA}
                  item="skillsCv"
                />
              </Box>
            </Box>
            <Box
              sx={{
                width: "80%",
                mt: 4,
                display: "flex",
                flexDirection: "column",
                ml: "30px",
                mt: "150px",
              }}
            >
              <CustomChip
                //alignSelf="flex-end"
                icon={<WorkspacePremiumIcon color="success" />}
                label="Chứng Chỉ"
              />
              <Box
                sx={{
                  mb: 2,
                  px: 2,
                  mt: 1,
                  minHeight: "60%",
                  "&:hover": {
                    border: "1px dashed red",
                  },
                }}
                onClick={() => {
                  editable && setShowCertificationsEdit(true);
                }}
              >
                <RichContent
                  show={showCertificationsEdit}
                  toggle={setShowCertificationsEdit}
                  data={data}
                  config={setCVDATA}
                  item="certificationsCv"
                />
              </Box>
            </Box>
            <Box
              sx={{
                width: "80%",
                mt: 4,
                display: "flex",
                flexDirection: "column",
                ml: "30px",
                mt: "150px",
              }}
            >
              <CustomChip
                //alignSelf="flex-end"
                icon={<MdVolunteerActivism color="success" />}
                label="Hoạt Động"
              />
              <Box
                sx={{
                  mb: 2,
                  px: 2,
                  mt: 1,
                  minHeight: "60%",
                  "&:hover": {
                    border: "1px dashed red",
                  },
                }}
                onClick={() => {
                  editable && setShowActivate(true);
                }}
              >
                <RichContent
                  show={showActivate}
                  toggle={setShowActivate}
                  data={data}
                  config={setCVDATA}
                  item="activitiesCv"
                />
              </Box>
            </Box>
          </Grid>
          {/* tt chi tiet */}
          <Grid
            item
            container
            xs={6}
            sx={{
              p: 3,
              display: "flex",
              flexDirection: "column",
              //alignItems: "flex-start",
              minHeight: "1580px",
            }}
          >
            <CustomChip
              alignSelf="flex-end"
              icon={<SchoolIcon color="success" />}
              label="Học vấn"
            />
            <Box
              alignSelf="flex-start"
              sx={{
                mb: 2,
                px: 2,
                mt: 1,
                width: "95%",
                minHeight: "20%",
                "&:hover": {
                  border: "1px dashed red",
                },
              }}
              onClick={() => {
                // OpenEditDialog('Học vấn', 'Học vấn',true)
                editable && setShowEduEdit(true);
              }}
            >
              <RichContent
                show={showEduEdit}
                toggle={setShowEduEdit}
                data={data}
                config={setCVDATA}
                item="educationCv"
              />
            </Box>

            <CustomChip
              icon={<MoreHorizIcon color="success" />}
              label="Kinh Nghiệm"
            />
            <Box
              alignSelf="flex-start"
              sx={{
                mb: 2,
                px: 2,
                mt: 1,
                width: "90%",
                minHeight: "20%",
                "&:hover": {
                  border: "1px dashed red",
                },
              }}
              onClick={() => {
                editable && setShowExperienceEdit(true);
              }}
            >
              <RichContent
                show={showExperienceEdit}
                toggle={setShowExperienceEdit}
                data={data}
                config={setCVDATA}
                item="experienceCv"
              />
            </Box>

            <CustomChip
              icon={<CrisisAlertIcon />}
              label="Mục Tiêu Nghề Nghiệp"
            />
            <Box
              alignSelf="flex-start"
              sx={{
                mb: 2,
                px: 2,
                mt: 1,
                width: "90%",
                minHeight: "21%",
                "&:hover": {
                  border: "1px dashed red",
                },
              }}
              onClick={() => {
                editable && setShowObjectiveEdit(true);
              }}
            >
              <RichContent
                show={showObjectiveEdit}
                toggle={setShowObjectiveEdit}
                data={data}
                config={setCVDATA}
                item="objectiveCv"
              />
            </Box>
            <CustomChip
              icon={<AiOutlineFundProjectionScreen color="success" />}
              label="Dự Án"
            />
            <Box
              alignSelf="flex-start"
              sx={{
                mb: 2,
                px: 2,
                mt: 1,
                width: "90%",
                minHeight: "20%",
                "&:hover": {
                  border: "1px dashed red",
                },
              }}
              onClick={() => {
                editable && setShowProject(true);
              }}
            >
              <RichContent
                show={showProject}
                toggle={setShowProject}
                data={data}
                config={setCVDATA}
                item="projectCv"
              />
            </Box>
          </Grid>
        </Grid>
        <Typography
          variant="body1"
          color="initial"
          sx={{
            position: "relative",
            top: "100%",
            left: "90%",
            mt: -3,
          }}
        >
          SmartJob
        </Typography>
      </Box>
      <ContactEditPopUp
        data={data}
        setData={setCVDATA}
        show={showPopup}
        setShow={setShowPopup}
      />
      {/* <EditDialog open={open} title={title} item={item} setOpen={setOpen} isRich={isRich} /> */}
    </>
  );
}
