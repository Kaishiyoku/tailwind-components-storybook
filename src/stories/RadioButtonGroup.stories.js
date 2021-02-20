import React from 'react';
import RadioButtonGroup from '../components/RadioButtonGroup/RadioButtonGroup';

export default {
    argTypes: {
        //
    },
    args: {
        name: 'role',
        values: [{label: 'Basic', value: 1}, {label: 'Premium', value: 2}],
    },
    component: RadioButtonGroup,
    title: 'RadioButtonGroup',
};

const Template = (args) => <RadioButtonGroup {...args} />;

export const Normal = Template.bind({});
// eslint-disable-next-line fp/no-mutation
Normal.args = {
    //
};