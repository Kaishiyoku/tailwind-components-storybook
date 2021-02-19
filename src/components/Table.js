import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

class Table extends React.PureComponent {
    static propTypes = {
        bordered: PropTypes.bool,
        hovered: PropTypes.bool,
        showFooter: PropTypes.bool,
        size: PropTypes.oneOf(['base', 'sm']),
    };

    static defaultProps = {
        bordered: false,
        hovered: false,
        showFooter: false,
        size: 'base',
    };

    renderTableFooter() {
        const {showFooter, size} = this.props;

        if (!showFooter) {
            return null;
        }

        const footerColumnClasses = clsx([
            'bg-gray-50',
            'font-bold',
            'text-gray-500',
            'border-t-2',
            'border-gray-100',
            'tracking-wide',
            'align-middle',
        ], {
            'p-3': size === 'base',
            'py-2 px-3': size === 'sm',
        });

        return (
            <tfoot>
                <tr>
                    <td className={footerColumnClasses}>Test</td>
                    <td className={footerColumnClasses}>Test</td>
                </tr>
            </tfoot>
        );
    }

    render() {
        const {bordered, hovered, size} = this.props;

        const tableClasses = clsx([
            'w-full',
            'text-left',
        ], {
            'border border-gray-200': bordered,
        });

        const headingColumnClasses = clsx([
            'bg-gray-100',
            'font-bold',
            'text-xs',
            'text-gray-800',
            'uppercase',
            'border-b-2',
            'border-gray-200',
            'tracking-wide',
            'align-middle',
        ], {
            'p-3': size === 'base',
            'py-2 px-3': size === 'sm',
        });

        const bodyRowClasses = clsx({
            'hover:bg-gray-50 transition-colors duration-150 ease-out': hovered,
        });

        const bodyColumnClasses = clsx([
            'align-middle',
        ], {
            'py-1 px-3': size === 'sm',
            'py-4 px-3': size === 'base',
        });

        return (
            <table className={tableClasses}>
                <thead>
                    <tr>
                        <th className={headingColumnClasses}>Name</th>
                        <th className={headingColumnClasses}>Age</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-solid divide-gray-200">
                    <tr className={bodyRowClasses}>
                        <td className={bodyColumnClasses}>Cohen O'Moore</td>
                        <td className={bodyColumnClasses}>37</td>
                    </tr>
                    <tr className={bodyRowClasses}>
                        <td className={bodyColumnClasses}>Franklyn Berg</td>
                        <td className={bodyColumnClasses}>24</td>
                    </tr>
                    <tr className={bodyRowClasses}>
                        <td className={bodyColumnClasses}>Iona Curry</td>
                        <td className={bodyColumnClasses}>21</td>
                    </tr>
                </tbody>
                {this.renderTableFooter()}
            </table>
        );
    }
}

export default Table;