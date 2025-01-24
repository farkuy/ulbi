import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleDetailsText } from './ArticleDetailsText';

export default {
    title: 'shared/ArticleDetailsText',
    component: ArticleDetailsText,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetailsText>;

const Template: ComponentStory<typeof ArticleDetailsText> = (args) => <ArticleDetailsText {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
