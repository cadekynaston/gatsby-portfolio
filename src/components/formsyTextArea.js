import React from 'react';
import { withFormsy } from 'formsy-react';

class FormsyInput extends React.Component {

  changeValue = (e) => {
    this.props.setValue(e.currentTarget.value);
  }

  render() {

    return (
      <div>
        <textarea
          className={`${this.props.isPristine() || this.props.isValid() ? 'no-error' : 'error'}`}
          name={`${this.props.name}`}
          onChange={this.changeValue}
          type="text"
          value={this.props.getValue() || ''}
          placeholder={this.props.placeholder}
          rows={4}
        />
      </div>
    );
  }
}

export default withFormsy(FormsyInput);
