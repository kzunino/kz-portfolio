import React from "react";

export default () => {
  return (
    <main id="home">
      <h1 className="lg-heading">
        Kyle <span className="text-secondary">Zunino</span>
      </h1>
      <h2 className="sm-heading">Full Stack JavaScript Web Developer</h2>
      <div className="icons">
        <a
          href="https://www.linkedin.com/in/kylezunino/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin fa-2x" />
        </a>
      </div>
      <div className="icons">
        <a
          href="https://github.com/kzunino"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github fa-2x" />
        </a>
      </div>
      <div className="icons">
        <a
          href="https://www.instagram.com/kzunino"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram fa-2x" />
        </a>
      </div>
    </main>
  );
};
