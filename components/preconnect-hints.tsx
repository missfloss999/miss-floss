"use client";

import ReactDOM from "react-dom";

export default function PreconnectHints() {
  ReactDOM.preconnect("https://www.googletagmanager.com");
  ReactDOM.prefetchDNS("https://www.google-analytics.com");
  ReactDOM.prefetchDNS("https://cal.com");
  return null;
}
