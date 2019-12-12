import React from "react";

export default () => {
  let d = new Date();
  let date = d.getFullYear();
  return <footer id="main-footer">Copyright © {date}</footer>;
};
