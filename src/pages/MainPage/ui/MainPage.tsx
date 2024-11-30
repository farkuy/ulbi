import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button } from 'shared/ui/Button/Button';

const MainPage = () => {
    const { t } = useTranslation();
    const [toggle, setToggle] = useState(false);

    return (
        <div>
            {t('Главная страница')}
            <Button onClick={() => setToggle((prevState) => !prevState)}>клик</Button>
            <Modal isOpen={toggle} closeModal={() => setToggle(false)}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi corporis dolore facilis quis saepe?
            </Modal>
        </div>
    );
};

export default MainPage;
