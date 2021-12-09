import * as __SNOWPACK_ENV__ from '../_snowpack/env.js';
import.meta.env = __SNOWPACK_ENV__;

import React from "react";
import ReactDOM from "react-dom";
import "wicg-inert";
import registerServiceWorker from "./registerServiceWorker.js";
import App from "./App.js";
ReactDOM.render(/* @__PURE__ */ React.createElement(App, null), document.getElementById("root"));
registerServiceWorker();
if (undefined /* [snowpack] import.meta.hot */ ) {
  undefined /* [snowpack] import.meta.hot */ .accept();
}
