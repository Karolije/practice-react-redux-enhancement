import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import types from "./github.types";
import { fetchRepos } from "./github.actions";

const Github = () => {
  const username = useSelector((state) => state.username);
  const filter = useSelector((state) => state.filter);
  const repos = useSelector((state) => state.repos);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  const dispatch = useDispatch();

  const handleUsernameChange = (e) => {
    dispatch({ type: types.SET_USERNAME, payload: e.target.value });
  };

  const handleFilterChange = (e) => {
    dispatch({ type: types.SET_FILTER, payload: e.target.value });
  };
  useEffect(() => {
    if (username.trim().length > 0) {
      dispatch(fetchRepos(username));
    }
  }, [username, dispatch]);

  const filteredRepos = repos.filter((repo) =>
    repo.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h2>Wyszukiwarka GH repo</h2>
      <input
        type="text"
        placeholder="Wpisz nazwę"
        value={username}
        onChange={handleUsernameChange}
      />
      <input
        type="text"
        placeholder="Wyszukaj"
        value={filter}
        onChange={handleFilterChange}
        disabled={repos.length === 0}
      />
      {loading && <p>Wczytywanie...</p>}
      {error && <p style={{ color: "red" }}>Błąd: {error}</p>}
      {!loading && !error && (
        <ul>
          {filteredRepos.length === 0 ? (
            <li>Brak repozytorium</li>
          ) : (
            filteredRepos.map((repo) => (
              <li key={repo.id}>
                <a href={repo.html_url} target="_blank" rel="noreferrer">
                  {repo.name}
                </a>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
};

export default Github;
