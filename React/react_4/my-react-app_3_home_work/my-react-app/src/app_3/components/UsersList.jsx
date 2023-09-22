import React from "react";
import UserItem from "./UserItem";

export default function UsersList(props) {
  return (
    <div className="users-results">
      {props.users.map(user => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
}
