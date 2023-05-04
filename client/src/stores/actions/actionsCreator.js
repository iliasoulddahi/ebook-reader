import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGIN_REQUEST, SET_PAGE, FETCH_ONE_EBOOK_SUCCESS, FETCH_EBOOKS_SUCCESS } from "./actionType";
import axios from "axios";
export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

// ebook
export const fetchEbooksSuccess = (payload)=> ({
    type: FETCH_EBOOKS_SUCCESS,
    payload
})
export const fetchOneEbookSuccess = (payload)=> ({
    type: FETCH_ONE_EBOOK_SUCCESS,
    payload
})

/* =========================THUNK====================== */
const apiUrl = "https://a94f-223-255-230-63.ngrok-free.app/api/v1/"

export const login = (credentials) => {
  return async (dispatch, getState) => {
    dispatch(loginRequest());
    
    try {
      const response = await axios.post(apiUrl+"auth", credentials);
      const user = response.data;
      dispatch(loginSuccess(user));
      localStorage.access_token = user?.access_token;
    } catch (error) {
        if(error?.response?.data?.message){
            dispatch(loginFailure(error?.response?.data?.message));
            console.log(error?.response?.data?.message)
        }else{
            dispatch(loginFailure(error?.response?.data?.message));
            console.log(error?.message)
        }
    }
  };
};

export const fetchEbooks = ()=> {
    return async (dispatch) => {
        try {
           const { data } = await axios.get(apiUrl+"/ebooks", {
            headers:{
                token:localStorage.access_token
            }
           })
           console.log(data)
           dispatch(fetchEbooksSuccess( data )) 
        } catch (error) {
            console.log(error)
        }
    }
}
export const fetchOneEbook = (id)=> {
    return async (dispatch) => {
        try {
           const { data } = await axios.get(apiUrl+"/ebooks/"+id, {
            headers:{
                token:localStorage.access_token
            }
           })
           console.log(data)
           dispatch(fetchOneEbookSuccess( data )) 
        } catch (error) {
            console.log(error)
        }
    }
}