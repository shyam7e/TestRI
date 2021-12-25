import React from "react";
import { Alert } from "react-bootstrap";
import "../components/home.css";
function AnyPage() {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="bg-light box2 shadow p-4 m-auto mt-5 align-items-center">
        <Alert variant="primary" className="w-100 text-center">
          ANYPAGE
        </Alert>
      </div>
    </div>
  );
}

export default AnyPage;
