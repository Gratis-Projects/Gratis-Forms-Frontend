import {USER_LOGIN_FAIL,USER_LOGIN_SUCCESS,USER_LOGIN_REQUEST,USER_LOGOUT } from '../constants/userConstants';
import axios from 'axios';


export const login=(user=>async(dispatch)=>{
    try{
        dispatch({type:USER_LOGIN_REQUEST})
        const config={
            headers: {
                "Content-Type": "application/json",
              },
        }
        const {data}=await axios.post('http://localhost:5000/api/user/login',user,config)
        dispatch({type:USER_LOGIN_SUCCESS,payload:data});
        localStorage.setItem('userInfo',JSON.stringify(data));

    }catch(error){
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.error
                : error.response.error,
          });
    }
})

export const logout=()=>{return async (dispatch,getState)=>{
    try {
  
        localStorage.removeItem("userInfo");
        dispatch({ type: USER_LOGOUT });
        document.location.href = "/login";
      } catch (err) {
        console.error(err);
      }
}
}