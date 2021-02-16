import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

class Button extends React.PureComponent {
    static propTypes = {
        size: PropTypes.oneOf(['normal', 'small', 'large']),
    };

    static defaultProps = {
        size: 'normal',
    };

    render() {
        const {children, size} = this.props;

        const baseButtonClasses = [
            'mb-4',
            'text-left',
            'text-blue-600',
            'px-4',
            'shadow-md',
            'border',
            'border-blue-300',
            'bg-white',
            'rounded-full',
            'transition-all',
            'duration-200',
            'focus:ring-4',
            'focus:ring-blue-200',
            'hover:bg-blue-500',
            'hover:text-white',
            'focus:outline-none',
        ];

        const buttonClasses = clsx(baseButtonClasses, {
            'py-1 text-sm': size === 'small',
            'py-2': size === 'normal',
            'py-2 text-lg': size === 'large',
        });

        return (
            <button className={buttonClasses}>{children}{this.props.label}</button>
        );
    }
}

export default Button;