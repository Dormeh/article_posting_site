import webpack, { RuleSetRule, DefinePlugin } from 'webpack';
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { BuildPaths } from '../build/types/config';

export default ({ config }: {config: webpack.Configuration}) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
        favicon: '',
        locales: '',
        buildLocales: '',
    };
    // установить приоритет поиска модуля, ставим путь до компонентов в начало
    config?.resolve?.modules?.unshift(paths.src);
    config?.resolve?.extensions?.push('.ts', '.tsx');

    // Правим конфиг storybook/webpack под нашу сборку и при нахождении в правиле svg исключаем его
    // а ниже добавляем для него свой лоадер
    // eslint-disable-next-line no-param-reassign
    // @ts-ignore
    config?.module?.rules = config?.module?.rules?.map((rule: RuleSetRule) => {
        if (/svg/.test(rule?.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
    });

    config?.module?.rules?.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });
    config?.module?.rules?.push(buildCssLoader(true));

    config?.plugins?.push(
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(true),
            __API__: JSON.stringify('http://localhost:8000'),
            __PROJECT__: JSON.stringify('storybook'),
        }),
    );

    return config;
};
