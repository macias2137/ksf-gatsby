import React from "react";
import { TeamData } from "../../team-data";
import TeamMember from "../TeamMember";

const TeamPresentation = ({ className, offsetY }) => {
  const left = offsetY / 70 - 22;
  return (
    <div
      className={`columns team-presentation is-multiline is-centered is-marginless ${className}`}
      style={
        offsetY && window.innerHeight > 800 && left < 0
          ? { left: `${left}%` }
          : { left: 0 }
      }
    >
      {TeamData.teamMembers.map((member) => (
        <TeamMember
          name={member.name}
          img={member.img}
          description={member.description}
          offsetY={offsetY}
        />
      ))}
    </div>
  );
};

export default TeamPresentation;
