import jsx from "acorn-jsx";
import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import svgr from "@svgr/rollup";

import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";

const packageJson = require("./package.json");

export default {
    input: ["./src/index.ts"],
    output: [
        {
            file: packageJson.main,
            format: "cjs",
            sourcemap: true,
        },
        {
            file: packageJson.module,
            format: "esm",
            sourcemap: true,
        },
    ],
    acornInjectPlugins: [jsx()],
    plugins: [
        peerDepsExternal(),
        babel({
            babelHelpers: "bundled",
            presets: [["@babel/preset-env"], "@babel/preset-react"],
            plugins: ["inline-react-svg"],
        }),
        resolve(),
        commonjs({
            include: ["node_modules/**"],
            sourceMap: false,
        }),
        typescript({
            tsconfig: "./tsconfig.json",
            declaration: true,
            declarationDir: "dist",
        }),
        svgr({ exportType: "named" }),
        terser(),
    ],
};
