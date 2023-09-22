import React from "react";

export default function UserItem({ user }) {
  return (
    <div className="user">
      <h3>Id: {user.id}</h3>
      <h2>Name: {user.name}</h2>
      <h1>Username: {user.username}</h1>
      <h2>Email: {user.email}</h2>
      <address>
        Address:
        <p>{user.address.street}</p>
        <p>{user.address.suite}</p>
        <p>{user.address.city}</p>
        <p>{user.address.zipcode}</p>
        <p>{user.address.geo.lat}</p>
        <p>{user.address.geo.lng}</p>
      </address>
      <h3>Phone: {user.phone}</h3>
      <h3>Website: {user.website}</h3>
      <h3>Company: {user.company.name}</h3>
      <h4>{user.company.catchPhrase}</h4>
      <h4>{user.company.bs}</h4>
    </div>
  );
}
