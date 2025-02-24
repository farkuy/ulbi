import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleCreateEdit } from './ArticleCreateEdit';

export default {
    title: 'shared/ArticleCreateEdit',
    component: ArticleCreateEdit,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleCreateEdit>;

const Template: ComponentStory<typeof ArticleCreateEdit> = (args) => <ArticleCreateEdit {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
