import React from 'react';
import Checkbox from '../components/Checkbox/Checkbox';

export default {
    argTypes: {
        value: {type: 'string'},
    },
    args: {
        label: 'Remember me',
        value: 1,
    },
    component: Checkbox,
    title: 'Checkbox',
};

const Template = (args) => <Checkbox {...args} />;

export const Normal = Template.bind({});
// eslint-disable-next-line fp/no-mutation
Normal.args = {
    //
};