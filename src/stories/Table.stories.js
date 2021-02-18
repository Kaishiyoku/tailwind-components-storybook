import React from 'react';
import Table from '../components/Table';

export default {
    argTypes: {
        //
    },
    args: {
        //
    },
    component: Table,
    title: 'Table',
};

const Template = (args) => <Table {...args} />;

export const Normal = Template.bind({});
// eslint-disable-next-line fp/no-mutation
Normal.args = {
    //
};