import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ShowNotify from './ShowNotify';

export default {
    title: 'shared/ShowNotify',
    component: ShowNotify,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ShowNotify>;

const Template: ComponentStory<typeof ShowNotify> = () => <ShowNotify />;

export const Normal = Template.bind({});
Normal.args = {};
