import * as Types from "./actionType";
const initialState = {
  data: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, action) => {
    const {type, payload} = action
  switch (type) {
    case Types.GET_DATA_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case Types.GET_DATA_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        data: payload,
      };
    }
    case Types.GET_DATA_FAILURE: {
      return {
        ...state,
        isError: true,
      };
    }
    default:
      return state;
  }
};
