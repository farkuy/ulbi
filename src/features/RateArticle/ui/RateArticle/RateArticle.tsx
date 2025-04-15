import { FC, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { RateModal } from '@/entities/Rate';
import { getUser } from '@/entities/User';
import { useGetArticleRateQuery, useSetArticleRateMutation } from '../../api/articleRateApi';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { Text } from '@/shared/ui/Text/Text';

interface RateArticleProps {
    className?: string;
    articleId: string;
}

export const RateArticle: FC<RateArticleProps> = (props) => {
    const { className, articleId } = props;
    const userData = useSelector(getUser);

    const { data, isLoading, error } = useGetArticleRateQuery({ articleId, userId: userData?.id ?? '' });
    const [sendRate, { data: dataSend }] = useSetArticleRateMutation();

    const onSubmit = useCallback((rate: number, feedback?: string) => {
        sendRate({
            rate,
            feedback,
            userId: userData?.id ?? '',
            articleId,
        });
    }, [articleId, sendRate, userData?.id]);

    if (isLoading) return <Skeleton width="100%" height={150} />;

    if (error || !data) return <Text title="Не получилось найти рейтинг рейтинга" />;

    return (
        <RateModal onAccept={onSubmit} rating={data[0]?.rate || dataSend?.rate} className={className} />
    );
};
