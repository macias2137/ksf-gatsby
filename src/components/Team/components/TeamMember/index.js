import React from "react";

const TeamMember = ({ name, img, description, offsetY }) => {
  return (
    <div className="column team-member is-4">
      <figure className="image mb-4 team-member__image">
        <img src={img} alt="team member" />
      </figure>
      <div className="team-member__text">
        <p className="team-member__name is-size-5 pb-4">{name}</p>
        <p className="team-member__description">{description}</p>
      </div>
    </div>
  );
};

export default TeamMember;
