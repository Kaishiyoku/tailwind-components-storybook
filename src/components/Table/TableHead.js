import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

class TableHead extends React.PureComponent {
    static propTypes = {
        columnLabels: PropTypes.arrayOf(PropTypes.string).isRequired,
        size: PropTypes.oneOf(['base', 'sm']),
    };

    static defaultProps = {
        size: 'base',
    };

    static baseColumnClasses = [
        'bg-gray-100',
        'font-bold',
        'text-xs',
        'text-gray-800',
        'uppercase',
        'border-b-2',
        'border-gray-200',
        'tracking-wide',
        'align-middle',
    ];

    getColumnClasses() {
        const {size} = this.props;

        return clsx(TableHead.baseColumnClasses, {
            'p-3': size === 'base',
            'py-2 px-3': size === 'sm',
        });
    }

    render() {
        const {columnLabels} = this.props;

        return (
            <thead>
                <tr>
                    {columnLabels.map((columnLabel) => <th className={this.getColumnClasses()}>{columnLabel}</th>)}
                </tr>
            </thead>
        );
    }
}

export default TableHead;