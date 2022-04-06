import axios from "axios";
import React, { useEffect, useState } from "react";
import { URL_API_PROFILES } from "../../../shared/consts";
import { UserProfileProps } from "../Profile";
import Profile from "./Profile";

function ProfileList() {
  const [profileList, setProfileList] = useState([]);
  const [skeleton, setSkeleton] = useState(true);
  const [requireDelete, setRequireDelete] = useState(false);
  const [error, setError] = useState("");

  const onDeleteProfiles = () => {
    setSkeleton(true);

    axios
      .delete(URL_API_PROFILES)
      .then(() => {
        setProfileList([]);
        setError("Perfiles eliminados");
        setSkeleton(false);
      })
      .catch((error) => {
        setError("Error al eliminar los perfiles");
        setSkeleton(false);
      });
  };

  useEffect(() => {
    axios
      .get(URL_API_PROFILES)
      .then((response) => {
        setProfileList(response.data.profileList);
        setSkeleton(false);
      })
      .catch((error) => {
        setError("Error al consultar los perfiles");
        setSkeleton(false);
      });
  }, []);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center mb-3 border p-4 rounded-3">
      <h1 className="mb-4">Listado de perfiles almacenados</h1>

      {skeleton ? (
        <div className="spinner-border text-primary my-4" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : !!error ? (
        <div className="alert alert-danger my-4" role="alert">
          {error}
        </div>
      ) : profileList.length === 0 ? (
        <div className="alert alert-info my-4" role="alert">
          No hay perfiles almacenados
        </div>
      ) : (
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h4>Total perfiles almacenados: ({profileList.length})</h4>

          <div>
            {requireDelete ? (
              <div>
                <button
                  type="button"
                  className="btn btn-danger mx-1"
                  onClick={() => setRequireDelete(false)}
                >
                  Cancelar
                </button>

                <button
                  type="button"
                  className="btn btn-primary mx-1"
                  onClick={onDeleteProfiles}
                >
                  Confirmar eliminación de perfiles
                </button>
              </div>
            ) : (
              <button
                type="button"
                className="btn btn-danger mx-1"
                onClick={() => setRequireDelete(true)}
              >
                Eliminar todos los perfiles
              </button>
            )}
          </div>

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

export default ProfileList;
