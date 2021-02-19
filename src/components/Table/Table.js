import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import TableHead from './TableHead';
import TableFoot from './TableFoot';
import TableRow from './TableRow';

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
        
        return <TableFoot columnLabels={['Total: 3', 'Avg.: 27']} size={size}/>;
    }

    render() {
        const {bordered, hovered, size} = this.props;

        return (
            <table className={clsx(['w-full', 'text-left'], {'border border-gray-200': bordered})}>
                <TableHead size={size} columnLabels={['Name', 'Age']}/>
                <tbody className="divide-y divide-solid divide-gray-200">
                    <TableRow size={size} columnLabels={['Cohen O\'Moore', '37']}/>
                    <TableRow size={size} columnLabels={['Franklyn Berg', '24']}/>
                    <TableRow size={size} columnLabels={['Iona Curry', '21']}/>
                </tbody>
                {this.renderTableFooter()}
            </table>
        );
    }
}

export default Table;