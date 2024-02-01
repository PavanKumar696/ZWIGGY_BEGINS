import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/header.js";
import Body from "./components/Body.js";

/*
Header
    -logo
    -Nav items
Body
    -Search
    -Restaurant Container
        -Restaurant Card
            -Img
            -Name of Res,Star Rating,cusine,delivery time
Footer
    -Copyright
    -Links
    -Address
    -Contact
*/

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const head = ReactDOM.createRoot(document.querySelector("#root"));
head.render(<AppLayout />);
