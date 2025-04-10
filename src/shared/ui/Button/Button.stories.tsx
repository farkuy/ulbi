import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Button, ButtonSize, ButtonTheme } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',

    theme: ButtonTheme.CLEAR,
};

export const Outline = Template.bind({});
Outline.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
};

export const BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND,
};

export const BackgroundThemeInverted = Template.bind({});
BackgroundThemeInverted.args = {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND_INVERTED,
};

export const SquareM = Template.bind({});
SquareM.args = {
    theme: ButtonTheme.BACKGROUND_INVERTED,
    children: '>',
    size: ButtonSize.M,
    square: true,
};

export const SquareL = Template.bind({});
SquareL.args = {
    theme: ButtonTheme.BACKGROUND_INVERTED,
    children: '>',
    size: ButtonSize.L,
    square: true,
};

export const SquareXl = Template.bind({});
SquareXl.args = {
    theme: ButtonTheme.BACKGROUND_INVERTED,
    children: '>',
    size: ButtonSize.XL,
    square: true,
};

export const SizeM = Template.bind({});
SizeM.args = {
    theme: ButtonTheme.BACKGROUND_INVERTED,
    children: '>',
    size: ButtonSize.M,
};

export const SizeL = Template.bind({});
SizeL.args = {
    theme: ButtonTheme.BACKGROUND_INVERTED,
    children: '>',
    size: ButtonSize.L,
};

export const SizeXl = Template.bind({});
SizeXl.args = {
    theme: ButtonTheme.BACKGROUND_INVERTED,
    children: '>',
    size: ButtonSize.XL,
};

OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
