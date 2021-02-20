import React from 'react';
import PropTypes from 'prop-types';
import NavbarHeading from './NavbarHeading';
import NavbarLinksContainer from './NavbarLinksContainer';

class Navbar extends React.PureComponent {
    static propTypes = {
        elements: PropTypes.arrayOf(PropTypes.element),
        label: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
    };

    render() {
        const {elements, label, url} = this.props;

        return (
            <div className="bg-white shadow">
                <div className="container lg:px-20 mx-auto">
                    <div className="lg:flex lg:items-center">
                        <NavbarHeading label={label} url={url}/>

                        <div className="flex flex-grow flex-col items-center lg:flex-row lg:justify-between transition-all duration-500 overflow-hidden">
                            {elements}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;