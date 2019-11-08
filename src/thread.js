import React, {Component} from 'react'
import Posts from './components/post';
import ButtonForm from './components/buttonForm';


class Thread extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
    this.apiGet = this.apiGet.bind(this);
  }

  apiGet() {
    const url = 'http://localhost:8000/api/posts/'
    const thread = this.props.match.params.number;
    const endpoint = '/query/'

    fetch(url + thread + endpoint)
      .then(res => res.json())
      .then((data) => {
        console.log(data)
        this.setState({posts: data})
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
        <ButtonForm apiGet={this.apiGet} reply_to={this.props.match.params.number} buttonText={'Reply to a thread'}/>
        <Posts posts={this.state.posts} apiGet={this.apiGet}/>
      </div>
    );
  }
}

export default Thread
