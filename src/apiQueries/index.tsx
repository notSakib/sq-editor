import {
  deleteSavedQueries,
  getDbColumns,
  getQueryData,
  getSavedQueries,
  postSavedQueries,
} from "@/lib/api";
import toast from "react-hot-toast";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useQueryData = () =>
  useQuery({
    queryKey: ["GET_QUERY_DATA"],
    queryFn: getQueryData,
    enabled: false,
    initialData: [],
  });
export const useDbColumn = ({ activeTab }: { activeTab: string }) =>
  useQuery({
    queryKey: ["GET_DB_COLUMN_DATA"],
    queryFn: getDbColumns,
    enabled: activeTab === "data",
    initialData: [],
  });
export const useGetSavedQueries = (savedQueriesInitialData: any) =>
  useQuery({
    queryKey: ["GET_SAVED_QUERIES"],
    queryFn: getSavedQueries,
    initialData: savedQueriesInitialData,
  });
export const useAddQuery = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ query }: { query: string }) => {
      return postSavedQueries(query);
    },
    onSuccess: () => {
      toast.success(`Query added successfully`);
      queryClient.invalidateQueries({ queryKey: ["GET_SAVED_QUERIES"] });
    },
  });
};
export const useDeleteQuery = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ index }: { index: number }) => {
      return deleteSavedQueries(index);
    },
    onSuccess: () => {
      toast.success(`Query deleted successfully`);
      queryClient.invalidateQueries({ queryKey: ["GET_SAVED_QUERIES"] });
    },
  });
};
