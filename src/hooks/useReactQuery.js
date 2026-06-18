import { useQuery } from "@tanstack/react-query";
import { QUERY_CONFIG } from "../utils/app.config";

const useReactQuery = ({ id, queryFn, enabled = true } = {}) => {
  if (!Array.isArray(id) || id.length === 0) {
    return { error: "id parameter must be a non-empty array.", isError: true };
  }

  if (typeof queryFn !== "function") {
    return { error: "queryFn parameter must be a function.", isError: true };
  }

  const DATA = useQuery({
    queryKey: id,
    queryFn: queryFn,
    enabled,
    staleTime: QUERY_CONFIG.staleTime,
    refetchInterval: QUERY_CONFIG.refetchInterval,
  });

  const {
    isError,
    data,
    isPending,
    isFetching,
    isSuccess,
    error,
    refetch,
    isLoading,
  } = DATA;

  if (isError) {
    return { error, isError };
  }

  if (isFetching || isPending) {
    return { isFetching, isPending, isLoading };
  }

  if (isSuccess) {
    return {
      isSuccess,
      data,
      isError,
      isFetching,
      isPending,
      refetch,
      isLoading,
    };
  }

  return {
    data,
    error,
    isError,
    isFetching,
    isLoading,
    isPending,
    isSuccess,
    refetch,
  };
};

export default useReactQuery;
