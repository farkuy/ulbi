export enum ArticleView {
    BIG = 'big',
    SMALL = 'small',
}
export enum ArticleBlockType {
    TEXT = 'TEXT',
    CODE = 'CODE',
    IMAGE = 'IMAGE'
}

interface ArticleBaseBlocks {
    id: string;
    type: ArticleBlockType;
}

export interface ArticleTextBlock extends ArticleBaseBlocks {
    type: ArticleBlockType.TEXT;
    title?: string;
    paragraphs: string[];
}

export interface ArticleCodeBlock extends ArticleBaseBlocks {
    type: ArticleBlockType.CODE;
    code: string;
}

export interface ArticleImageBlock extends ArticleBaseBlocks {
    type: ArticleBlockType.IMAGE;
    src: string;
    title?: string;
}

export type ArticleBlocks = ArticleImageBlock | ArticleCodeBlock | ArticleTextBlock

export enum ArticleType {
    IT = 'IT',
    SCIENCE = 'SCIENCE',
    ECONOMICS = 'ECONOMICS',
}

export interface Article {
    id: string;
    title: string;
    subtitle: string;
    img: string;
    views: number;
    createdAt: string;
    type: ArticleType[];
    blocks: ArticleBlocks[];
}

export interface ArticleSchema {
    isLoading: boolean;
    error?: string;
    data?: Article;
}
