import { Profile } from 'entities/Profile';
import { IOption } from 'shared/ui/Select/model/types/types';
import { TabOption, TabsConfig } from 'shared/ui/Tabs/model/types/tabsType';
import { SortSelectProps } from 'shared/ui/SortSelect/ui/SortSelect';

export enum ArticleSortField {
    VIEWS = 'views',
    TITLE = 'title',
    CREATED = 'createdAt',
}

export interface ArticleSortOption extends IOption {
    value: ArticleSortField;
}

export type ArticleSortSelectName = 'sort'

export interface ArticleSortSelectProps extends SortSelectProps {
    sortOptions: ArticleSortOption[];
    name: ArticleSortSelectName;
}

export interface ArticleBlockBase {
    id: string;
}

export enum ArticleBlockType {
    CODE = 'CODE',
    IMAGE = 'IMAGE',
    TEXT = 'TEXT',
}

export interface ArticleCodeBlock extends ArticleBlockBase {
    type: ArticleBlockType.CODE;
    code: string
}

export interface ArticleImageBlock extends ArticleBlockBase {
    type: ArticleBlockType.IMAGE;
    src: string
    title: string
}

export interface ArticleTextBlock extends ArticleBlockBase {
    type: ArticleBlockType.TEXT;
    paragraphs: string[]
    title?: string
}

export type ArticleBlock = ArticleCodeBlock | ArticleImageBlock | ArticleTextBlock

export enum ArticleType {
    ALL = 'ALL',
    IT = 'IT',
    SCIENCE = 'SCIENCE',
    ECONOMICS = 'ECONOMICS'
}

export interface ArticleTabOption extends TabOption {
    value: ArticleType;
}

export type ArticleTabsName = 'type'

export interface ArticleTabsConfig extends TabsConfig{
    name: ArticleTabsName;
    defaultCheckedValue: ArticleType.ALL;
    tabOptions: ArticleTabOption[]
}

export interface Article {
    id: string,
    profile: Profile;
    title: string,
    subtitle: string,
    img: string,
    views: number,
    createdAt: string,
    type: ArticleType[],
    blocks: ArticleBlock[]
}
