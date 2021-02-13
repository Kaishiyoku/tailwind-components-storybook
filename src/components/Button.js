import React from 'react';

class Button extends React.PureComponent {
    render() {
        const {children} = this.props;

        const buttonClasses = 'mb-4 text-left text-blue-600 py-2 px-4 shadow-md border border-blue-300 rounded-full transition-all duration-200 focus:ring-4 focus:ring-blue-200 hover:bg-blue-500 hover:text-white focus:outline-none';

        return (
            <button className={buttonClasses}>{children}</button>
        );
    }
}

export default Button;