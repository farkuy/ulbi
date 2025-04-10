import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Text, ThemeText } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Title',
    text: 'Text Text TextvTextTextTextTextTextTextText',
};

export const Secondary = Template.bind({});
Secondary.args = {
    title: 'Title',
    text: 'Text Text TextvTextTextTextTextTextTextText',
};
Secondary.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitle = Template.bind({});
onlyTitle.args = {
    title: 'Title',
};

export const onlyText = Template.bind({});
onlyText.args = {
    text: 'Text Text TextvTextTextTextTextTextTextText',
};

export const ErrorText = Template.bind({});
ErrorText.args = {
    title: 'Title',
    text: 'Text Text TextvTextTextTextTextTextTextText',
    theme: ThemeText.ERROR,
};
