import React from 'react';
import PropTypes from 'prop-types';

class Checkbox extends React.PureComponent {
    static propTypes = {
        label: PropTypes.string.isRequired,
        value: PropTypes.oneOf([PropTypes.number, PropTypes.string]).isRequired,
    };

    render() {
        const {label, value} = this.props;

        return (
            <label htmlFor="remember" className="flex items-center">
                <input id="remember" name="remember" type="checkbox" value={value} className="h-5 w-5 mr-2"/>
                {label}
            </label>
        );
    }
}

export default Checkbox;