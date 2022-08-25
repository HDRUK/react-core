import { useEffect, useState } from "react";
import {
    UseRetryAsyncFiles,
    UseRetryAsyncProps,
    UseRetryAsyncRequests,
    UseRetryAsyncResult,
} from "./useRetryAsync.types";

const useRetryAsync = ({
    maxRetries = 10,
    pauseDuration = 10000,
    onIterationComplete,
    onComplete,
}: UseRetryAsyncProps): UseRetryAsyncResult => {
    const [count, setCount] = useState(-1);
    const [requests, setRequests] = useState<UseRetryAsyncRequests>([]);
    const [files, setFiles] = useState<UseRetryAsyncFiles>([]);

    const init = (
        listRequests: UseRetryAsyncRequests,
        listFiles: UseRetryAsyncFiles
    ) => {
        setRequests(listRequests);
        setFiles(listFiles);
        setCount(0);
    };

    const initOnce = (
        listRequests: UseRetryAsyncRequests,
        listFiles: UseRetryAsyncFiles
    ) => {
        setRequests(listRequests);
        setFiles(listFiles);
        setCount(maxRetries - 1);
    };

    const reset = () => {
        setCount(-1);

        if (onComplete) onComplete(files);
    };

    const poll = () => {
        const fileRequests = requests.map(request => request());
        const nextCount = count + 1;

        Promise.allSettled(fileRequests).then(values => {
            if (onIterationComplete) onIterationComplete(files, values);

            if (nextCount >= maxRetries) {
                reset();
            } else {
                setTimeout(() => {
                    setCount(nextCount);
                }, pauseDuration);
            }
        });
    };

    useEffect(() => {
        if (requests.length > 0 && count > -1 && count < maxRetries) {
            poll();
        }
    }, [requests, count]);

    return {
        init,
        initOnce,
        count,
        reset,
    };
};

export default useRetryAsync;
