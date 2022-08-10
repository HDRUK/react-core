import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "@emotion/react/jsx-runtime";
/** @jsxImportSource @emotion/react */
import { cx } from "@emotion/css";
import useCommonStyles from "../../hooks/useCommonStyles";
var Box = function (_a) {
    var as = _a.as, children = _a.children, className = _a.className, m = _a.m, mt = _a.mt, mb = _a.mb, ml = _a.ml, mr = _a.mr, p = _a.p, pt = _a.pt, pb = _a.pb, pl = _a.pl, pr = _a.pr, px = _a.px, py = _a.py, mx = _a.mx, my = _a.my, width = _a.width, minWidth = _a.minWidth, maxWidth = _a.maxWidth, height = _a.height, minHeight = _a.minHeight, maxHeight = _a.maxHeight, display = _a.display, alignItems = _a.alignItems, justifyContent = _a.justifyContent, flexGrow = _a.flexGrow, position = _a.position, top = _a.top, left = _a.left, right = _a.right, bottom = _a.bottom, overflow = _a.overflow, gap = _a.gap, backgroundColor = _a.backgroundColor, flexShrink = _a.flexShrink, flexBasis = _a.flexBasis, gridTemplateColumns = _a.gridTemplateColumns, gridTemplateRows = _a.gridTemplateRows, gridTemplateAreas = _a.gridTemplateAreas, gridColumn = _a.gridColumn, direction = _a.direction, textAlign = _a.textAlign, flexDirection = _a.flexDirection, outerProps = __rest(_a, ["as", "children", "className", "m", "mt", "mb", "ml", "mr", "p", "pt", "pb", "pl", "pr", "px", "py", "mx", "my", "width", "minWidth", "maxWidth", "height", "minHeight", "maxHeight", "display", "alignItems", "justifyContent", "flexGrow", "position", "top", "left", "right", "bottom", "overflow", "gap", "backgroundColor", "flexShrink", "flexBasis", "gridTemplateColumns", "gridTemplateRows", "gridTemplateAreas", "gridColumn", "direction", "textAlign", "flexDirection"]);
    var commonStyles = useCommonStyles({
        m: m,
        mt: mt,
        mb: mb,
        ml: ml,
        mr: mr,
        p: p,
        pt: pt,
        pr: pr,
        pb: pb,
        pl: pl,
        px: px,
        py: py,
        mx: mx,
        my: my,
        width: width,
        minWidth: minWidth,
        maxWidth: maxWidth,
        height: height,
        minHeight: minHeight,
        maxHeight: maxHeight,
        display: display,
        alignItems: alignItems,
        justifyContent: justifyContent,
        flexGrow: flexGrow,
        position: position,
        top: top,
        left: left,
        right: right,
        bottom: bottom,
        overflow: overflow,
        gap: gap,
        backgroundColor: backgroundColor,
        flexShrink: flexShrink,
        flexBasis: flexBasis,
        gridTemplateColumns: gridTemplateColumns,
        gridTemplateRows: gridTemplateRows,
        gridTemplateAreas: gridTemplateAreas,
        gridColumn: gridColumn,
        direction: direction,
        textAlign: textAlign,
        flexDirection: flexDirection,
    });
    var Component = (as ||
        "div");
    return (_jsx(Component, __assign({}, outerProps, { className: cx(className, "ui-Box"), css: commonStyles }, { children: children })));
};
export default Box;
//# sourceMappingURL=Box.js.map