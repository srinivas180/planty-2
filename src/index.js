import React from "react";
import ReactDOM from "react-dom/client";

import { makeServer } from "./server";
import App from "./App";
import "./index.css";

// Call make Server
makeServer();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
