import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Container } from './Container';

export default {
    title: 'shared/Container',
    component: Container,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => <Container {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
