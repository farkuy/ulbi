import { classNames } from 'shared/lib/classNames/classNames';
import { FC, useCallback } from 'react';
import { Input } from 'shared/ui/Input/Input';
import { Button } from 'shared/ui/Button/Button';
import { Text, ThemeText } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { loginByUserName } from '../../model/services/loginByUserName/loginByUserName';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';
import { getLogin } from '../../model/selectors/getLogin/getLogin';

interface LoginFormProps {
    className?: string;
}

export const LoginForm:FC<LoginFormProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const {
        username, password, error, isLoading,
    } = useSelector(getLogin);

    const onChangeLogin = useCallback((value: string) => {
        dispatch(loginActions.setUserName(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onAuth = useCallback(() => {
        dispatch(loginByUserName({ username, password }));
    }, [dispatch, username, password]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('AUTH_FORM')} theme={ThemeText.PRIMARY} />
            {error && <Text text={error} theme={ThemeText.ERROR} />}
            <Input
                value={username}
                onChange={onChangeLogin}
                autoFocus
            />
            <Input
                value={password}
                onChange={onChangePassword}
                type="password"
            />
            <Button onClick={onAuth} disabled={isLoading}>{t('auth')}</Button>
        </div>
    );
};
