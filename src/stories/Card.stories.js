import React from 'react';
import Card from '../components/Card';
import {loremizeIpsumSentences} from 'loremize';
import Table from '../components/Table';

export default {
    argTypes: {

    },
    args: {
        heading: 'Card heading',
    },
    component: Card,
    title: 'Card',
};

const loremIpsum = loremizeIpsumSentences(10, 7, 20, false);

const Template = (args) => <Card {...args} />;

export const Normal = Template.bind({});
// eslint-disable-next-line fp/no-mutation
Normal.args = {
    children: loremIpsum,
    showFooter: true,
    showHeading: true,
};

export const WithHeading = Template.bind({});
// eslint-disable-next-line fp/no-mutation
WithHeading.args = {
    children: loremIpsum,
    showHeading: true,
};

export const WithFooter = Template.bind({});
// eslint-disable-next-line fp/no-mutation
WithFooter.args = {
    children: loremIpsum,
    showFooter: true,
};

export const WithFooterActionButtons = Template.bind({});
// eslint-disable-next-line fp/no-mutation
WithFooterActionButtons.args = {
    children: loremIpsum,
    showFooter: true,
    showFooterActionButtons: true,
};

export const WithActionButton = Template.bind({});
// eslint-disable-next-line fp/no-mutation
WithActionButton.args = {
    children: loremIpsum,
    showActionButton: true,
    showHeading: true,
};

export const WithTable = Template.bind({});
// eslint-disable-next-line fp/no-mutation
WithTable.args = {
    children: <Table/>,
    hasPadding: false,
    showFooter: true,
    showHeading: true,
};