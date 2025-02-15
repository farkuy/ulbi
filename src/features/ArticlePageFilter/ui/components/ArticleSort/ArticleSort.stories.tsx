import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleSort } from './ArticleSort';

export default {
    title: 'shared/ArticleSort',
    component: ArticleSort,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleSort>;

const Template: ComponentStory<typeof ArticleSort> = (args) => <ArticleSort {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
