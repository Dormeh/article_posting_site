import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import { VStack } from 'shared/ui/Stack';
import { ArticleImageBlock } from '../../model/types/article';
import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
    className?: string;
    block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo((props: ArticleImageBlockComponentProps) => {
    const { className, block } = props;

    return (
        <VStack align="center" className={classNames('', {}, [className])}>
            <img src={block.src} alt={block.title} className={cls.image} />
            {block?.title && <Text text={block.title} align={TextAlign.CENTER} />}
        </VStack>
    );
});
