import { classNames } from 'shared/lib/classNames/classNames';
import { FC, useCallback } from 'react';
import { Input } from 'shared/ui/Input/Input';
import { Button } from 'shared/ui/Button/Button';
import { Text, ThemeText } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { DynamicModuleReducer, ReducersList } from 'shared/lib/components/DynamicModuleReducer';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { AppDispatch } from 'app/providers/StoreProvider';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { loginByUserName } from '../../model/services/loginByUserName/loginByUserName';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';
import { getLoginUserName } from '../../model/selectors/getLoginUserName/getLoginUserName';

interface LoginFormProps {
    className?: string;
    onClose: () => void;
}

const initReducer: ReducersList = {
    login: loginReducer,
};

const LoginForm:FC<LoginFormProps> = (props) => {
    const { className, onClose } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const username = useSelector(getLoginUserName);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const onChangeLogin = useCallback((value: string) => {
        dispatch(loginActions.setUserName(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onAuth = useCallback(async () => {
        const result = await dispatch(loginByUserName({ username, password }));
        if (result.meta.requestStatus === 'fulfilled') onClose();
    }, [dispatch, username, password, onClose]);

    return (
        <DynamicModuleReducer reducers={initReducer}>
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
        </DynamicModuleReducer>

    );
};

export default LoginForm;
