import { createContext, MutableRefObject, ReactNode, useContext } from "react";

const Context = createContext<{
    ref: MutableRefObject<HTMLInputElement | HTMLTextAreaElement | null>;
    error: ReactNode;
}>({
    ref: { current: null },
    error: null,
});

const Provider = Context.Provider;

const useField = () => {
    return useContext(Context);
};

export { Provider as InputDecoratorProvider, useField };
