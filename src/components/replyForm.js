import React, {Component} from 'react';
import Form from './form'


class ReplyForm extends Component {

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
      <div>
        <span onClick={this.toggle.bind(this)}>| №{this.props.reply_to} |</span>
        {this.state.open ?
          <div className="sticky-top" height="200px" width="200px">
            <Form apiGet={this.props.apiGet} reply_to={this.props.reply_to}/>
          </div>
          : null}
      </div>
    )
  }
};


export default ReplyForm;
