import { memo, useCallback } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {
    lioshi,
    vs2015,
    githubGist,
    rainbow,
    railscasts,
    xcode,
    github,
    shadesOfPurple,
    qtcreatorLight,
    docco,
} from 'react-syntax-highlighter/dist/cjs/styles/hljs';

import { classNames } from '../../lib/classNames/classNames';
import { Button, ButtonTheme } from '../Button/Button';
import cls from './Code.module.scss';
import CopyIcon from '../../assets/icons/copy_20-20.svg';

interface CodeProps {
    className?: string;
    code: string;
}

export const Code = memo((props: CodeProps) => {
    const { className, code } = props;

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(code);
    }, [code]);

    return (
        <div className={classNames(cls.Code, {}, [className])}>
            <Button onClick={onCopy} theme={ButtonTheme.CLEAR} className={cls.codeBtn}>
                <CopyIcon />
            </Button>
            {/* <code>{code}</code> */}
            <SyntaxHighlighter
                style={shadesOfPurple}
                showLineNumbers
                showInlineLineNumbers
                wrapLines
                wrapLongLines
            >
                {code}
            </SyntaxHighlighter>
        </div>
    );
});
