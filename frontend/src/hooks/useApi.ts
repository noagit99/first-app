import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../api/api";

// Generic API query hook
export const useApiQuery = <TResponseType>(path: string, enabled: boolean = true) => {
  return useQuery<TResponseType, Error>({
    queryKey: [path],
    queryFn: async () => {
      const response = await api.get(path);
      return response.data;
    },
    enabled,
    staleTime: 5000,
  });
};

// Generic API mutation hook
export const useApiMutation = <TData, TResponseType>(path: string, method: 'POST' | 'PATCH' | 'DELETE') => {
  const queryClient = useQueryClient();

  return useMutation<TResponseType, Error, TData>({
    mutationFn: async (data: TData) => {
      const response = await api.request({
        url: path,
        method,
        data,
      });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [path] }); // Invalidate the queries for the specific path
    },
  });
};