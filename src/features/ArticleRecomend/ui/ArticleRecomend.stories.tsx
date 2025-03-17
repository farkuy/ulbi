import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleRecomend } from './ArticleRecomend';

export default {
    title: 'shared/ArticleRecomend',
    component: ArticleRecomend,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleRecomend>;

const Template: ComponentStory<typeof ArticleRecomend> = (args) => <ArticleRecomend {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
