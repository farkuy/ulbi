import webpack from 'webpack';
import { buildCssLoader } from './loaders/buildCssLoader';
import { BuildOptions } from './types/config';
import { babelBuildLoader } from './loaders/babelLoader';

interface BuildBabelLoaderProps extends BuildOptions {
    isTsx?: boolean;
}

export function buildLoaders(options: BuildBabelLoaderProps): webpack.RuleSetRule[] {
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const babelLoader = babelBuildLoader({ ...options, isTsx: false });
    const babelTsLoader = babelBuildLoader({ ...options, isTsx: true });

    const cssLoader = buildCssLoader(options.isDev);

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    return [
        fileLoader,
        svgLoader,
        babelLoader,
        babelTsLoader,
        cssLoader,
    ];
}
