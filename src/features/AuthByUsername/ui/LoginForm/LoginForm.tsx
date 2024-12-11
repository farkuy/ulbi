import { classNames } from 'shared/lib/classNames/classNames';
import { FC, useCallback, useEffect } from 'react';
import { Input } from 'shared/ui/Input/Input';
import { Button } from 'shared/ui/Button/Button';
import { Text, ThemeText } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { loginByUserName } from '../../model/services/loginByUserName/loginByUserName';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';
import { getLoginUserName } from '../../model/selectors/getLoginUserName/getLoginUserName';

interface LoginFormProps {
    className?: string;
}

export const LoginForm:FC<LoginFormProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const store = useStore() as ReduxStoreWithManager;
    const username = useSelector(getLoginUserName);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    useEffect(() => {
        store.reduceManager.add('login', loginReducer);

        return () => {
            store.reduceManager.remove('login');
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
