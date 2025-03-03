import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { VirtualList } from './VirtualList';

export default {
    title: 'shared/VirtualList',
    component: VirtualList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof VirtualList>;

const Template: ComponentStory<typeof VirtualList> = (args) => <VirtualList {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
