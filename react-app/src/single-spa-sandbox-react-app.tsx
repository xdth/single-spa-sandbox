import React from "react";
import ReactDOM from "react-dom"; // Changed from ReactDOMClient to ReactDOM
import singleSpaReact from "single-spa-react";
import Root from "./root.component";

const lifecycles = singleSpaReact({
  React,
  ReactDOM, // Ensure we pass ReactDOM here
  rootComponent: Root,
  errorBoundary(err, info, props) {
    return <div>Error in React Microfrontend!</div>; // Added basic error boundary
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
