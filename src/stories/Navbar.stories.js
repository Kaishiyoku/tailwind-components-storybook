import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import NavbarLinksContainer from '../components/Navbar/NavbarLinksContainer';

export default {
    argTypes: {
        elements: {control: {disable: true}},
        url: {control: {disable: true}},
    },
    args: {
        elements: [
            <NavbarLinksContainer key="nav-links-1" links={[
                {
                    isActive: true,
                    label: 'Link 1',
                    url: '#',
                },
                {
                    isActive: false,
                    label: 'Link 2',
                    url: '#',
                },
                {
                    isActive: false,
                    label: 'Link 3',
                    url: '#',
                },
            ]}/>,
            <NavbarLinksContainer key="nav-links-2" links={[
                {
                    isActive: false,
                    label: 'Link 4',
                    url: '#',
                },
                {
                    isActive: false,
                    label: 'Link 5',
                    url: '#',
                },
            ]}/>,
        ],
        label: 'Company Name',
        url: '#',
    },
    component: Navbar,
    title: 'Navbar',
};

const Template = (args) => <Navbar {...args} />;

export const Normal = Template.bind({});
// eslint-disable-next-line fp/no-mutation
Normal.args = {
    //
};