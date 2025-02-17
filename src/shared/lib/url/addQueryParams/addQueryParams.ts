export function getQueryParams(params: Partial<Record<string, string>>) {
    const searchParams = new URLSearchParams(window.location.search);

    Object.entries(params).forEach(([key, val]) => {
        if (val !== undefined) searchParams.set(key, val);
    });

    return `?${searchParams.toString()}`;
}

export function addQueryParams(params: Partial<Record<string, string>>) {
    window.history.pushState(null, '', getQueryParams(params));
}
