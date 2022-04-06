import React from "react";
import { ProfileProps } from "../Profile";

function Profile(props: ProfileProps) {
  const { profile } = props;

  return (
    <div className="d-flex m-2 p-2 bg-secondary bg-opacity-10 rounded-3">
      <div className="me-2">
        <img
          src={profile.avatar}
          alt={profile.name}
          width={90}
          height={90}
          className="rounded-circle bg-secondary bg-opacity-25"
          draggable="false"
        />
      </div>

      <div className="d-flex flex-column">
        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          <span className="fs-5 fw-bold lh-sm text-uppercase">
            {profile.name}
          </span>
        </a>
        <span className="fs-6 lh-sm text-capitalize">{profile.position}</span>
        <span className="fs-6 lh-sm fw-light">{profile.location}</span>
        <span className="fs-6 lh-sm fw-light">
          {profile.address || "-- Sin dirección --"}
        </span>
        <span className="fs-6 lh-sm fw-light">
          {profile.phone || "-- Sin teléfono --"}
        </span>
        {profile.email ? (
          <a href={"mailto:" + profile.email} className="fs-6 lh-sm fw-light">
            {profile.email}
          </a>
        ) : (
          <span className="fs-6 lh-sm fw-light">-- Sin email --</span>
        )}

        {profile.websites?.map((site, index) => (
          <a key={index} href={site} target="_blank" rel="noreferrer">
            <span className="fs-6 lh-sm">{site}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Profile;
