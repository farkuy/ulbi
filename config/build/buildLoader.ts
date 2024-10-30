import webpack from "webpack";


export function buildLoader():webpack.RuleSetRule[] {

    const typeScriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return [
        typeScriptLoader,
    ]
}