export interface Rate {
    rate: number,
    feedback?: string,
}

export interface PushRate extends Rate{
    userId: string,
    articleId: string,
}
