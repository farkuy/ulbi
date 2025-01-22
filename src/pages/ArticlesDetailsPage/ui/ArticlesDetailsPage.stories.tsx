import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ArticlesDetailsPage from './ArticlesDetailsPage';

export default {
    title: 'shared/ArticlesDetailsPage',
    component: ArticlesDetailsPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlesDetailsPage>;

const Template: ComponentStory<typeof ArticlesDetailsPage> = (args) => <ArticlesDetailsPage />;

export const Normal = Template.bind({});
Normal.args = {};
