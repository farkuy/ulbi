import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { DetailsComments } from './DetailsComments';

export default {
    title: 'shared/DetailsComments',
    component: DetailsComments,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof DetailsComments>;

const Template: ComponentStory<typeof DetailsComments> = (args) => <DetailsComments {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
