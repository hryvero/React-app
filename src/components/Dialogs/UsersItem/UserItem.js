import React from "react";
import { NavLink } from "react-router-dom";
// import s from "../Dialogs.module.css";

const Users = (props) => {
  let path = "/dialogs" + props.id;
  return (
    <div>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

export default function UserItem(props) {
  let userElements = props.state.map((item) => {
    return <Users name={item.name} id={item.id} />;
  });
  return <div>{userElements}</div>;
}
