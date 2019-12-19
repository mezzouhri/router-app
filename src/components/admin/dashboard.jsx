import React from "react";
import Posts from "./posts";
import Users from "./users";
import { Switch, Route } from "react-router-dom";
import SideBar from "./sideBar";

const Dashboard = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <SideBar />
      <Switch>
        <Route path="/admin/users" component={Users} />
        <Route path="/admin/posts" component={Posts} />
      </Switch>
    </div>
  );
};

export default Dashboard;
