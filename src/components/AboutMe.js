import React, { Component } from "react";
import ReactMarkdown from "react-markdown";

import aboutMe from "../data/aboutMe";

export default class AboutMe extends Component {
  render() {
    let { bio, jobs } = aboutMe.aboutMe;

    let job = null;
    if (jobs.length > 0) {
      job = jobs.map((job, i) => {
        return (
          <div key={i} className={`job job-${i + 1}`}>
            {job.name.length > 0 && (
              <h3 className="text-secondary">{job.name}</h3>
            )}
            {job.position.length > 0 && <h6>{job.position}</h6>}
            <ReactMarkdown source={job.description} />
          </div>
        );
      });
    }
    return (
      <main id="about">
        <h1 className="lg-heading">
          About <span className="text-secondary">Me</span>
        </h1>
        <h2 className="sm-heading">Let me tell you a few things...</h2>
        <div className="about-info">
          <img
            src={"/img/portrait.jpg"}
            alt="Kyle Zunino"
            className="bio-image"
          />
          <div className="bio">
            <h3 className="text-secondary">BIO</h3>
            <ReactMarkdown source={bio} />
          </div>
          {job}
        </div>
      </main>
    );
  }
}
