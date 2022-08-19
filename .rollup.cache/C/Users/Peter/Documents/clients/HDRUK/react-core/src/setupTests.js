import { __spreadArray } from "tslib";
import "@testing-library/jest-dom";
import intersection from "lodash-es/intersection";
expect.extend({
    toContainClass: function (received, list) {
        var classNames = received.classList ? __spreadArray([], received.classList, true) : [];
        var pass = Array.isArray(list)
            ? intersection(classNames, list).length === list.length
            : classNames.includes(list);
        return {
            message: function () { return "expected element to contain all classes"; },
            pass: pass,
        };
    },
});
//# sourceMappingURL=setupTests.js.map