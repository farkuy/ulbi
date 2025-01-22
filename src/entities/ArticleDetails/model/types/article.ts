enum ArticleBlockType {
    TEXT = 'TEXT',
    CODE = 'CODE',
    IMAGE = 'IMAGE'
}

interface ArticleBaseBlocks {
    id: string;
    type: ArticleBlockType;
}

interface ArticleTextBlock extends ArticleBaseBlocks {
    type: ArticleBlockType.TEXT;
    title?: string;
    paragraphs: string[];
}

interface ArticleCodeBlock {
    type: ArticleBlockType.CODE;
    code: string;
}

interface ArticleImageBlock {
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
