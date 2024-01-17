import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleView } from 'entities/Article';
import { Card } from 'shared/ui/Card/Card';
import { Text, TextSize } from 'shared/ui/Text/Text';
import EyeIcon from 'shared/assets/icons/eye_20-20.svg';
import { Avatar } from 'shared/ui/Avatar/ui/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useNavigate } from 'react-router-dom';
import { RouterPath } from 'shared/config/routerConfig/routerConfig';
import cls from './ArticleListItem.module.scss';
import { Article, ArticleBlockType, ArticleTextBlock } from '../../model/types/article';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const {
        className,
        article,
        view = ArticleView.PLATE,
    } = props;
    const { t } = useTranslation();

    const views = (
        <div className={cls.views}>
            <EyeIcon className={cls.icon} />
            <Text text={String(article?.views)} />
        </div>
    );

    const navigate = useNavigate();

    const onClickNavigate = useCallback(() => {
        navigate(RouterPath.article_details + article.id);
    }, [article.id, navigate]);

    if (view === ArticleView.LIST) {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as ArticleTextBlock;

        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <div className={cls.userInfo}>
                            <Avatar src={article.profile.avatar} size={30} />
                            <Text text={article.profile.username} className={cls.username} />
                            <Text text={article.createdAt} className={cls.date} textClassName={cls.dateText} />
                        </div>
                        <Text className={cls.title} title={article.title} titleClassName={cls.titleText} />
                        <Text className={cls.type} text={article.type.toString()} textClassName={cls.typeText} />
                    </div>
                    <div className={cls.main}>
                        <div className={cls.imgWrapper}>
                            <img className={cls.imgPreview} src={article.img} alt={article.title} />
                        </div>
                        <Text textClassName={cls.textBlock} text={textBlock.paragraphs.toString()} />
                    </div>
                    <div className={cls.footer}>
                        <Button
                            onClick={onClickNavigate}
                            theme={ButtonTheme.OUTLINE}
                        >
                            {t('Читать далее')}
                        </Button>
                        {views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
            <Card className={cls.card} onClick={onClickNavigate}>
                <div className={cls.imageWrapper}>
                    <img src={article.img} alt={article.title} className={cls.imgPreview} />
                    <Text text={article.createdAt} className={cls.date} textClassName={cls.dateText} />
                </div>
                <div className={cls.infoWrapper}>
                    <Text className={cls.type} text={article.type.toString()} textClassName={cls.typeText} />
                    {views}
                </div>
                <Text title={article.title} titleClassName={cls.titleText} />
            </Card>
        </div>
    );
});
