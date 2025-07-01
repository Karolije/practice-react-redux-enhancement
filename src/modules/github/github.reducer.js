import types from "./github.types";

const initialState = {
  username: "",
  filter: "",
  repos: [],
  loading: false,
  error: null,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_USERNAME:
      return {
        ...state,
        username: action.payload,
      };
    case types.SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    case types.SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    case types.FETCH_REPOS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.FETCH_REPOS_SUCCESS:
      return {
        ...state,
        loading: false,
        repos: action.payload,
      };
    case types.FETCH_REPOS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
