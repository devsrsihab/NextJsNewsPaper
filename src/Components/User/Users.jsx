"use client";

import { useEffect, useState } from "react";
import User from "./User";

const Users = () => {
  // state for user
  const [users, setUsers] = useState([]);
  // use Effect for user state
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, []);
  console.log(users);

  return (
    <div className="w-5/6 mx-auto">
      <h2 className="text-2xl text-red-500">Total: {users.length} </h2>
      <div className="inner-container grid grid-cols-3 ">
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Users;
