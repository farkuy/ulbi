import React from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox } from 'shared/ui/Popups/ui/ListBox/ListBox';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <PageWrapper>
            <ListBox
                onChange={(val: string) => {}}
                defaultValue="Выбери значение"
                value={undefined}
                items={[
                    { value: '1', content: '1' },
                    { value: '2', content: '2' },
                    { value: '3', content: '3', disabled: true },
                    { value: '4', content: '4' },
                ]}
            />
        </PageWrapper>
    );
};

export default MainPage;
