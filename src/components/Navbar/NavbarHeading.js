import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

class NavbarHeading extends React.PureComponent {
    static propTypes = {
        label: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
    };

    render() {
        const {label, url} = this.props;

        return (
            <div className="flex justify-between items-center">
                <div className="text-xl mr-2 ml-2 md:ml-0 py-5">
                    <a href={url} className="text-white text-gray-700 transition-all duration-200 hover:text-black" onClick={(event) => event.preventDefault()}>
                        {label}
                    </a>
                </div>

                <button className="lg:hidden py-4 px-6 text-xl transition-all outline-none duration-200 text-gray-500 hover:text-black hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-primary-200 focus:ring-inset" data-navbar-control="">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </button>
            </div>
        );
    }
}

export default NavbarHeading;