import React, {Component} from 'react';
import Posts from './components/post';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      posts: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

  scrollToBottom = () => {
  this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }

  apiPostSend(data) {
    fetch("http://localhost:8000/api/posts/",
      {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
          },
        body: JSON.stringify(data)
      })
    .then(
    fetch('http://localhost:8000/api/posts/')
    .then(res => res.json())
    .then((data) => {
      this.setState({ posts: data.results })
    })
    .catch(console.log)
    )
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.apiPostSend(this.state)
    console.log(this.state.title);
    console.log(this.state.content);
    this.setState({title: '',
                   content: ''
                  })

    };

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
        <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
          <input type="text" name="content" value={this.state.content} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <div style={{ float:"left", clear: "both" }}
           ref={(el) => { this.messagesEnd = el; }}>
      </div>
      </div>
    );
  }
}

export default App;
