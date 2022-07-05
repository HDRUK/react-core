import "@testing-library/jest-dom";
import { intersection } from "lodash";

expect.extend({
  toContainClass(received, list) {
    const classNames = [...received.classList];

    const pass = Array.isArray(list)
      ? intersection(classNames, list).length === list.length
      : classNames.includes(list);

    return {
      message: () => `expected element to contain all classes`,
      pass,
    };
  },
});
