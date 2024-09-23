import { PluginItem } from '@babel/core';

function babelRemovePropsPlugin(): PluginItem {
    return {
        visitor: {
            Program(path, state) {
                const forbiddenProps = state.opts.props || [];
                path.traverse({
                    JSXIdentifier(current) {
                        if (forbiddenProps.includes(current.node.name)) {
                            current.parentPath.remove();
                        }
                    },
                });
            },
        },
    };
}

export default babelRemovePropsPlugin;
