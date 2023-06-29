import { loginFailure, loginStart, loginSucess } from "./userReducer";
import ChamadaApi from "../services/metodoRequest.js";

export const loginApi = async (dispatch, usuario) =>{
    dispatch(loginStart());
    try{
        const res = await ChamadaApi().post("/login",usuario)
        dispatch(loginSucess(res.data))
    }catch(err){
        dispatch(loginFailure())
    }
}