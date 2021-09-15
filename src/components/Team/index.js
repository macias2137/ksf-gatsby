import React, { useState, useEffect } from "react";
import TeamPresentation from "./components/TeamPresentation";
import { TeamData as data } from "./team-data";

const Team = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [offsetY]);

  const { title } = data;
  return (
    <section id="team" className="section team">
      <div className="container">
        <p className="title has-text-centered team__title">{title}</p>
        <TeamPresentation className="is-hidden-desktop" />
        <TeamPresentation className="is-hidden-touch" offsetY={offsetY} />
      </div>
    </section>
  );
};

export default Team;
