import React, {Component} from 'react';
import Posts from './components/post';
import Forms from './components/postForm';

class App extends Component {


  state = {
          posts: []
        }


  componentDidMount() {
    fetch('http://localhost:8000/api/posts/')
    .then(res => res.json())
    .then((data) => {
      this.setState({ posts: data.results })
    })
    .catch(console.log)
  }

  render () {
    return (
      <div className="container">
        <Posts posts={this.state.posts} />

        <Forms />
      </div>
    );
  }
}

export default App;

// import React from 'react'
// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Home</h1>
//       </div>
//     )
//   }
// }export default App
