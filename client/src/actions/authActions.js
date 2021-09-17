import axios from 'axios';
import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from '../constants/authConstants';

export const registerUser = (user) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_REQUEST });

    const res = await axios.post('/api/users/register', user);

    console.log(res);

    dispatch({ type: REGISTER_SUCCESS });
  } catch (error) {
    dispatch({ type: REGISTER_FAIL, payload: error });
  }
};
