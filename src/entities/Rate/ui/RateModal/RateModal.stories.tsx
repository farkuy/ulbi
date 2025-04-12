import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RateModal } from './RateModal';

export default {
    title: 'shared/RateModal',
    component: RateModal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof RateModal>;

const Template: ComponentStory<typeof RateModal> = (args) => <RateModal {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
