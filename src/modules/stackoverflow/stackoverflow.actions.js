import types from "./stackoverflow.types";
import API from "./stackoverflow.api";

export const setQuery = (query) => ({
  type: types.SET_QUERY,
  payload: query,
});

export const fetchResults = (query) => {
  return (dispatch) => {
    dispatch({ type: types.FETCH_RESULTS_REQUEST });

    API.search(query)
      .then((data) => {
        dispatch({
          type: types.FETCH_RESULTS_SUCCESS,
          payload: data.items,
        });
      })
      .catch((err) => {
        dispatch({
          type: types.FETCH_RESULTS_FAILURE,
          payload: err.message,
        });
      });
  };
};
