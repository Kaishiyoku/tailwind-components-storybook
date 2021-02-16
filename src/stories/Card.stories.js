import React from 'react';
import Card from '../components/Card';

export default {
    argTypes: {

    },
    args: {
        heading: 'Card heading',
    },
    component: Card,
    title: 'Card',
};

const Template = (args) => <Card {...args} />;

export const Normal = Template.bind({});
// eslint-disable-next-line fp/no-mutation
Normal.args = {
    showFooter: true,
    showHeading: true,
};

export const WithHeading = Template.bind({});
// eslint-disable-next-line fp/no-mutation
WithHeading.args = {
    showHeading: true,
};

export const WithFooter = Template.bind({});
// eslint-disable-next-line fp/no-mutation
WithFooter.args = {
    showFooter: true,
};

export const WithFooterActionButtons = Template.bind({});
// eslint-disable-next-line fp/no-mutation
WithFooterActionButtons.args = {
    showFooter: true,
    showFooterActionButtons: true,
};

export const WithActionButton = Template.bind({});
// eslint-disable-next-line fp/no-mutation
WithActionButton.args = {
    showActionButton: true,
    showHeading: true,
};