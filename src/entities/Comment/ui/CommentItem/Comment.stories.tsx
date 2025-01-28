import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Comment } from './Comment';

export default {
    title: 'shared/Comment',
    component: Comment,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Comment>;

const Template: ComponentStory<typeof Comment> = (args) => <Comment {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
