import babelRemovePropsPlugin from '../../babel/babelRemovePropsPlugin';

export const buildBabelLoader = ({ isDev, isTsx }: { isDev: boolean; isTsx: boolean }) => ({
    test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-env'],
            plugins: [
                [
                    '@babel/plugin-transform-typescript',
                    {
                        isTsx,
                    },
                ],
                '@babel/plugin-transform-runtime',
                !isDev && isTsx && [babelRemovePropsPlugin, { props: ['data-testid'] }],
                isDev && require.resolve('react-refresh/babel'),
            ].filter(Boolean),
        },
    },
});
