import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleDetailsCode } from './ArticleDetailsCode';

export default {
    title: 'shared/ArticleDetailsCode',
    component: ArticleDetailsCode,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetailsCode>;

const Template: ComponentStory<typeof ArticleDetailsCode> = (args) => <ArticleDetailsCode {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
