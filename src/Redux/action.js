import axios from "axios";
import * as Types from "./actionType";

export const getData = () => (dispatch) => {
  dispatch({ type: Types.GET_DATA_REQUEST });
  return axios
    .get("http://localhost:5000")
    .then((res) => {
      dispatch({ type: Types.GET_DATA_SUCCESS, payload: res.data });
      return Types.GET_DATA_SUCCESS;
    })
    .catch((err) => {
      dispatch({ type: Types.GET_DATA_FAILURE });
      return Types.GET_DATA_FAILURE;
    });
};
export const postData = (payload) => (dispatch) => {
  dispatch({ type: Types.POST_DATA_REQUEST });
  return axios
    .post("http://localhost:5000", payload)
    .then((res) => {
      dispatch({ type: Types.POST_DATA_SUCCESS });
      return Types.POST_DATA_SUCCESS;
    })
    .catch((err) => {
      dispatch({ type: Types.POST_DATA_FAILURE });
      return Types.POST_DATA_FAILURE;
    });
};

export const deleteData = (id) => (dispatch) => {
  dispatch({ type: Types.DELETE_DATA_REQUEST });
  return axios
    .delete(`http://localhost:5000/${id}`)
    .then((res) => {
      dispatch({ type: Types.DELETE_DATA_SUCCESS });
      return Types.DELETE_DATA_SUCCESS;
    })
    .catch((err) => {
      dispatch({ type: Types.DELETE_DATA_FAILURE });
      return Types.DELETE_DATA_FAILURE;
    });
};
