import React from "react";
import classNames from "classnames";
import styles from "./Icon.module.css";
export default (viewBox, icon) => ({className, ...props}) => /* @__PURE__ */ React.createElement("svg", {
  className: classNames(styles.icon, className),
  viewBox,
  ...props,
  focusable: "false",
  "aria-hidden": "true",
  xmlns: "http://www.w3.org/2000/svg"
}, icon);
