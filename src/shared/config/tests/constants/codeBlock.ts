export const codeBlock = {
    id: '1',
    type: 'CODE',
    // @ts-ignore
    code:
        'interfacе CodeProps {\n' +
        '    className?: string;\n' +
        '    code: string;\n' +
        '}\n' +
        '\n' +
        'export const Code = memo((props: CodeProps) => {\n' +
        '    const {\n' +
        '        className,\n' +
        '        code,\n' +
        '    } = props;\n' +
        '\n' +
        '    const onCopy = useCallback(() => {\n' +
        '        navigator.clipboard.writeText(code);\n' +
        '    }, [code]);\n' +
        '\n' +
        '    return (\n' +
        '        <div className={classNames(cls.Code, {}, [className])}>\n' +
        '            <Button\n' +
        '                onClick={onCopy}\n' +
        '                theme={ButtonTheme.CLEAR}\n' +
        '                className={cls.codeBtn}\n' +
        '            >\n' +
        '                <CopyIcon />\n' +
        '            </Button>\n' +
        '            {/* <code>{code}</code> */}\n' +
        '            <SyntaxHighlighter\n' +
        '                style={shadesOfPurple}\n' +
        '                showLineNumbers\n' +
        '                showInlineLineNumbers\n' +
        '                wrapLines\n' +
        '                wrapLongLines\n' +
        '            >\n' +
        '                {code}\n' +
        '            </SyntaxHighlighter>\n' +
        '        </div>\n' +
        '    );\n' +
        '});\n',
};
