import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

class TableRow extends React.PureComponent {
    static propTypes = {
        columnLabels: PropTypes.arrayOf(PropTypes.string).isRequired,
        hovered: PropTypes.bool,
        size: PropTypes.oneOf(['base', 'sm']),
    };

    static defaultProps = {
        hovered: false,
        size: 'base',
    };

    static baseColumnClasses = [
        'align-middle',
    ];

    getBodyRowClasses() {
        const {hovered} = this.props;

        return clsx({
            'hover:bg-gray-50 transition-colors duration-150 ease-out': hovered,
        });
    }

    getColumnClasses() {
        const {size} = this.props;

        return clsx(TableRow.baseColumnClasses, {
            'py-1 px-3': size === 'sm',
            'py-4 px-3': size === 'base',
        });
    }

    render() {
        const {columnLabels} = this.props;

        return (
            <tr className={this.getBodyRowClasses()}>
                {columnLabels.map((columnLabel) => <td className={this.getColumnClasses()}>{columnLabel}</td>)}
            </tr>
        );
    }
}

export default TableRow;