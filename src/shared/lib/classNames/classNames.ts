type Mods = Record<string, boolean | string>

export const classNames = (cls: string, mods: Mods, additional: string[]): string => [
    cls,
    ...additional,
    Object.entries(mods)
        .filter(([key, value]) => Boolean(value))
        .map(([key, value]) => key),
]
    .join(' ');
