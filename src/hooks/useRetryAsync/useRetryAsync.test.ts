import { waitFor } from "@testing-library/react";
import {
    renderHook,
    act,
    RenderHookResult,
} from "@testing-library/react-hooks";
import useRetryAsync from "./useRetryAsync";
import { UseRetryAsyncResult } from "./useRetryAsync.types";

let wrapper: RenderHookResult<unknown, UseRetryAsyncResult>;

const props = {
    maxRetries: 2,
    pauseDuration: 100,
    onIterationComplete: jest.fn(),
    onComplete: jest.fn(),
};

describe("Given the useRetryAsync hook", () => {
    describe("When it is run", () => {
        beforeEach(() => {
            wrapper = renderHook(() => useRetryAsync(props));
        });

        it("Then has the correct output", () => {
            expect(wrapper.result.current).toEqual({
                count: -1,
                init: expect.any(Function),
                initOnce: expect.any(Function),
                reset: expect.any(Function),
            });
        });

        describe("And it is initialised", () => {
            beforeEach(async () => {
                await act(async () => {
                    wrapper.result.current.init(
                        [
                            () => Promise.resolve("1234"),
                            () => Promise.resolve("5678"),
                        ],
                        ["file1", "file2"]
                    );
                });
            });

            it("Then has the correct count", async () => {
                await waitFor(() =>
                    expect(wrapper.result.current.count).toEqual(0)
                );
            });

            describe("And it is iterated", () => {
                it("Then has the correct count", async () => {
                    await waitFor(() =>
                        expect(wrapper.result.current.count).toEqual(1)
                    );
                });

                it("Then calls iteration complete", () => {
                    expect(props.onIterationComplete).toHaveBeenCalledWith(
                        ["file1", "file2"],
                        [
                            { status: "fulfilled", value: "1234" },
                            { status: "fulfilled", value: "5678" },
                        ]
                    );
                });

                describe("And it is complete", () => {
                    it("The has the correct count", async () => {
                        await waitFor(() =>
                            expect(wrapper.result.current.count).toEqual(-1)
                        );
                    });

                    it("Then calls complete", async () => {
                        await waitFor(() =>
                            expect(props.onComplete).toHaveBeenCalledWith([
                                "file1",
                                "file2",
                            ])
                        );
                    });
                });
            });
        });
    });
});
