import { User, CreateUserDto, LoginData, UserResponse } from "../types/index.ts";
import { useApiQuery, useApiMutation } from "./useApi";

// Fetch a user by ID
export const useUser = (userId: string) => {
  return useApiQuery<UserResponse>(`/user/${userId}`, !!userId); // Only enable query if userId is provided
};

// Create a new user
export const useCreateUser = () => {
  return useApiMutation<CreateUserDto, User>("/user", 'POST'); // Path to create a new user
};

// Update an existing user
export const useUpdateUser = (userId: string) => {
  return useApiMutation<Partial<User>, User>(`/user/${userId}`, 'PATCH'); // Path to update user
};

// Delete a user
export const useDeleteUser = (userId: string) => {
  return useApiMutation<void, User>(`/user/${userId}`, 'DELETE'); // Path to delete user
};

// Login a user
export const useLogin = () => {
  return useApiMutation<LoginData, User>("/user/login", 'POST'); // Path to log in
};
