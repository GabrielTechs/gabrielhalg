import React from "react";
import Helmet from "react-helmet";

const HelmetData = (props) => {
  return (
    <Helmet>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@AlguacilGabriel" />
      <meta name="twitter:creator" content="@AlguacilGabriel" />
      <meta name="twitter:title" content="Gabriel Alguacil" />
      <meta
        name="twitter:description"
        content="Software engineer passionate about front end development and new tech."
      />
    </Helmet>
  );
};

export default HelmetData;
