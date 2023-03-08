import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import reportWebVitals from "./reportWebVitals";
import PostController from "./CRUDcomponents/postController";
import GetOrder from "./CRUDcomponents/getController";
import DeleteComponent from "./CRUDcomponents/DeleteController";
import UpdateController from "./CRUDcomponents/updateController";
import Layout from "./Layout/Layout";
import LoginSignupForm from "./LoginComponents/login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginSignupForm />} />
        <Route path="/layout" element={<Layout />}>
          <Route path="/layout/home" element={<PostController />} />
          <Route path="/layout/get" element={<GetOrder />} />
          <Route path="/layout/update" element={<UpdateController />} />
          <Route path="/layout/delete" element={<DeleteComponent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);

reportWebVitals();
