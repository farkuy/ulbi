import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import AdminPage from './AdminPage';

export default {
    title: 'shared/AdminPage',
    component: AdminPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AdminPage>;

const Template: ComponentStory<typeof AdminPage> = (args) => <AdminPage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
