import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import SvgIcon from './SvgIcon';

class Button extends React.PureComponent {
    static propTypes = {
        icon: PropTypes.element,
        label: PropTypes.string,
        size: PropTypes.oneOf(['base', 'sm', 'lg']),
    };

    static defaultProps = {
        icon: null,
        label: null,
        size: 'base',
    };

    static baseButtonClasses = [
        'text-left',
        'text-blue-600',
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

    render() {
        const {icon, label, size} = this.props;

        const iconButtonClasses = clsx({
            'flex gap-1 items-center': icon,
        });

        const iconClasses = clsx({
            'w-4 h-4': size === 'sm',
            'w-6 h-6': size === 'base',
            'w-7 h-7': size === 'lg',
        });

        const buttonClasses = clsx(Button.baseButtonClasses, iconButtonClasses, {
            'px-1': !label && size === 'sm',
            'px-2': (label && size === 'sm') || (!label && ['base', 'lg'].includes(size)),
            'px-4': label && ['base', 'lg'].includes(size),
            'py-1 text-sm': size === 'sm',
            'py-2': size === 'base',
            'py-2 text-lg': size === 'lg',
        });

        return (
            <button className={buttonClasses}>
                <SvgIcon className={iconClasses} element={icon}/>
                {label}
            </button>
        );
    }
}

export default Button;