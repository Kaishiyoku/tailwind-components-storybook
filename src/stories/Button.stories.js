import React from 'react';
import Button from '../components/Button';

export default {
    argTypes: {
        children: {control: 'text'},
        size: {
            control: {options: ['normal', 'small', 'large'], type: 'select'},
        },
    },
    args: {
        children: 'Button',
    },
    component: Button,
    title: 'Example/Button',
};

const Template = (args) => <Button {...args} />;

export const Normal = Template.bind({});
// eslint-disable-next-line fp/no-mutation
Normal.args = {
    //
};

export const IconWithLabel = Template.bind({});
// eslint-disable-next-line fp/no-mutation
IconWithLabel.args = {
    showSampleIcon: true,
};

export const IconOnly = Template.bind({});
// eslint-disable-next-line fp/no-mutation
IconOnly.args = {
    showIconOnly: true,
    showSampleIcon: true,
};