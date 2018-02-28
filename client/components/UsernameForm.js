import React from 'react';

export default class UsernameForm extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      username: '',
    };
  }

  render() {
    return (
      <div>
        <input type="text" onChange={evt => this.setState({ username: evt.target.value })} />
        <button onClick={() => this.props.onSubmit(this.state.username)}>Go!</button>
      </div>
    );
  }
}
