import { BuildOptions } from '../types/config';

interface BuildBabelLoaderProps extends BuildOptions {
    isTsx?: boolean;
}

export function babelBuildLoader({ isDev, isTsx }:BuildBabelLoaderProps) {
    return {
        test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    [
                        'i18next-extract',
                        {
                            locales: ['ru', 'en'],
                            keyAsDefaultValue: true,
                        },
                    ],
                    ['@babel/plugin-transform-typescript', { isTsx }],
                    ['@babel/plugin-transform-runtime'],
                ],
            },
        },
    };
}
