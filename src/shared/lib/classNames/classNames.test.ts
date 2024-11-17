import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    test('test', () => {
        expect(classNames('className', {}, [])).toBe('className');
    });
});
