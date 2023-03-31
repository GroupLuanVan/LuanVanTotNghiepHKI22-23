import { Box, Grid, Typography, CircularProgress } from "@mui/material";
import CV1 from "../CV/CV1";
import CV2 from "../CV/CV2";
import CV3 from "../CV/CV3";
import CV4 from "../CV/CV4";
import CV5 from "../CV/CV5";
import defaultCvData from "../asset/defaultCvData.json";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";

import { toast } from "react-toastify";
import CVCard from "../CV/CVCard";
import cv1image from "../CV/cv1image.png";
import cv2image from "../CV/cv2image.png";
import cv3image from "../CV/cv3image.png";
import cvSchema from "../validate/cvValidate";
import { useDispatch } from "react-redux";
import { setActivatedCvId } from "../store/userSlice";
import { ChooseCV } from "../CV/ChooseCV";
import { CVCard1 } from "../CV/CVCard1";
export default function ManageCV({ template }) {
  // const { data, setData, loading, error } = useFetch(`candidate/${user.user._id}/getuserprofilecvdata`);

  let { usetemplate } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const navigateTo = function (location) {
    navigate(location);
  };
  const [print, setPrint] = useState(false);
  // const loggedUserId = user.user._id;
  const [defaultCv, setDefaultCv] = useState(defaultCvData);
  //const [currentCV, setCurrentCV] = useState("");

  // useEffect(() => {
  //   if (user.user.role != "candidate") {
  //     navigateTo("/login");
  //   }
  // });
  // console.log(data)
  // return (
  //   <>
  //     {loading ? (
  //       <Loading />
  //     ) : (
  //       <>
  //         {data.aboutMe ? (
  //           <Grid
  //             container
  //             sx={{
  //               background: "#f1f2f7",
  //               p: 3,
  //               columnGap: 4,
  //             }}
  //           >
  //             <Grid item xs={6}>
  //               {currentCV == "CV1" && (
  //                 <CV1
  //                   editable={true}
  //                   data={data}
  //                   print={print}
  //                   setPrint={setPrint}
  //                   setCVDATA={setData}
  //                 />
  //               )}
  //               {currentCV == "CV2" && (
  //                 <CV2
  //                   editable={true}
  //                   data={data}
  //                   print={print}
  //                   setPrint={setPrint}
  //                   setCVDATA={setData}
  //                 />
  //               )}
  //               {currentCV == "CV3" && (
  //                 <CV3
  //                   editable={true}
  //                   data={data}
  //                   print={print}
  //                   setPrint={setPrint}
  //                   setCVDATA={setData}
  //                 />
  //               )}
  //             </Grid>
  //             <Grid
  //               xs={4}
  //               item
  //               sx={{
  //                 ml: 10,
  //               }}
  //             >
  //               <Grid item xs={12}>
  //                 <Typography variant="h4" color="initial">
  //                   Hướng dẫn viết CV hiệu quả
  //                 </Typography>
  //                 {/* thong tin ca nhan */}
  //                 <Box
  //                   sx={{
  //                     mb: 2,
  //                   }}
  //                 >
  //                   <Typography variant="h6" fontWeight={500}>
  //                     👉 Thông tin cá nhân
  //                   </Typography>
  //                   <Typography variant="body1" color="initial">
  //                     Đây là mục bạn cần tóm tắt về các thông tin cơ bản về bản
  //                     thân, bao gồm: họ tên, ngày/tháng/năm sinh, địa chỉ, số
  //                     điện thoại và email liên lạc. Với những thông tin giới
  //                     thiệu bản thân trong CV, nhà tuyển dụng có thể liên lạc
  //                     với bạn dễ hơn khi đạt yêu cầu. Bên cạnh đó, nếu bạn có
  //                     những trích dẫn mục tiêu sống hay những câu nói mà bạn tâm
  //                     đắc, bạn có thể viết một cách ngắn gọn để thể hiện bản
  //                     thân.
  //                   </Typography>
  //                 </Box>
  //                 {/* Trinh do hoc van */}
  //                 <Box
  //                   sx={{
  //                     mb: 2,
  //                   }}
  //                 >
  //                   <Typography variant="h6" fontWeight={500}>
  //                     👉 Trình độ học vấn
  //                   </Typography>
  //                   <Typography variant="body1" color="initial">
  //                     Tại mục trình độ học vấn, bạn nên ghi về bậc học cao nhất
  //                     của mình và liệt kê thêm những thành tích, giải thưởng đã
  //                     đạt được trong quá trình học tập (nếu có). Ngoài ra, bạn
  //                     có thể ghi thêm về những dự án, chương trình nghiên cứu,
  //                     các khóa học chuyên môn, nghiệp vụ có liên quan đến vị trí
  //                     ứng tuyển mà bạn đã tham gia. Cho nhà tuyển dụng thấy được
  //                     năng lực làm việc cũng như tính cầu thị, ham học hỏi trong
  //                     bạn.
  //                   </Typography>
  //                 </Box>
  //                 {/* ky nang */}
  //                 <Box
  //                   sx={{
  //                     mb: 2,
  //                   }}
  //                 >
  //                   <Typography variant="h6" fontWeight={500}>
  //                     👉 Kỹ Năng
  //                   </Typography>
  //                   <Typography variant="body1" color="initial">
  //                     Đây là mục bạn cần tóm tắt về các thông tin cơ bản về bản
  //                     thân, bao gồm: họ tên, ngày/tháng/năm sinh, địa chỉ, số
  //                     điện thoại và email liên lạc. Với những thông tin giới
  //                     thiệu bản thân trong CV, nhà tuyển dụng có thể liên lạc
  //                     với bạn dễ hơn khi đạt yêu cầu. Bên cạnh đó, nếu bạn có
  //                     những trích dẫn mục tiêu sống hay những câu nói mà bạn tâm
  //                     đắc, bạn có thể viết một cách ngắn gọn để thể hiện bản
  //                     thân.
  //                   </Typography>
  //                 </Box>
  //                 {/* Kinh nghiem */}
  //                 <Box
  //                   sx={{
  //                     mb: 2,
  //                   }}
  //                 >
  //                   <Typography variant="h6" fontWeight={500}>
  //                     👉 Kinh nghiệm
  //                   </Typography>
  //                   <Typography variant="body1" color="initial">
  //                     Đây là phần để nói đến những công việc bạn đã từng làm
  //                     trước đây, tuy nhiên bạn không nên liệt kê hết vào CV.
  //                     Điều đó sẽ làm cho CV trở nên dài và không có điểm nhấn cụ
  //                     thể. Vì thế, bạn chỉ nên viết những kinh nghiệm công việc
  //                     có liên quan đến vị trí ứng tuyển, nhằm gây được ấn tượng
  //                     với nhà tuyển dụng.
  //                   </Typography>
  //                 </Box>
  //                 {/* Mục tiêu */}
  //                 <Box
  //                   sx={{
  //                     mb: 2,
  //                   }}
  //                 >
  //                   <Typography variant="h6" fontWeight={500}>
  //                     👉 Mục tiêu nghề nghiệp
  //                   </Typography>
  //                   <Typography variant="body1" color="initial">
  //                     Hiểu đơn giản, mục tiêu nghề nghiệp là đích đến của sự
  //                     nghiệp mà bạn mong muốn đạt được trong tương lai, thông
  //                     qua việc định hướng và trang bị những kiến thức, kinh
  //                     nghiệm cần có. Với mục tiêu nghề nghiệp, bạn cần phân biệt
  //                     rõ giữa mục tiêu ngắn hạn và đâu là mục tiêu dài hạn để
  //                     biết được bản thân cần làm gì và phải làm gì để đạt được
  //                     những mục tiêu đó
  //                   </Typography>
  //                 </Box>
  //               </Grid>
  //               <Grid item xs={12}>
  //                 <Button
  //                   sx={{ mr: 2 }}
  //                   variant="contained"
  //                   color="success"
  //                   onClick={() => {
  //                     cvSchema.validate(data).then(async (data) => {
  //                       const res = await axios.post(
  //                         `/candidate/${loggedUserId}/resume`,
  //                         data
  //                       );
  //                       if (res.data.status && res.data.status != 200) {
  //                         console.log("that bai r", res)
  //                         toast.warning("Tạo cv thất bại");

  //                       } else {
  //                         console.log(res.data);
  //                         const action = setActivatedCvId(res.data.savedResumeId, true)
  //                         dispatch(action);
  //                         toast.success("Tạo cv thành công");
  //                       }
  //                     });
  //                   }}
  //                 >
  //                   Lưu CV
  //                 </Button>
  //                 <Button
  //                   variant="contained"
  //                   color="success"
  //                   onClick={() => {
  //                     setPrint(true);
  //                     console.log(`12`);
  //                   }}
  //                 >
  //                   IN CV
  //                 </Button>
  //               </Grid>
  //               <Grid
  //                 item
  //                 xs={12}
  //                 container
  //                 sx={{
  //                   mt: 3,
  //                   rowGap: 3,
  //                   columnGap: 2,
  //                 }}
  //               >
  //                 <Grid item xs={12}>
  //                   <Typography variant="h4" color="initial">
  //                     Chọn mẫu CV bạn thích
  //                   </Typography>
  //                 </Grid>
  //                 <Grid item xs={3} onClick={() => setCurrentCV("CV1")}>
  //                   <CVCard title="Chuyên nghiệp" image={cv1image} />
  //                 </Grid>
  //                 <Grid item xs={3} onClick={() => setCurrentCV("CV2")}>
  //                   <CVCard title="Sang trọng" image={cv2image} />
  //                 </Grid>
  //                 <Grid item xs={3} onClick={() => setCurrentCV("CV3")}>
  //                   <CVCard title="Chuyên nghiệp 1" image={cv3image} />
  //                 </Grid>
  //               </Grid>
  //             </Grid>
  //           </Grid>
  //         ) : (
  //           <Grid
  //             container
  //             sx={{
  //               background: "#f1f2f7",
  //               p: 3,
  //               columnGap: 4,
  //             }}
  //           >
  //             <Grid item xs={6}>
  //               {currentCV == "CV1" && (
  //                 <CV1
  //                   editable={true}
  //                   data={defaultCv}
  //                   print={print}
  //                   setPrint={setPrint}
  //                   setCVDATA={setDefaultCv}
  //                 />
  //               )}
  //               {currentCV == "CV2" && (
  //                 <CV2
  //                   editable={true}
  //                   data={defaultCv}
  //                   print={print}
  //                   setPrint={setPrint}
  //                   setCVDATA={setDefaultCv}
  //                 />
  //               )}
  //               {currentCV == "CV3" && (
  //                 <CV3
  //                   editable={true}
  //                   data={defaultCv}
  //                   print={print}
  //                   setPrint={setPrint}
  //                   setCVDATA={setDefaultCv}
  //                 />
  //               )}
  //             </Grid>
  //             <Grid
  //               xs={4}
  //               item
  //               sx={{
  //                 ml: 10,
  //               }}
  //             >
  //               <Grid item xs={12}>
  //                 <Typography variant="h4" color="initial">
  //                   Hướng dẫn viết CV hiệu quả
  //                 </Typography>
  //                 {/* thong tin ca nhan */}
  //                 <Box
  //                   sx={{
  //                     mb: 2,
  //                   }}
  //                 >
  //                   <Typography variant="h6" fontWeight={500}>
  //                     👉 Thông tin cá nhân
  //                   </Typography>
  //                   <Typography variant="body1" color="initial">
  //                     Đây là mục bạn cần tóm tắt về các thông tin cơ bản về bản
  //                     thân, bao gồm: họ tên, ngày/tháng/năm sinh, địa chỉ, số
  //                     điện thoại và email liên lạc. Với những thông tin giới
  //                     thiệu bản thân trong CV, nhà tuyển dụng có thể liên lạc
  //                     với bạn dễ hơn khi đạt yêu cầu. Bên cạnh đó, nếu bạn có
  //                     những trích dẫn mục tiêu sống hay những câu nói mà bạn tâm
  //                     đắc, bạn có thể viết một cách ngắn gọn để thể hiện bản
  //                     thân.
  //                   </Typography>
  //                 </Box>
  //                 {/* Trinh do hoc van */}
  //                 <Box
  //                   sx={{
  //                     mb: 2,
  //                   }}
  //                 >
  //                   <Typography variant="h6" fontWeight={500}>
  //                     👉 Trình độ học vấn
  //                   </Typography>
  //                   <Typography variant="body1" color="initial">
  //                     Tại mục trình độ học vấn, bạn nên ghi về bậc học cao nhất
  //                     của mình và liệt kê thêm những thành tích, giải thưởng đã
  //                     đạt được trong quá trình học tập (nếu có). Ngoài ra, bạn
  //                     có thể ghi thêm về những dự án, chương trình nghiên cứu,
  //                     các khóa học chuyên môn, nghiệp vụ có liên quan đến vị trí
  //                     ứng tuyển mà bạn đã tham gia. Cho nhà tuyển dụng thấy được
  //                     năng lực làm việc cũng như tính cầu thị, ham học hỏi trong
  //                     bạn.
  //                   </Typography>
  //                 </Box>
  //                 {/* ky nang */}
  //                 <Box
  //                   sx={{
  //                     mb: 2,
  //                   }}
  //                 >
  //                   <Typography variant="h6" fontWeight={500}>
  //                     👉 Kỹ Năng
  //                   </Typography>
  //                   <Typography variant="body1" color="initial">
  //                     Đây là mục bạn cần tóm tắt về các thông tin cơ bản về bản
  //                     thân, bao gồm: họ tên, ngày/tháng/năm sinh, địa chỉ, số
  //                     điện thoại và email liên lạc. Với những thông tin giới
  //                     thiệu bản thân trong CV, nhà tuyển dụng có thể liên lạc
  //                     với bạn dễ hơn khi đạt yêu cầu. Bên cạnh đó, nếu bạn có
  //                     những trích dẫn mục tiêu sống hay những câu nói mà bạn tâm
  //                     đắc, bạn có thể viết một cách ngắn gọn để thể hiện bản
  //                     thân.
  //                   </Typography>
  //                 </Box>
  //                 {/* Kinh nghiem */}
  //                 <Box
  //                   sx={{
  //                     mb: 2,
  //                   }}
  //                 >
  //                   <Typography variant="h6" fontWeight={500}>
  //                     👉 Kinh nghiệm
  //                   </Typography>
  //                   <Typography variant="body1" color="initial">
  //                     Đây là phần để nói đến những công việc bạn đã từng làm
  //                     trước đây, tuy nhiên bạn không nên liệt kê hết vào CV.
  //                     Điều đó sẽ làm cho CV trở nên dài và không có điểm nhấn cụ
  //                     thể. Vì thế, bạn chỉ nên viết những kinh nghiệm công việc
  //                     có liên quan đến vị trí ứng tuyển, nhằm gây được ấn tượng
  //                     với nhà tuyển dụng.
  //                   </Typography>
  //                 </Box>
  //                 {/* Mục tiêu */}
  //                 <Box
  //                   sx={{
  //                     mb: 2,
  //                   }}
  //                 >
  //                   <Typography variant="h6" fontWeight={500}>
  //                     👉 Mục tiêu nghề nghiệp
  //                   </Typography>
  //                   <Typography variant="body1" color="initial">
  //                     Hiểu đơn giản, mục tiêu nghề nghiệp là đích đến của sự
  //                     nghiệp mà bạn mong muốn đạt được trong tương lai, thông
  //                     qua việc định hướng và trang bị những kiến thức, kinh
  //                     nghiệm cần có. Với mục tiêu nghề nghiệp, bạn cần phân biệt
  //                     rõ giữa mục tiêu ngắn hạn và đâu là mục tiêu dài hạn để
  //                     biết được bản thân cần làm gì và phải làm gì để đạt được
  //                     những mục tiêu đó
  //                   </Typography>
  //                 </Box>
  //               </Grid>
  //               <Grid item xs={12}>
  //                 <Button
  //                   sx={{ mr: 2 }}
  //                   variant="contained"
  //                   color="success"
  //                   onClick={() => {
  //                     cvSchema.validate(defaultCv).then(async (defaultCv) => {
  //                       const res = await axios.post(
  //                         `/candidate/${loggedUserId}/resume`,
  //                         defaultCv
  //                       );
  //                       if (res.data.status && res.data.status != 200) {
  //                         toast.warning("Tạo cv thất bại");
  //                       } else {
  //                         let savedResumeId = res.data.savedResumeId
  //                         const action = setActivatedCvId(savedResumeId, true);
  //                         dispatch(action);
  //                         toast.success("Tạo cv thành công");
  //                       }
  //                     });
  //                   }}
  //                 >
  //                   Lưu CV
  //                 </Button>
  //                 <Button
  //                   variant="contained"
  //                   color="success"
  //                   onClick={() => {
  //                     setPrint(true);
  //                     console.log(`12`);
  //                   }}
  //                 >
  //                   IN CV
  //                 </Button>
  //               </Grid>
  //               <Grid
  //                 item
  //                 xs={12}
  //                 container
  //                 sx={{
  //                   mt: 3,
  //                   rowGap: 3,
  //                   columnGap: 2,
  //                 }}
  //               >
  //                 <Grid item xs={12}>
  //                   <Typography variant="h4" color="initial">
  //                     Chọn mẫu CV bạn thích
  //                   </Typography>
  //                 </Grid>
  //                 <Grid item xs={3} onClick={() => setCurrentCV("CV1")}>
  //                   <CVCard title="Chuyên nghiệp" image={cv1image} />
  //                 </Grid>
  //                 <Grid item xs={3} onClick={() => setCurrentCV("CV2")}>
  //                   <CVCard title="Sang trọng" image={cv2image} />
  //                 </Grid>
  //                 <Grid item xs={3} onClick={() => setCurrentCV("CV3")}>
  //                   <CVCard title="Chuyên nghiệp 1" image={cv3image} />
  //                 </Grid>
  //               </Grid>
  //             </Grid>
  //           </Grid>
  //         )}
  //       </>
  //     )}
  //   </>
  // );
  console.log(usetemplate);
  console.log(useParams());

  if (usetemplate === "useCV1") {
    return (
      <>
        <Grid
          container
          sx={{
            background: "#f1f2f7",
            p: 3,
            columnGap: 10,
          }}
        >
          <Grid item xs={8}>
            <CV1
              editable={true}
              data={defaultCv}
              print={print}
              setPrint={setPrint}
              setCVDATA={setDefaultCv}
            />
          </Grid>
          <Grid
            xs={8}
            item
            sx={{
              ml: 10,
            }}
          >
            <Grid item xs={12}>
              <Button sx={{ mr: 2 }} variant="contained" color="success">
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
            <Grid
              item
              xs={12}
              container
              sx={{
                mt: 3,
                rowGap: 3,
                columnGap: 2,
              }}
            ></Grid>
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
            mt: 20,
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
            xs={4}
            item
            sx={{
              ml: 10,
            }}
          >
            <Grid item xs={12}>
              <Button sx={{ mr: 2 }} variant="contained" color="success">
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
            <Grid
              item
              xs={12}
              container
              sx={{
                mt: 3,
                rowGap: 3,
                columnGap: 2,
              }}
            >
              <Grid item xs={12}>
                <Typography variant="h4" color="initial">
                  Chọn mẫu CV bạn thích
                </Typography>
              </Grid>
            </Grid>
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
          xs={4}
          item
          sx={{
            ml: 10,
          }}
        >
          <Grid item xs={12}>
            <Button sx={{ mr: 2 }} variant="contained" color="success">
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
          <Grid
            item
            xs={12}
            container
            sx={{
              mt: 3,
              rowGap: 3,
              columnGap: 2,
            }}
          >
            <Grid item xs={12}>
              <Typography variant="h4" color="initial">
                Chọn mẫu CV bạn thích
              </Typography>
            </Grid>
          </Grid>
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
            justifyContent: "center", // căn giữa theo chiều ngang
            alignItems: "center", // căn giữa theo chiều dọc
            height: "100vh", // đặt chiều cao cho container
            mt: 10,
            mb: 95,
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
            mt: 10,
            mb: 95,
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
        </Grid>
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
      </>
    );
  }
}
