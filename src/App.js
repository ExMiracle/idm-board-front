import React, {Component} from 'react';
import Posts from './components/post';
import Form from './components/form';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
    this.onSuccess = this.onSuccess.bind(this)
   }

  componentDidMount() {
    fetch('http://localhost:8000/api/posts/index/')
    .then(res => res.json())
    .then((data) => {
      this.setState({ posts: data })
    })
    .catch(console.log)
  }

  onSuccess() {
    fetch('http://localhost:8000/api/posts/index/')
      .then(res => res.json())
      .then((data) => {
        this.setState({ posts: data })
      })
      .catch(console.log);
    console.log('api get');
  }

  render() {
    return (
      <div className="container">
        <Form onSuccess={this.onSuccess} />
        <Posts posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
