import React from "react";
import { Routes, Route } from "react-router-dom";
import Bills from "./Bills";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Profile from "./Profile";
import Register from "./Register";
import Users from "./Users";

function Content() {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/bills" element={<Bills />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/users" element={<Users />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default Content;
/*<Routes>
      <Route exact path="/" component={<Dashboard />} />
      <Route path="/dashboard" component={Dashboard} />
    </Routes>*/
