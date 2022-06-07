import React from "react";
import Iframe from "react-iframe";

const Flower = () => {
  return (
    <section>
      <h1>Flower</h1>
      <div>
      <iframe src="https://www.freshtix.com/events/flowersastageplay?iframe=true" name="myFrame"></iframe>
    <p><a href="https://www.freshtix.com/events/flowersastageplay?iframe=true" target="myFrame"></a></p>
      </div>
    </section>
  );
};
export default Flower;
