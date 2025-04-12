import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Stars } from './Stars';

export default {
    title: 'shared/Stars',
    component: Stars,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Stars>;

const Template: ComponentStory<typeof Stars> = (args) => <Stars {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
