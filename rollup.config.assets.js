import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import url from "@rollup/plugin-url";
import svgr from "@svgr/rollup";
import { terser } from "rollup-plugin-terser";
import commonjs from "@rollup/plugin-commonjs";

export default {
    input: ["./src/icons/index.js"],
    output: [
        {
            dir: "dist/esm",
            format: "esm",
            preserveModules: true,
            preserveModulesRoot: "./src",
        },
        {
            dir: "dist/cjs",
            format: "cjs",
            preserveModules: true,
            preserveModulesRoot: "./src",
        },
    ],
    plugins: [
        peerDepsExternal(),
        babel({
            babelHelpers: "bundled",
        }),
        resolve(),
        commonjs({
            include: ["node_modules/**"],
            sourceMap: false,
        }),
        terser(),
        url(),
        svgr(),
    ],
};
