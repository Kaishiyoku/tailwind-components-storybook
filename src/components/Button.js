import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

class Button extends React.PureComponent {
    static propTypes = {
        showIconOnly: PropTypes.bool,
        showSampleIcon: PropTypes.bool,
        size: PropTypes.oneOf(['normal', 'small', 'large']),
    };

    static defaultProps = {
        showIconOnly: false,
        showSampleIcon: false,
        size: 'normal',
    };

    renderChildren() {
        const {children, size, showIconOnly, showSampleIcon} = this.props;

        const sampleIcon = showSampleIcon ? <svg className={clsx({'w-4 h-4': size === 'small', 'w-6 h-6': size !== 'small'})} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg> : null;
        const label = !showIconOnly ? <span className={clsx({'pl-1': sampleIcon})}>{children}</span> : null;

        return (
            <>
                {sampleIcon}
                {label}
            </>
        );
    }

    render() {
        const {size, showIconOnly, showSampleIcon} = this.props;

        const baseButtonClasses = [
            'mb-4',
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

        const buttonClasses = clsx(baseButtonClasses, {
            'flex items-center': !showIconOnly,
            'px-1': showIconOnly && showSampleIcon && size === 'small',
            'px-2': showSampleIcon && (size !== 'small' || !showIconOnly),
            'px-4': !showSampleIcon,
            'py-1 text-sm': size === 'small',
            'py-2': size === 'normal',
            'py-2 text-lg': size === 'large',
        });

        return (
            <button className={buttonClasses}>
                {this.renderChildren()}
            </button>
        );
    }
}

export default Button;