import React, { HTMLAttributeAnchorTarget, memo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Card } from 'shared/ui/Card/Card';
import { Text } from 'shared/ui/Text/Text';
import EyeIcon from 'shared/assets/icons/eye_20-20.svg';
import { Avatar } from 'shared/ui/Avatar/ui/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { RouterPath } from 'shared/config/routerConfig/routerConfig';
import { ContentView } from 'shared/model/types/types';
import { HStack, VStack } from 'shared/ui/Stack';
import cls from './ArticlesListItem.module.scss';
import { Article, ArticleBlockType, ArticleTextBlock } from '../../model/types/article';

interface ArticlesListItemProps {
    className?: string;
    article: Article;
    view: ContentView;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticlesListItem = memo((props: ArticlesListItemProps) => {
    const { className, article, view = ContentView.PLATE, target } = props;
    const { t } = useTranslation();

    const views = (
        <HStack align="center" className={cls.views} max={false} gap={7}>
            <EyeIcon className={cls.icon} />
            <Text text={String(article?.views)} />
        </HStack>
    );

    const navigate = useNavigate();

    if (view === ContentView.LIST) {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as ArticleTextBlock;

        return (
            <div className={classNames(cls.ArticlesListItem, {}, [className, cls[view]])}>
                <Card className={cls.card}>
                    <VStack gap={7} className={cls.header}>
                        <HStack gap={10} align="center">
                            <Avatar src={article.profile.avatar} size={30} />
                            <Text text={article.profile.username} className={cls.username} />
                            <Text
                                text={article.createdAt}
                                className={cls.date}
                                textClassName={cls.dateText}
                            />
                        </HStack>
                        <Text
                            className={cls.title}
                            title={article.title}
                            titleClassName={cls.titleText}
                        />
                        <Text
                            className={cls.type}
                            text={article.type.toString()}
                            textClassName={cls.typeText}
                        />
                    </VStack>
                    <VStack gap={16} className={cls.main}>
                        <div className={cls.imgWrapper}>
                            <img className={cls.imgPreview} src={article.img} alt={article.title} />
                        </div>
                        <Text
                            textClassName={cls.textBlock}
                            text={textBlock.paragraphs.toString()}
                        />
                    </VStack>
                    <HStack justify="between">
                        <Link to={RouterPath.article_details + article.id} target={target}>
                            <Button theme={ButtonTheme.OUTLINE}>{t('Читать далее')}</Button>
                        </Link>
                        {views}
                    </HStack>
                </Card>
            </div>
        );
    }

    return (
        <Link
            to={RouterPath.article_details + article.id}
            target={target}
            className={classNames(cls.ArticlesListItem, {}, [className, cls[view]])}
        >
            <Card className={cls.card}>
                <div className={cls.imageWrapper}>
                    <img src={article.img} alt={article.title} className={cls.imgPreview} />
                    <Text
                        text={article.createdAt}
                        className={cls.date}
                        textClassName={cls.dateText}
                    />
                </div>
                <HStack justify="between">
                    <Text
                        className={cls.type}
                        text={article.type.toString()}
                        textClassName={cls.typeText}
                    />
                    {views}
                </HStack>
                <Text title={article.title} titleClassName={cls.titleText} />
            </Card>
        </Link>
    );
});
