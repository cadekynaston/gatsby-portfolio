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
      <div>
        <input
          onChange={this.changeValue}
          type="text"
          value={this.props.getValue() || ''}
        />
        <span>{errorMessage}</span>
      </div>
    );
  }
}

export default withFormsy(FormsyInput);
