import React from "react";
import s from "./Dialogs.module.css";
import Messages from "./Messages";
import UserItem from "./UsersItem/UserItem";

export default function Dialogs(props) {
  return (
    <div className={s.content}>
      <div className={s.users}>
        <UserItem state={props.state} />
      </div>
      <div className={s.message}>
        <Messages />
      </div>
    </div>
  );
}
