import {BuildOptions} from "./types/config";
import webpack from "webpack";
import {buildPlugins} from "./buildPlugins";
import {buildLoader} from "./buildLoader";
import {buildResolvers} from "./buildResolvers";


export function buildWebpackConfig(options: BuildOptions): webpack.Configuration  {
    const {paths, mode} = options
    return {
        mode: mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoader(),
        },
        resolve: buildResolvers(),
    }
}