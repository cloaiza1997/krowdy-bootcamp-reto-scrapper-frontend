import React from "react";
import { ProfileProps } from "../Scrapper";

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

        {profile.websites?.map((site) => (
          <a href={site} target="_blank" rel="noreferrer">
            <span className="fs-6 lh-sm">{site}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Profile;
