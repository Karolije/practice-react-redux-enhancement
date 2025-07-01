import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setQuery, fetchResults } from "./stackoverflow.actions";

const StackOverflow = () => {
  const dispatch = useDispatch();
  const query = useSelector((state) =>
    state.stackoverflow ? state.stackoverflow.query : ""
  );
  const results = useSelector((state) =>
    state.stackoverflow ? state.stackoverflow.results : []
  );
  const loading = useSelector((state) =>
    state.stackoverflow ? state.stackoverflow.loading : false
  );
  const error = useSelector((state) =>
    state.stackoverflow ? state.stackoverflow.error : null
  );

  const handleChange = (e) => {
    dispatch(setQuery(e.target.value));
  };

  useEffect(() => {
    if (query.trim()) {
      dispatch(fetchResults(query));
    }
  }, [query, dispatch]);

  const sortedQuestions = results.slice().sort((a, b) => {
    if (b.creation_date !== a.creation_date) {
      return b.creation_date - a.creation_date;
    }
    return (b.owner?.reputation || 0) - (a.owner?.reputation || 0);
  });

  return (
    <div>
      <h2>StackOverflow Search</h2>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Wpisz..."
      />
      {loading && <p>Ładowanie...</p>}
      {error && <p style={{ color: "red" }}>Błąd: {error}</p>}
      {!loading && !error && (
        <ul>
          {sortedQuestions.map((item) => (
            <li key={item.question_id}>
              <a href={item.link} target="_blank" rel="noreferrer">
                {item.title}
              </a>
              <br />
              <strong>Data publikacji:</strong>{" "}
              {new Date(item.creation_date * 1000).toLocaleString()}
              <br />
              <strong>Reputacja autora:</strong>{" "}
              {item.owner?.reputation || "brak"} <br />
              <strong>Wynik (score):</strong> {item.score}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StackOverflow;
