import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import BlockedNavPage from './BlockedNavPage';

export default {
    title: 'shared/BlockedNavPage',
    component: BlockedNavPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof BlockedNavPage>;

const Template: ComponentStory<typeof BlockedNavPage> = (args) => <BlockedNavPage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
