import React from "react";
import runBud from "../../assets/img/hero-bg.jpeg";
import currency from "../../assets/img/Screen Shot 2022-08-21 at 9.27.15 AM.png";
import starSign from "../../assets/img/Screen Shot 2022-10-14 at 7.15.54 PM.png";
function Projects() {
  return (
    <section className="modalContainer">
      <div>
        <h3>Run-Buddy</h3>
        <a href="file:///Users/chrisbond/projects/run-buddy/index.html">
          <img alt=" " src={runBud} />
        </a>
      </div>

      <div>
        <h3>Currency Exchange</h3>
        <a href="https://chrisbond1226.github.io/currency-exchange2/">
          <img alt="" src={currency} />
        </a>
      </div>

      <div>
        <h3>Star Sign Lovers</h3>
        <a href="https://stark-hollows-94979.herokuapp.com/">
          <img alt="" src={starSign} />
        </a>
      </div>
    </section>
  );
}

export default Projects;
