import { classNames } from '@/shared/lib';
import './Loader.scss';

interface LoaderProps {
    className?: string;
}

export const Loader = ({ className }: LoaderProps) => (
    <div className={classNames('lds-ellipsis', {}, [className])}>
        <div />
        <div />
        <div />
        <div />
    </div>
);
