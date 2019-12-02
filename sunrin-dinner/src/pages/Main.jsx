import React from "react";
import ServiceIntro from "../components/ServiceIntro";
import withLayout from "../components/withLayout";

class Main extends React.Component {
  render() {
    return (
      <div>
        <ServiceIntro/>
      </div>
    );
  }
}
export default withLayout(Main);
