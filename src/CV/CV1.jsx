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
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import background from "../asset/BK_CV1.png";
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
import TransgenderIcon from "@mui/icons-material/Transgender";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { convertToRaw, EditorState } from "draft-js";
import ContactEditPopUp from "../components/Home/ContactEditPopUp";
import { PopCV } from "../components/PopCV";

import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { MdVolunteerActivism } from "react-icons/md";

export default function CV1({ editable, data, setPrint, print, setCVDATA }) {
  const cvTemplate = "CV1";

  // Các props của component:

  // item: đại diện cho một thuộc tính của dữ liệu, ví dụ như "kỹ năng", "kinh nghiệm", "học vấn".
  // data: dữ liệu chứa các giá trị thuộc tính (props) của CV template.
  // setData: hàm để cập nhật dữ liệu của CV template.
  // setOpen: hàm để cập nhật trạng thái mở/đóng của component cha.
  // Trong component RichEditor, có sử dụng hook useState để lưu trữ trạng thái của trình soạn thảo văn bản editorState. Ngoài ra, hook useState được sử dụng để quản lý trạng thái đóng (close) của component.

  // Hàm getTextArrayFromRich sử dụng để trích xuất nội dung văn bản được định dạng từ đối tượng editorState và trả về một mảng các đoạn văn bản.

  // Trong hàm updateData, component sẽ gọi hàm setData để cập nhật dữ liệu của CV template, bao gồm giá trị thuộc tính item và text với định dạng JSON. Sau đó, component sẽ đóng bản soạn thảo văn bản (setClose(true)).

  // Cuối cùng, component sẽ hiển thị một bộ nút gồm "Đóng" và "Cập nhật" để đóng và cập nhật giá trị của CV template. Các nút này sẽ bị disable khi thuộc tính editable bằng false.

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

    // Dòng lệnh const text = item.slice(0, item.length - 2); có ý nghĩa là lấy chuỗi con từ biến item bắt đầu từ vị trí đầu tiên đến vị trí trước 2 ký tự cuối cùng của chuỗi.
    // Ví dụ, nếu item có giá trị là "example: " thì biến text sẽ lưu giá trị là "example".
    // Lý do để sử dụng slice(0, item.length - 2) là để loại bỏ 2 ký tự cuối cùng của chuỗi item,
    // có thể là khoảng trắng hoặc ký tự khác, để chuỗi text được trả về không chứa những ký tự không cần thiết này.
    const text = item.slice(0, item.length - 2);

    useEffect(() => {
      if (close) {
        setOpen(false);
      }
    });
    function handleClose() {
      setClose(true);
    }

    // được sử dụng để cập nhật dữ liệu trong trường văn bản đang được chỉnh sửa và đóng trình soạn thảo văn bản đó.
    // Hàm này được gọi khi người dùng nhấn nút "Cập nhật" trên trình soạn thảo. Khi được gọi,
    // hàm này đầu tiên đặt giá trị của close thành true bằng setClose(true). Sau đó, nó sử dụng setTimeout()
    // để đảm bảo rằng giá trị của close đã được đặt thành true trước khi setData() được gọi.

    // Trong setData(), đầu tiên nó sao chép dữ liệu hiện có từ data và thêm vào đó hai trường mới,
    // một trường được đặt tên là item và lưu trữ nội dung văn bản dưới dạng chuỗi JSON được chuyển từ nội dung hiện tại của trình soạn thảo
    // văn bản, và một trường được đặt tên là text và lưu trữ nội dung văn bản được lấy ra từ convertToRaw(editorState.getCurrentContent())
    // và được xử lý bởi hàm getTextArrayFromRich().

    // Điều này cho phép cập nhật dữ liệu được hiển thị trên trang, bao gồm cả nội dung văn bản và định dạng của văn bản đã được chỉnh sửa
    // trong trình soạn thảo văn bản Draft.

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
        <RichText
          editorState={editorState}
          setEditorState={setEditorState}
          onChange={(editorState) => setEditorState(editorState)}
        />
        <Box sx={{ m: 1 }}>
          <Button
            onClick={editable && handleClose}
            color="warning"
            variant="outlined"
            sx={{
              mr: 1,
            }}
          >
            Đóng
          </Button>
          <Button variant="outlined" onClick={editable && updateData}>
            Cập nhật
          </Button>
        </Box>
      </>
    );
  }

  // bằng cách sử dụng hàm styled của thư viện styled-components. Component CustomChip này là một đối tượng Chip của Material-UI
  // được custom lại với một số thuộc tính CSS.

  // Trong hàm styled, Chip được truyền vào như một tham số để tạo ra một phiên bản mới của nó với các thuộc tính CSS được customize.

  // Cụ thể, đoạn code trên customize màu nền, màu chữ, kích thước chữ, độ dày chữ, khoảng cách giữa các phần tử trong CustomChip.
  // Ngoài ra, CustomChip còn override thuộc tính color của MuiChip-icon, một icon được sử dụng trong Chip.

  const CustomChip = styled(Chip)(({ theme }) => ({
    "&": {
      background: "#00b4d8",
      color: "white",
      fontSize: "20px",
      fontWeight: "600",
      padding: "12px",
      "& .MuiChip-icon": {
        color: "white",
      },
    },
  }));

  // nhận vào các props như show, toggle, item, data, config. Hàm này được sử dụng để render nội dung của một trường dữ liệu
  // có thể có kiểu là rich text hoặc text thông thường.

  // Nếu giá trị của show là true, tức là hiển thị trường dữ liệu kiểu rich text, thì hàm sẽ render một component là RichEditor.
  // Component này nhận các props là item, setOpen, setData, và data. Trong đó, item là tên của trường dữ liệu,
  // setOpen là hàm để đóng component hiển thị, setData là hàm để cập nhật dữ liệu, và data là đối tượng chứa các giá trị của các trường dữ liệu.

  // Nếu giá trị của show là false, tức là hiển thị trường dữ liệu kiểu text thông thường, thì hàm sẽ render một component là RichTextDisplay.
  // Component này nhận vào giá trị của trường dữ liệu rich text được lấy từ đối tượng data.

  // Tóm lại, hàm RichContent được sử dụng để render nội dung của một trường dữ liệu có thể có kiểu là rich text hoặc text thông thường,
  // tùy thuộc vào giá trị của show.

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

  // const RichContent = function ({ show, toggle, item, data, config }) {
  //   console.log(item);
  //   return (
  //     <>
  //       {show ? (
  //         <RichEditor
  //           item={item}
  //           setOpen={toggle}
  //           setData={config}
  //           data={data}
  //         />
  //       ) : (
  //         <RichTextDisplay data={JSON.parse(data[item])} />
  //       )}
  //     </>
  //   );
  // };

  const ref = useRef();
  const [showEduEdit, setShowEduEdit] = useState();
  const [showSkillsEdit, setShowSkillsEdit] = useState();
  const [showCertificationsEdit, setShowCertificationsEdit] = useState();
  const [showExperienceEdit, setShowExperienceEdit] = useState();
  const [showObjectiveEdit, setShowObjectiveEdit] = useState();
  const [showActivate, setShowActivate] = useState();
  const [showProject, setShowProject] = useState();
  const [showDefault, setShowDefault] = useState();
  // state quan ly popup
  const [showPopup, setShowPopup] = useState(false);

  //sử dụng thư viện useReactToPrint để in nội dung của một phần tử HTML được tham chiếu bởi ref.current.
  //Khi biến print được cập nhật thành true, hàm handlePrint được gọi để thực hiện việc in. Sau khi in hoàn tất,
  //hàm onAfterPrint được gọi để log ra thông báo "In thành công". Các useEffect hook được sử dụng để theo dõi các biến print,
  //data và editable để đảm bảo rằng chúng được cập nhật và xử lý theo các trường hợp khác nhau.
  //Trong đó, useEffect đầu tiên được sử dụng để gọi hàm handlePrint khi print được cập nhật thành true.
  //useEffect thứ hai không có logic xử lý bên trong. useEffect cuối cùng được sử dụng để cập nhật CVDATA khi editable được cập nhật thành true.

  const handlePrint = useReactToPrint({
    content: () => ref.current,
    documentTitle: "test",
    onAfterPrint: () => console.log("In thành công"),
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

  return (
    <>
      <Box
        ref={ref}
        sx={{
          width: "100%",
          backgroundImage: `url(${background})`,
          minHeight: "1080px",
          p: 4,
          backgroundRepeat: "repeat",
          backgroundSize: "cover",
        }}
      >
        <Grid
          container
          sx={{
            height: "100%",
          }}
        >
          {/* right path */}
          <Grid
            item
            container
            xs={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              minHeight: "1500px",
            }}
          >
            <Box
              sx={{
                width: "80%",
                minHeight: "114%",
                display: "flex",
                flexDirection: "column",
                ml: "40px",
                mr: "31px",
              }}
            >
              <CustomChip
                icon={<SchoolIcon color="success" />}
                label="Học vấn"
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
                icon={<CrisisAlertIcon color="success" />}
                label="Mục tiêu nghề nghiệp "
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
              <CustomChip icon={<FlagIcon />} label="Kỹ năng" />
              <Box
                alignSelf="flex-start"
                sx={{
                  mb: 2,
                  px: 2,
                  mt: 1,
                  width: "90%",
                  minHeight: "19.2%",
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
              <CustomChip
                icon={<AiOutlineFundProjectionScreen />}
                label="Dự án"
              />
              <Box
                alignSelf="flex-start"
                sx={{
                  mb: 2,
                  px: 2,
                  mt: 1,
                  width: "90%",
                  minHeight: "15%",
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
            </Box>
          </Grid>
          {/* left */}
          <Grid
            item
            container
            xs={6}
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                width: "80%",
                height: "32.5%",
                display: "flex",
                flexDirection: "column",
                "&:hover": {
                  border: "1px dashed red",
                },
                " p": {
                  color: "rgba(0,0,0,0.7)",
                },
                ml: "70px",
                mt: 0,
              }}
              onClick={() => {
                editable && setShowPopup(true);
              }}
            >
              <Image
                src={data.avatar || camera}
                width="160px"
                height="160px"
                fit="scale-down"
                duration={0}
                sx={{
                  borderRadius: "50%",
                  border: "1px dashed blue",
                  background: "#f1f2f7",
                  mb: 4,
                }}
              />
              <Typography variant="h4" fontWeight={550}>
                {data.name}
              </Typography>
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
                <TransgenderIcon fontSize="small" sx={{ mr: 1 }} />
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
                  {data.fulladdress}
                </Typography>
              </Box>
              {/* <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 1,
                }}
              >
                <LocationOnIcon fontSize="small" sx={{ mr: 1 }} />
                <Typography variant="body1" color="initial">
                  {data.fulladdress}
                </Typography>
              </Box> */}
            </Box>
            <Box
              sx={{
                width: "80%",
                minHeight: "60%",
                mt: 5,
                display: "flex",
                flexDirection: "column",
                ml: "40px",
              }}
            >
              <CustomChip
                alignSelf="flex-end"
                icon={<MoreHorizIcon color="success" />}
                label="Kinh nghiệm"
              />
              <Box
                sx={{
                  mb: 2,
                  px: 2,
                  mt: 1,
                  minHeight: "30%",
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
                icon={<MdVolunteerActivism color="success" />}
                label="Hoạt Động"
              />
              <Box
                alignSelf="flex-start"
                sx={{
                  mb: 2,
                  px: 2,
                  mt: 1,
                  width: "90%",
                  minHeight: "30%",
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

              <CustomChip
                icon={<WorkspacePremiumIcon color="success" />}
                label="Chứng chỉ"
              />
              <Box
                alignSelf="flex-start"
                sx={{
                  mb: 2,
                  px: 2,
                  mt: 1,
                  width: "90%",
                  minHeight: "30%",
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
          </Grid>
        </Grid>
        <Typography
          variant="body1"
          color="initial"
          sx={{
            position: "relative",
            top: "100%",
            left: "90%",
            mb: -0.5,
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
    </>
  );
}
