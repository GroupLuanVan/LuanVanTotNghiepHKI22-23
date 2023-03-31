import * as yup from "yup"

const LoginSchema = yup.object().shape({
    email: yup.string().required("Vui lòng nhập tài khoản"),
    password: yup.string().required("Vui lòng nhập mật khẩu")
})

export default LoginSchema