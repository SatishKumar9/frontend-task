import React from "react";

import "../App.css";
import _ from "lodash";
import backArrow from "../assets/Back.png";
import rightArrow from "../assets/Path (1).png";
import logo from "../assets/logo.png";

const Breadcrumb = (props) => {
  const { crumbs, selected, clickBack } = props;
  const seperator = (index) => {
    if (index !== crumbs.length - 1) {
      return <img height="15px" src={rightArrow} alt="" />;
    }
  };

  const crumbItem = (index) => {
    if (index === crumbs.length - 1) {
      return {
        color: "#2b2b2b",
        fontWeight: "bold",
      };
    }
  };

  return (
    <nav className="justify-content-center navBar">
      <ol className="breadcrumb">
        <div
          onClick={() => (_.size(crumbs) > 1 ? clickBack() : null)}
          className="pointer"
        >
          <img
            src={backArrow}
            alt=""
            width="20px"
            height="20px"
            style={{ margin: "1rem 0.5rem 0 0" }}
          />
        </div>
        <img src={logo} alt="" className="companyLogo" />
        {_.map(crumbs, (crumb, index) => {
          return (
            <div key={crumb.id}>
              <p
                className="pointer"
                style={{ marginTop: "1rem" }}
                onClick={() =>
                  _.size(crumbs) > 1 ? selected({ crumb, type: "nav" }) : null
                }
              >
                <span style={crumbItem(index)}>{crumb.name}</span>
                <span style={{ margin: "0 1rem" }}>{seperator(index)}</span>
              </p>
            </div>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
