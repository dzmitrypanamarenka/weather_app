import axios from "axios";
import { getUrl } from "../../../utils/index";
import forecastActions from './';

const {forecastFailure, forecastRequest, forecastSuccess} = forecastActions;

export default coords => async (dispatch) => {
  dispatch(forecastRequest);
  try{
    const response = await axios.get(getUrl(coords));
    dispatch(forecastSuccess(response.data));
  } catch (e){
    dispatch(forecastFailure(e));
  }
};