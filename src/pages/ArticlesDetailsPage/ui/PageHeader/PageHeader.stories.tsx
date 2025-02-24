import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { PageHeader } from './PageHeader';

export default {
    title: 'shared/PageHeader',
    component: PageHeader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof PageHeader>;

const Template: ComponentStory<typeof PageHeader> = (args) => <PageHeader {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
