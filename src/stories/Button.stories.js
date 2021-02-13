import React from 'react';
import Button from '../components/Button';

export default {
    argTypes: {
        backgroundColor: {control: 'color'},
    },
    component: Button,
    title: 'Example/Button',
};

const Template = (args) => <Button {...args} />;

export const Normal = Template.bind({}, {
    children: 'Button',
    primary: true,
});

export const Large = Template.bind({}, {
    children: 'Button',
    size: 'large',
});

export const Small = Template.bind({}, {
    children: 'Button',
    size: 'small',
});
