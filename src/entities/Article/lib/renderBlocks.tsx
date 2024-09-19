import { ArticleBlockType } from '../model/consts/consts';
import type { ArticleBlock } from '../model/types/article';
import { ArticleImageBlockComponent } from '../ui/ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleCodeBlockComponent } from '../ui/ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleTextBlockComponent } from '../ui/ArticleTextBlockComponent/ArticleTextBlockComponent';

export const renderBlocks = (block: ArticleBlock, className: string): JSX.Element | null => {
    switch (block.type) {
        case ArticleBlockType.CODE:
            return <ArticleCodeBlockComponent block={block} key={block.id} className={className} />;
        case ArticleBlockType.IMAGE:
            return (
                <ArticleImageBlockComponent block={block} key={block.id} className={className} />
            );
        case ArticleBlockType.TEXT:
            return <ArticleTextBlockComponent block={block} key={block.id} className={className} />;
        default:
            return null;
    }
};
