import React from 'react';
import { withFormsy } from 'formsy-react';

class FormsyInput extends React.Component {

  changeValue = (e) => {
    this.props.setValue(e.currentTarget.value);
  }

  render() {
    // An error message is returned only if the component is invalid
    const errorMessage = this.props.getErrorMessage();

    return (
      <div style={{'position': 'relative'}}>
        <input
          className={`${this.props.isPristine() || this.props.isValid() ? 'no-error' : 'error'}`}
          onChange={this.changeValue}
          name={`${this.props.name}`}
          type="text"
          value={this.props.getValue() || ''}
          placeholder={this.props.placeholder}
        />
        <span className="error-message">{errorMessage}</span>
      </div>
    );
  }
}

export default withFormsy(FormsyInput);
