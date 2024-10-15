// src/components/UserComponent.tsx
import React from 'react';
import { useUser, useCreateUser, useUpdateUser, useDeleteUser, useLogin } from '../hooks/useUsers';
import { CreateUserDto, LoginData } from '../types/index.ts';

const UserComponent: React.FC<{ userId: string }> = ({ userId }) => {
  const { data: user, isLoading, error } = useUser(userId) as { data: { name: string } | null, isLoading: boolean, error: any };
  const createUser = useCreateUser();
  const updateUser = useUpdateUser(userId);
  const deleteUser = useDeleteUser();
  const login = useLogin();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching user: {error.message}</div>;

  const handleCreateUser = async () => {
    const newUser: CreateUserDto = { name: 'New User', email: 'newuser@example.com', password: 'password' };
    await createUser.mutateAsync(newUser);
  };

  const handleUpdateUser = async () => {
    await updateUser.mutateAsync({ name: 'Updated Name' });
  };

  const handleDeleteUser = async () => {
    await deleteUser.mutateAsync(userId);
  };

  const handleLogin = async () => {
    const loginData: LoginData = { username: 'user', password: 'password' };
    await login.mutateAsync(loginData);
  };

  return (
    <div>
      <h1>User: {user?.name}</h1>
      <button onClick={handleCreateUser}>Create User</button>
      <button onClick={handleUpdateUser}>Update User</button>
      <button onClick={handleDeleteUser}>Delete User</button>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default UserComponent;
