import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../api/api";
import { User, CreateUserDto, LoginData } from "../types/index.ts";

export const useUser = (userId: string) => {
  return useQuery<User | null, Error>({
    queryKey: ["user", userId],
    queryFn: async () => {
      if (!userId) return null;
      const response = await api.get(`/user/${userId}`);
      console.log("API response:", response.data); // Log the response
      return response.data.user;
    },
    enabled: !!userId,
    staleTime: 5000,
  });
};

// Create a new user
export const useCreateUser = () => {
  const queryClient = useQueryClient();
  return useMutation<User, Error, CreateUserDto>({
    mutationFn: async (userData: CreateUserDto): Promise<User> => {
      const response = await api.post("/user", userData);
      return response.data.user;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });
};

// Update an existing user
export const useUpdateUser = (userId: string) => {
  const queryClient = useQueryClient();
  return useMutation<User, Error, Partial<CreateUserDto>>({
    mutationFn: async (userData: Partial<CreateUserDto>): Promise<User> => {
      const response = await api.patch(`/user/${userId}`, userData);
      return response.data.user;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userId"] });
    },
  });
};

// Delete a user
export const useDeleteUser = () => {
  const queryClient = useQueryClient();
  return useMutation<User, Error, string>({
    mutationFn: async (userId: string): Promise<User> => {
      const response = await api.delete(`/user/${userId}`);
      return response.data.user;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });
};

// Login a user
export const useLogin = () => {
  return useMutation<User, Error, LoginData>({
    mutationFn: async (loginData: LoginData): Promise<User> => {
      const response = await api.post("/user/login", loginData);
      return response.data.user;
    },
  });
};
