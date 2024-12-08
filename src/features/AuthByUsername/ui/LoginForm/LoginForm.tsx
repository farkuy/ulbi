import { classNames } from 'shared/lib/classNames/classNames';
import { FC, useState } from 'react';
import { Input } from 'shared/ui/Input/Input';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm:FC<LoginFormProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input autoFocus value={login} onChange={setLogin} />
            <Input value={password} onChange={setPassword} />
            <Button>{t('auth')}</Button>
        </div>
    );
};
