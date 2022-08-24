import { UseRetryAsyncProps, UseRetryAsyncResult } from "./useRetryAsync.types";
declare const useRetryAsync: ({ maxRetries, pauseDuration, onIterationComplete, onComplete, }: UseRetryAsyncProps) => UseRetryAsyncResult;
export default useRetryAsync;
