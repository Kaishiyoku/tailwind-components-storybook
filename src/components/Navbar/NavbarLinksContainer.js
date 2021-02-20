import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import NavbarLink from './NavbarLink';

class NavbarLinksContainer extends React.PureComponent {
    static propTypes = {
        links: PropTypes.arrayOf(PropTypes.shape({
            isActive: PropTypes.bool.isRequired,
            label: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
        })).isRequired,
    };

    getLinkClasses(isActive) {
        return clsx('block cursor-pointer block transition-all duration-200 px-4 py-5 text-black lg:border-b-4 border-l-4 lg:border-l-0 hover:text-black hover:bg-gray-50', {
            'border-blue-500': isActive,
            'border-transparent': !isActive,
        });
    }

    render() {
        const {links} = this.props;

        return (
            <div className="lg:flex w-full lg:w-auto">
                {links.map(({isActive, label, url}) => <NavbarLink key={`navbar-link-${label}`} isActive={isActive} label={label} url={url}/>)}
            </div>
        );
    }
}

export default NavbarLinksContainer;