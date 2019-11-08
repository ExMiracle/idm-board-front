import React, {Component} from 'react';
import Form from './form'


class ButtonForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  toggle() {
    this.setState({
      open: !this.state.open
    });
    console.log(this.props)
  }

  render() {
    return (
      <div class="container w-55 p-1">
        <button className="btn d-block m-auto" onClick={this.toggle.bind(this)}>{this.props.buttonText}</button>
        {this.state.open ?
          <Form apiGet={this.props.apiGet} reply_to={this.props.reply_to}/>
          : null}
      </div>
    )
  };
}

export default ButtonForm;
