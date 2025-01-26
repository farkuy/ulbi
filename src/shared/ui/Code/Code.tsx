import { classNames } from 'shared/lib/classNames/classNames';
import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import CopyIcon from 'shared/assets/icons/copy-20-20.svg';
import cls from './Code.module.scss';

interface CodeProps {
    className?: string;
    codeText: string;
}

export const Code = memo((props: CodeProps) => {
    const { className, codeText } = props;

    const copyCode = useCallback(() => {
        navigator.clipboard.writeText(codeText);
    }, [codeText]);

    return (
        <div className={classNames(cls.Code, {}, [className])}>
            <Button theme={ButtonTheme.CLEAR} onClick={copyCode}>
                <Icon Svg={CopyIcon} className={cls.copy} />
            </Button>
            <pre>
                {codeText}
            </pre>
        </div>
    );
});
