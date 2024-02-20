import React from "react";
import { Link } from "react-router-dom";

import "./style.scss";

import ContentWrapper from "../../components/contentWrapper/ContentWrapper";

const PageNotFound = () => {
  return (
    <div className="pageNotFound">
      <ContentWrapper>
        <img src="/cinemania-logo.svg" width={300} alt="Cinemania" />
        <span className="bigText">404</span>
        <span className="smallText">Page not found!</span>
        <Link to="/" className="homeLink">
          Go back to home page
        </Link>
      </ContentWrapper>
    </div>
  );
};

export default PageNotFound;
