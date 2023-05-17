import { createSlice } from "@reduxjs/toolkit";




export const userSlice = createSlice({
    
    name:'user',
    email:'email',
    role:'role',
    token:'token',
    idCompany:'idcompany',
    idCandidate: 'idcandidate',
    idApplyJob: 'idApply',
    cvId: 'cvId',
    searchJob: 'searchJob',
    initialState: {
        user: localStorage.getItem('user') == null ? "Người dùng" : localStorage.getItem('user'),
        email: localStorage.getItem('email') == null ? " Email Người dùng" : localStorage.getItem('email'),
        isLogin: localStorage.getItem('user') ? true : false,
        // role: localStorage.getItem('role') === "candidate" ? "candidate" : localStorage.getItem('role'),
        role: localStorage.getItem('role') ? localStorage.getItem('role') : "default",
        token: localStorage.getItem('token') === '' ?  localStorage.getItem('token') : localStorage.getItem('token') ,
        idCompany : localStorage.getItem('idcompany') === '' ? "Null" : localStorage.getItem('idcompany'),
        idCandidate: localStorage.getItem('idcandidate') === ' ' ? "Null" : localStorage.getItem('idcandidate'),
        idApplyJob : localStorage.getItem('idApply') === '' ? "Null" : localStorage.getItem('idApply'),
        cvId: localStorage.getItem('cvId') === '' ? "Null" : localStorage.getItem('cvId'),
        searchJob: []

    },
    reducers: {
        setUserLogin: (state, action) => {
            state.user = action.payload
            state.isLogin = true
            localStorage.setItem('user',(action.payload))
        },
   
        setToken: (state, action) => {
            state.token = action.payload
            localStorage.setItem("token", action.payload)
        },
  
        setRole: (state, action) => {
            state.role = action.payload
            localStorage.setItem("role", action.payload)
        },
        setidCompany: (state, action) => {
            state.idCompany = action.payload
            localStorage.setItem("idcompany", action.payload)
        },
        setidCandidate: (state, action) => {
            state.idCandidate = action.payload
            localStorage.setItem("idcandidate", action.payload)
        },
        setidcv: (state, action) => {
            console.log("--------------here");
          
            state.cvId = action.payload
            localStorage.setItem("cvId", action.payload)
        },
        setidApplyJob: (state, action) => {
            state.idApplyJob = action.payload
            localStorage.setItem("idApply", JSON.stringify(action.payload))

        },
        setSearchJob: (state, action) => {
            state.searchJob = action.payload
           

        },

        setUserLogout: (state, action) => {
            state.user = "Người dùng"
            state.isLogin = false
            localStorage.removeItem("user");
            localStorage.removeItem("token");
            localStorage.removeItem("role");
            localStorage.removeItem("idcompany");
            sessionStorage.clear()
            localStorage.removeItem("data");
        },

        //for candidate
        setActivatedCvId: (state, action) => {
            let cpState = { ...state.user };
            cpState.activatedCvId = action.payload;
            state.user = { ...cpState }
            
           sessionStorage.setItem("user", JSON.stringify(state.user));
        },
  

   
        //update profile :
        setCandidateData: (state, action) => {
            state.user = action.payload
            state.isLogin = true
           sessionStorage.setItem("user", JSON.stringify(state.user));
        },

        //for candidate


    }
})
// Thêm selectIsLoggedIn selector vào userSlice
export const selectIsLoggedIn = (state) => state.user.isLoggedIn;
export const { setUserLogin, setRole, setData, setToken, setidCompany, setidCandidate, setUserLogout, setActivatedCvId, setidApplyJob, setSearchJob, setCandidateData, setidcv } = userSlice.actions
export default userSlice.reducer;

// createSlice được sử dụng để tạo ra một slice, bao gồm tên slice (name), 
//initialState ban đầu cho slice, và một object reducers chứa các reducer function được xác định bởi createSlice. 
//Các reducer function này sẽ được sử dụng để cập nhật state khi action tương ứng được dispatch.

// setUserLogin, setUserLogout, setActivatedCvId, setApplyJobs, setCandidateData là các 
//reducer function được xác định bởi createSlice. Mỗi reducer function này đại diện cho một action và được sử dụng để cập nhật state của slice khi action tương ứng được dispatch.

// Các reducer function này sử dụng Immer để thực hiện việc cập nhật state một cách dễ dàng và tránh việc thay đổi 
//state ban đầu trực tiếp.

// sessionStorage được sử dụng để lưu trữ thông tin user và đăng nhập. 
//Khi user đăng nhập, thông tin user được lưu trữ trong sessionStorage để giữ cho user đã đăng nhập khi reload trang. 
//Khi user đăng xuất, thông tin user trong sessionStorage được xóa.