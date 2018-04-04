import axios from "axios/index";
import { getUrl } from "../../../utils/index";
import {forecastFailure, forecastRequest, forecastSuccess} from "./index";

export default coords => async (dispatch) => {
  dispatch(forecastRequest);
  try{
    const response = await axios.get(getUrl(coords));
    dispatch(forecastSuccess(response.data));
  } catch (e){
    dispatch(forecastFailure(e));
  }
};