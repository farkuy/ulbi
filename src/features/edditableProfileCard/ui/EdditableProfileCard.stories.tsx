import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { EdditableProfileCard } from './EdditableProfileCard';

export default {
    title: 'shared/EdditableProfileCard',
    component: EdditableProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof EdditableProfileCard>;

const Template: ComponentStory<typeof EdditableProfileCard> = (args) => <EdditableProfileCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
