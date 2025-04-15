import { RouteProps } from 'react-router-dom';

export type CustomRouteProps = RouteProps & {
    forAuthPage?: boolean;
    forAdmin?: boolean
}
