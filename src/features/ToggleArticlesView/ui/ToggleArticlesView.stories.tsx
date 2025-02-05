import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ToggleArticlesView } from './ToggleArticlesView';

export default {
    title: 'shared/ToggleArticlesView',
    component: ToggleArticlesView,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ToggleArticlesView>;

const Template: ComponentStory<typeof ToggleArticlesView> = (args) => <ToggleArticlesView {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
