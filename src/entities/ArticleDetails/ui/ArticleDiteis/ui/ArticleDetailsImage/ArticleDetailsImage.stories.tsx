import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleDetailsImage } from './ArticleDetailsImage';

export default {
    title: 'shared/ArticleDetailsImage',
    component: ArticleDetailsImage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetailsImage>;

const Template: ComponentStory<typeof ArticleDetailsImage> = (args) => <ArticleDetailsImage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
