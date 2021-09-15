import React from "react";

const TeamMember = ({ name, img, description, offsetY }) => {
  return (
    <div className="column team-member is-4-tablet is-4-desktop is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
      <p className="subtitle team-member__name">{name}</p>
      <figure className="image is-square is-fullwidth mb-4 team-member__image">
        <img src={img} alt="team member" />
      </figure>
      <p className="team-member__text">{description}</p>
    </div>
  );
};

export default TeamMember;
