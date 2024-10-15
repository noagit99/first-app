import React, { useState } from "react";
import { useUser } from "../hooks/useUsers";

const UserComponent: React.FC = () => {
  const [userId, setUserId] = useState("");
  const { data: user, isLoading, error } = useUser(userId);

  const handleFetchUser = () => {
    const testUserId = "0.9128450849155485_0.44020600561636924_1728809149611"; // example user ID
    console.log("Fetching user with ID:", testUserId);
    setUserId(testUserId);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching user: {error.message}</div>;

  console.log("Fetched user:", user); // Log fetched user data

  return (
    <div>
      <h1>User: {user?.username || "No user found"}</h1>
      <button onClick={handleFetchUser}>Fetch User</button>
    </div>
  );
};

export default UserComponent;
