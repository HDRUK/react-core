import { __assign } from "tslib";
import isEqual from "lodash-es/isEqual";
import { useCallback, useState } from "react";
var useDOMAttributes = function (validAttributes) {
    var _a = useState({}), attributes = _a[0], setAttributes = _a[1];
    var update = useCallback(function (element) {
        var updatedAttributes = __assign({}, attributes);
        validAttributes.forEach(function (value) {
            if (element) {
                if (attributes[value] === undefined) {
                    updatedAttributes[value] = element[value];
                }
                else if (attributes[value] !== element[value]) {
                    updatedAttributes[value] = element[value];
                }
            }
        });
        if (!isEqual(updatedAttributes, attributes)) {
            setAttributes(updatedAttributes);
        }
    }, [validAttributes, attributes]);
    return {
        attributes: attributes,
        update: update,
    };
};
export default useDOMAttributes;
//# sourceMappingURL=useDOMAttributes.js.map