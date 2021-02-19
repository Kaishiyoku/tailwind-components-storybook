import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

class TableFoot extends React.PureComponent {
    static propTypes = {
        columnLabels: PropTypes.arrayOf(PropTypes.string).isRequired,
        size: PropTypes.oneOf(['base', 'sm']),
    };

    static defaultProps = {
        size: 'base',
    };

    static baseColumnClasses = [
        'bg-gray-50',
        'font-bold',
        'text-gray-500',
        'border-t-2',
        'border-gray-100',
        'tracking-wide',
        'align-middle',
    ];

    getColumnClasses() {
        const {size} = this.props;

        return clsx(TableFoot.baseColumnClasses, {
            'p-3': size === 'base',
            'py-2 px-3': size === 'sm',
        });
    }

    render() {
        const {columnLabels} = this.props;

        return (
            <tfoot>
                <tr>
                    {columnLabels.map((columnLabel) => <td className={this.getColumnClasses()}>{columnLabel}</td>)}
                </tr>
            </tfoot>
        );
    }
}

export default TableFoot;