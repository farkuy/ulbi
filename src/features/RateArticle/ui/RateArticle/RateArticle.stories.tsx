import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RateArticle } from './RateArticle';

export default {
    title: 'shared/RateArticle',
    component: RateArticle,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof RateArticle>;

const Template: ComponentStory<typeof RateArticle> = (args) => <RateArticle {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
