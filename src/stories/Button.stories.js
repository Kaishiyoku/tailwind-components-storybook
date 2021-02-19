import React from 'react';
import Button from '../components/Button/Button';
import {ReactComponent as SparkleSvg} from './assets/sparkles.svg';

export default {
    argTypes: {
        icon: {control: {disable: true}},
    },
    args: {
        label: 'Button',
    },
    component: Button,
    title: 'Button',
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
    icon: SparkleSvg,
};

export const IconOnly = Template.bind({});
// eslint-disable-next-line fp/no-mutation
IconOnly.args = {
    icon: SparkleSvg,
    label: null,
};