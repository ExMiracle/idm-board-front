import React from 'react'
import Posts from './components/post';
import Form from './components/form';


class Thread extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.match.params.number)
    this.state = {
      posts: [],
    };
    this.apiGet = this.apiGet.bind(this);
  }
  apiGet() {
    const url = 'http://localhost:8000/api/posts/'
    const thread = this.props.match.params.number;
    const endpoint = '/query/'

    fetch(url+thread+endpoint)
    .then(res => res.json())
    .then((data) => {
      console.log(data)
     this.setState({ posts: data })
    })
    .catch(console.log)
    console.log('api get');
  }

  componentDidMount() {
    this.apiGet();
  }

  render() {
    return (
      <div className="container">
        <Form apiGet={this.apiGet} reply_to={this.props.match.params.number} buttonText={'Reply to a thread'} />
        <Posts posts={this.state.posts} />
      </div>
    );
  }
}

export default Thread
