import React, { Component, ErrorInfo, ReactNode } from 'react';
import { PageError } from 'widgets/ui/PageError';

interface Props {
    children?: ReactNode;
}

interface State {
    hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props, error: State) {
        super(props);
        this.state = { hasError: false };
    }

    public static getDerivedStateFromError(_: Error): State {
        return { hasError: true };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Uncaught error:', error, errorInfo);
    }

    public render() {
        const { state: { hasError }, props: { children } } = this;
        if (hasError) {
            return <PageError />;
        }

        return children;
    }
}

export default ErrorBoundary;
