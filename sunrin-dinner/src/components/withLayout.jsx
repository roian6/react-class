import React from "react";
import Banner from "../components/Banner";

const withLayout = Page => {
  return () => {
    return (
      <>
        <Banner></Banner>
        <Page />
      </>
    );
  };
};

export default withLayout;
