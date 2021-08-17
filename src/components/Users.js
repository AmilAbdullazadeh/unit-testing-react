import React from "react";

const Users = (props) => {
  const { user } = props;

  const legal =
    user.age >= 18 ? (
      <h1 style={{ color: "green" }}>{user.name}</h1>
    ) : (
      <h1 style={{ color: "black" }}>{user.name}</h1>
    );

  return <div data-testid={`user-${user.id}`}>{legal}</div>;
};

export default Users;
