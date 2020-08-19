import axios from "axios";

const initialData = {
  array: [],
  error: "",
};

/* types */
const SET_TEXT = ["SET_TEXT"];
const SET_ERROR = ["SET_ERROR"];

/* reducer */

export default function textReducer(state = initialData, action) {
  switch (action.type) {
    case SET_TEXT:
      return { ...state, array: [...state.array, action.payload], error: "" };
    case SET_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

/* actions */

export const addText = (text) => async (dispatch) => {
  try {
    const response = await axios.post("http://localhost:5000/api/v1/text", {
      text,
    });

    dispatch({
      type: SET_TEXT,
      payload: response.data.text,
    });
  } catch (error) {
    dispatch(addError());
  }
};

export const addError = (error) => async (dispatch) => {
  dispatch({
    type: SET_ERROR,
    payload: error,
  });
};
