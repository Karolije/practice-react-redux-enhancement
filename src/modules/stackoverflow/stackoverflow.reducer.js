import types from "./stackoverflow.types";

const initialState = {
  query: "",
  results: [],
  loading: false,
  error: null,
};

const stackoverflowReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_QUERY:
      return { ...state, query: action.payload };

    case types.FETCH_RESULTS_REQUEST:
      return { ...state, loading: true, error: null };

    case types.FETCH_RESULTS_SUCCESS:
      return { ...state, loading: false, results: action.payload };

    case types.FETCH_RESULTS_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default stackoverflowReducer;
