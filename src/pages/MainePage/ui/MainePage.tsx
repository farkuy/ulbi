import React from 'react';
import {useTranslation} from "react-i18next";

const MainePage = () => {
    const {t} = useTranslation();
    return (
        <div>
            {t("MAINE")}
        </div>
    );
};

export default MainePage;