import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleList, ArticleView } from 'entities/Article';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { VStack } from 'shared/ui/Stack';

interface ArticleRecomendProps {
    className?: string;
}

export const ArticleRecomend: FC<ArticleRecomendProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <VStack>
            <Text size={TextSize.L} title={t('RECOMMEND')} />
            <ArticleList
                view={ArticleView.SMALL}
                articles={[]} // TODO RTK
                isLoading={false} // TODO RTK
                /* eslint-disable-next-line i18next/no-literal-string */
                target="_blank"
            />
        </VStack>
    );
};
