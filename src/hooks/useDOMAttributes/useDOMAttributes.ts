import { isEqual } from "lodash";
import { useCallback, useState } from "react";
import { DomAttributes } from "./useDOMAttributes.types";

const useDOMAttributes = (validAttributes: (keyof HTMLElement)[]) => {
  const [attributes, setAttributes] = useState<DomAttributes>({});

  const update = useCallback(
    (element) => {
      let updatedAttributes = { ...attributes };

      validAttributes.forEach((value: keyof HTMLElement) => {
        if (element) {
          if (attributes[value] === undefined) {
            updatedAttributes[value] = element[value] as number;
          } else if (attributes[value] !== element[value]) {
            updatedAttributes[value] = element[value] as number;
          }
        }
      });

      console.log(updatedAttributes, attributes);

      if (!isEqual(updatedAttributes, attributes)) {
        setAttributes(updatedAttributes);
      }
    },
    [validAttributes, attributes]
  );

  return {
    attributes,
    update,
  };
};

export default useDOMAttributes;
