import React from "react";
import { Navigate } from "react-router-dom";

function Stats({ user }) {
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return (
    <div className="py-2 space-x-2 font-bold">
      <h2>Stats View</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
    </div>
  );
}


export default Stats;