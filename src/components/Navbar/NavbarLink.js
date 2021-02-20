import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

class NavbarLink extends React.PureComponent {
    static propTypes = {
        isActive: PropTypes.bool.isRequired,
        label: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
    };

    render() {
        const {isActive, label, url} = this.props;

        const linkClasses = clsx('block cursor-pointer block transition-all duration-200 px-4 py-5 text-black lg:border-b-4 border-l-4 lg:border-l-0 hover:text-black hover:bg-gray-50', {
            'border-blue-500': isActive,
            'border-transparent': !isActive,
        });

        return (
            <a href={url} className={linkClasses}>
                {label}
            </a>
        );
    }
}

export default NavbarLink;