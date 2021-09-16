import React from "react";

const TeamMember = ({ name, img, description, offsetY }) => {
  return (
    <div className="column team-member is-4-tablet is-4-desktop">
      <p className="subtitle team-member__name">{name}</p>
      <figure className="image is-square is-fullwidth mb-4 team-member__image">
        <img src={img} alt="team member" />
      </figure>
      <p className="team-member__description">{description}</p>
    </div>
  );
};

export default TeamMember;
