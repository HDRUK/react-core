declare const useDOMAttributes: (validAttributes: (keyof HTMLElement)[]) => {
    attributes: Partial<Record<keyof HTMLElement, number>>;
    update: (element: any) => void;
};
export default useDOMAttributes;
