export interface UseRetryAsyncProps {
    maxRetries: number;
    pauseDuration: number;
    onIterationComplete?(
        files: UseRetryAsyncFiles,
        values: PromiseSettledResult<any>[]
    ): void;
    onComplete?(files: UseRetryAsyncFiles): void;
}

export interface UseRetryAsyncResult {
    init(requests: UseRetryAsyncRequests, files: UseRetryAsyncFiles): void;
    initOnce(requests: UseRetryAsyncRequests, files: UseRetryAsyncFiles): void;
    count: number;
    reset(): void;
}

export type UseRetryAsyncRequests = { (): Promise<any> }[];

export type UseRetryAsyncFiles = any[];
