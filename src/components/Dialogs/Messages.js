import React from "react";

let messagesdata = [
  { message: "Hi", id: 1 },
  { message: "How are you", id: 2 },
  { message: "Miss you", id: 3 },
  { message: "Luv u <3", id: 4 },
];
export default function Messages(props) {
  return <div>{messagesdata[0].message}</div>;
}
