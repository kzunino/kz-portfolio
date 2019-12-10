import React, { Component } from "react";
import { Link } from "react-router-dom";
import data from "../data/data";

export default class Project extends Component {
  render() {
    let { projects } = data.data;
    let {
      match: { params }
    } = this.props;
    let project = projects[params.id];

    return (
      <main id="project">
        <h1 className="lg-heading">
          Project <span className="text-secondary">Description</span>
        </h1>
        <h2 className="sm-heading">{project.project_name}</h2>
        <div>
          <p>
            Technologies:{" "}
            <span className="text-secondary">
              {project.technologies.join(", ")}
            </span>
          </p>
        </div>
        <div className="project-info">
          <img
            src={project.image_urls[0]}
            alt={project.project_name + " example screenshot"}
            className="project-image"
          />
          <img
            src={project.image_urls[1]}
            alt={project.project_name + "  second example screenshot"}
            className="project-image"
          />
        </div>
        <div className="project-description">
          <p>{project.description}</p>
        </div>
        <div>
          {project.live_link.length > 0 && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={project.live_link}
              className="view"
            >
              <i className="fas fa-eye" /> Project Live Link
            </a>
          )}
        </div>
        <div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={project.github_link}
            className="view"
          >
            <i className="fab fa-github" /> GitHub
          </a>
        </div>
        <div>
          <Link to="/work" className="back">
            <i className="far fa-caret-square-left" /> My Work
          </Link>
        </div>
      </main>
    );
  }
}
