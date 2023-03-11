import React from "react";
import "./About.scss";
import steve from "../../assets/steve.jpg";

function About() {
  return (
    <div className="about">
      <img className="aboutImg" alt="image of Stephen Bassett" src={steve} />
      <section className="aboutInfo">
        <h1 className="aboutTitle">Crispy Edits</h1>
        <p className="aboutDescription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          tempore maiores reprehenderit illo sit unde eius, dolores deserunt,
          enim dicta non eligendi vitae dolor rem voluptate quaerat sint nisi
          corporis?
        </p>
      </section>
    </div>
  );
}

export default About;
