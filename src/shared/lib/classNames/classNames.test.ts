import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    test('only cls', () => {
        expect(classNames('className', {}, [])).toBe('className ');
    });

    test('cls and additional', () => {
        expect(classNames('className', {}, ['width: 100px', 'height: 500px']))
            .toBe('className width: 100px height: 500px ');
    });

    test('cls, additional and trues mods', () => {
        expect(classNames('className', { red: true }, ['width: 100px']))
            .toBe('className width: 100px red');
    });

    test('cls, additional and false mods', () => {
        expect(classNames('className', { red: false, customCls: true }, ['width: 100px']))
            .toBe('className width: 100px customCls');
    });
});
