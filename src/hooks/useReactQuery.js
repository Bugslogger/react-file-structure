import { REFRESH_INTERVAL, STALE_TIME } from "../utils/constant";

const useReactQuery = () => {
  if (typeof id !== "object") {
    return { error: "id parameter must be an array.", isError: true };
  }

  if (typeof queryFn !== "function") {
    throw new Error({
      error: "queryFn parameter must be a function.",
      isError: true,
    });
  }

  if (id.length === 0 || id == undefined || id == null) {
    return { error: "Invalid parameter id is passed", isError: true };
  }

  const DATA = useQuery({
    queryKey: id,
    queryFn: queryFn,
    // enabled: false,
    staleTime: STALE_TIME,
    refetchInterval: REFRESH_INTERVAL,
    
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
};

export default useReactQuery;
