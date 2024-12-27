// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import {CssBaseline} from '@mui/material';
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <>
//     <CssBaseline/>
//     <App />
//   </>,
// )
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { CssBaseline } from "@mui/material";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <CssBaseline />
    <App />
  </>
);