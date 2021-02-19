import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Button from './Button';

class Card extends React.PureComponent {
    static propTypes = {
        hasPadding: PropTypes.bool,
        heading: PropTypes.string,
        showActionButton: PropTypes.bool,
        showFooter: PropTypes.bool,
        showFooterActionButtons: PropTypes.bool,
        showHeading: PropTypes.bool,
    };

    static defaultProps = {
        hasPadding: true,
        heading: null,
        showActionButton: false,
        showFooter: false,
        showFooterActionButtons: false,
        showHeading: false,
    };

    renderActionButton() {
        const {showActionButton} = this.props;

        if (!showActionButton) {
            return null;
        }

        return (
            <button className="p-2 text-xl rounded-full mt-1 mr-1 text-gray-500 transition-all duration-200 hover:bg-gray-100 focus:text-gray-700 focus:bg-gray-200 focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
        );
    }

    renderHeading() {
        const {heading, showActionButton, showHeading} = this.props;

        if (!showHeading) {
            return null;
        }

        if (showActionButton) {
            return (
                <div className="flex justify-between items-start">
                    <div className="px-6 pt-4 font-bold text-xl pb-2">
                        {heading}
                    </div>

                    {this.renderActionButton()}
                </div>
            );
        }

        return (
            <div className="font-bold text-xl px-6 py-4">
                {heading}
            </div>
        );
    }

    renderFooter() {
        const {showFooter, showFooterActionButtons} = this.props;

        if (!showFooter) {
            return null;
        }

        const footerContent = showFooterActionButtons ? (
            <div className="flex gap-x-2">
                <Button label="Details"/>
                <Button label="Edit"/>
            </div>
        ) : 'Card footer';

        return (
            <div className="border-t border-gray-200 bg-gray-50 px-6 py-4">
                {footerContent}
            </div>
        );
    }

    render() {
        const {children, hasPadding, showActionButton, showHeading} = this.props;

        return (
            <div className="rounded-lg overflow-hidden shadow-lg border border-gray-100 bg-white">
                {this.renderHeading()}

                <div className={clsx({'pt-4': !showHeading && hasPadding, 'px-6 pb-4': showActionButton || hasPadding})}>
                    {children}
                </div>

                {this.renderFooter()}
            </div>
        );
    }
}

export default Card;