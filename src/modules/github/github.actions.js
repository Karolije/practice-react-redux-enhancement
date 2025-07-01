import types from "./github.types";
import GitHubAPI from "./github.api";

const api = new GitHubAPI();

export const setUsername = (username) => {
  return {
    type: types.SET_USERNAME,
    payload: username,
  };
};

export const setFilter = (filter) => ({
  type: types.SET_FILTER,
  payload: filter,
});

export const fetchRepos = (username) => {
  return (dispatch) => {
    dispatch({ type: types.FETCH_REPOS_REQUEST });

    api
      .getRepos(username)
      .then((repos) => {
        dispatch({ type: types.FETCH_REPOS_SUCCESS, payload: repos });
      })
      .catch((error) => {
        dispatch({ type: types.FETCH_REPOS_FAILURE, payload: error.message });
      });
  };
};
