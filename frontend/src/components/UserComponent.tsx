import React, { useState } from 'react';
import { useUser, useCreateUser, useUpdateUser, useDeleteUser, useLogin } from '../hooks/useUsers';
import { CreateUserDto, LoginData, User } from '../types/index.ts';

const UserComponent: React.FC = () => {
  const [userId, setUserId] = useState("");
  const { data: userResponse, isLoading, error } = useUser(userId);
  const createUser = useCreateUser();
  const updateUser = useUpdateUser(userId);
  const deleteUser = useDeleteUser(userId);
  const login = useLogin();

  const handleFetchUser = () => {
    const testUserId = "0.9680633236058678_0.35289727262688664_1729007866269"; // Example user ID
    console.log("Fetching user with ID:", testUserId);
    setUserId(testUserId);
  };

  const handleCreateUser = async () => {
    const newUser: CreateUserDto = { name: 'New User', email: 'newuser@example.com', password: 'password' };
    await createUser.mutateAsync(newUser);
  };

  const handleUpdateUser = async () => {
    await updateUser.mutateAsync({ name: 'Updated Name' } as Partial<User>);
  };

  const handleDeleteUser = async () => {
    await deleteUser.mutateAsync();
  };

  const handleLogin = async () => {
    const loginData: LoginData = { username: 'user', password: 'password' };
    await login.mutateAsync(loginData);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching user: {error.message}</div>;

  const user = userResponse?.user;
  console.log("Fetched user:", user); // Log fetched user data

  return (
    <div>
      <h1>User: {user ? user.username : "No user found"}</h1>
      <button onClick={handleFetchUser}>Fetch User</button>
      <button onClick={handleCreateUser}>Create User</button>
      <button onClick={handleUpdateUser}>Update User</button>
      <button onClick={handleDeleteUser}>Delete User</button>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default UserComponent;
