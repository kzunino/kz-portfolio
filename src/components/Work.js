import React, { Component } from "react";
import { Link } from "react-router-dom";
import data from "../data/data";

export default class Work extends Component {
  render() {
    let { projects } = data.data;
    let works = null;

    if (projects.length > 0) {
      works = projects.map((project, i) => {
        return (
          <div className="item" key={i}>
            <Link to={"/project/" + i}>
              <img src={project.image_urls[0]} alt={project.project_name} />
            </Link>
            {project.live_link.length > 0 && (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={project.live_link}
                className="btn-light"
              >
                <i className="fas fa-eye" /> Project Live Link
              </a>
            )}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={project.github_link}
              className="btn-dark"
            >
              <i className="fab fa-github" /> GitHub
            </a>
          </div>
        );
      });
    }

    return (
      <main id="work">
        <h1 className="lg-heading">
          My <span className="text-secondary">Work</span>
        </h1>
        <h2 className="sm-heading">Check out some of my projects...</h2>
        <div className="projects">{works}</div>
      </main>
    );
  }
}
