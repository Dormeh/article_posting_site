import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ArticleCodeBlockComponent.module.scss';
import { ArticleCodeBlock } from '../../model/types/article';

interface ArticleCodeBlockComponentProps {
    className?: string;
    block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = memo((props: ArticleCodeBlockComponentProps) => {
    const {
        className,
        block,
    } = props;
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}>
            <pre>
                <code>
                    {block.code}
                </code>
            </pre>
        </div>
    );
});
