import { UserProfileProps } from "../Scrapper";
import { URL_API } from "../../../shared/consts";
import axios from "axios";
import React, { useState } from "react";
import Profile from "./Profile";

function ScrapperSearch() {
  const [keyword, setKeyword] = useState("");
  const [totalPages, setTotalPages] = useState("1");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [profileList, setProfileList] = useState([]);

  const onClean = () => {
    setError("");
    setLoading(false);
    setKeyword("");
    setTotalPages("1");
  };

  const onSubmit = (e: any) => {
    e.preventDefault();

    if (!!keyword && !!totalPages) {
      setLoading(true);
      setError("");
      setProfileList([]);

      axios
        .post(URL_API, { keyword, totalPages })
        .then((response) => {
          const { success, profileList, message } = response?.data || {};

          if (success) {
            setProfileList(profileList);
          } else {
            setError(message || "Error");
          }

          setLoading(false);
        })
        .catch((e) => {
          setError(e.response?.data?.message || "Error");
          setLoading(false);
        });
    }
  };

  return (
    <div className="px-5 py-4">
      <form
        className="d-flex flex-column justify-content-center align-items-center mb-3 border p-4 rounded-3"
        onSubmit={onSubmit}
      >
        <h1 className="mb-4">Consulta de perfiles de LinkedIn</h1>

        <div className="input-group flex-nowrap mb-4">
          <span className="input-group-text">Búscar perfiles</span>

          <input
            id="keyword"
            type="text"
            className="form-control"
            placeholder="Palabra clave"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            disabled={loading}
            autoFocus
          />
        </div>

        <div className="input-group flex-nowrap mb-4">
          <span className="input-group-text">
            Cantidad de páginas a consultar
          </span>

          <select
            className="form-select"
            value={totalPages}
            onChange={(e) => setTotalPages(e.target.value)}
            disabled={loading}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="3">5</option>
            <option value="3">10</option>
          </select>
        </div>

        <div>
          <button
            type="submit"
            className="btn btn-primary mx-1"
            disabled={loading}
          >
            Iniciar scrapper
          </button>

          <button
            type="button"
            className="btn btn-danger mx-1"
            disabled={loading}
            onClick={onClean}
          >
            Limpiar
          </button>
        </div>

        {loading && (
          <div className="spinner-border text-primary my-4" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}

        {!!error && (
          <div className="alert alert-danger my-4" role="alert">
            Ocurrió un error: {error}
          </div>
        )}
      </form>

      {profileList.length > 0 && (
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h4>Resultados de búsqueda ({profileList.length})</h4>

          <div>
            {profileList.map((profile: UserProfileProps, index) => (
              <Profile key={index} profile={profile} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ScrapperSearch;
