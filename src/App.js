import React, {Component} from 'react';
import Posts from './components/post';
import Form from './components/form';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
    this.apiGet = this.apiGet.bind(this);
    console.log('hello')
  }

  apiGet() {
    // let url = 'http://localhost:8000/api/posts/index/'
    // let thread =
    fetch('http://localhost:8000/api/posts/index/')
    .then(res => res.json())
    .then((data) => {
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
        <Form apiGet={this.apiGet} buttonText={'Start a thread'} />
        <Posts posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
