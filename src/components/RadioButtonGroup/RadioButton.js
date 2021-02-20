import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

class RadioButton extends React.PureComponent {
    static propTypes = {
        label: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        value: PropTypes.oneOf([PropTypes.number, PropTypes.string]).isRequired,
    };

    render() {
        const {label, name, value} = this.props;
        const id = `${name}-${label}`;

        return (
            <label htmlFor={id} className="flex items-center">
                <input id={id} name={name} type="radio" value={value} className="h-5 w-5 mr-2"/>
                {label}
            </label>
        );
    }
}

export default RadioButton;