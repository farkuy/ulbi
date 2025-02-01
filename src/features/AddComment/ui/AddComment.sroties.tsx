import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AddComment } from './AddComment';

export default {
    title: 'shared/AddComment',
    component: AddComment,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AddComment>;

const Template: ComponentStory<typeof AddComment> = (args) => <AddComment {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
