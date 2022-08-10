import "@testing-library/jest-dom";
import intersection from "lodash-es/intersection";

expect.extend({
  toContainClass(received, list) {
    const classNames = received.classList ? [...received.classList] : [];

    const pass = Array.isArray(list)
      ? intersection(classNames, list).length === list.length
      : classNames.includes(list);

    return {
      message: () => `expected element to contain all classes`,
      pass,
    };
  },
});
