import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import RadioButton from './RadioButton';

class RadioButtonGroup extends React.PureComponent {
    static propTypes = {
        name: PropTypes.string.isRequired,
        values: PropTypes.arrayOf(PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.oneOf([PropTypes.number, PropTypes.string]).isRequired,
        })).isRequired,
    };

    render() {
        const {name, values} = this.props;

        return values.map(({label, value}) => (
            <RadioButton label={label} name={name} value={value}/>
        ));
    }
}

export default RadioButtonGroup;