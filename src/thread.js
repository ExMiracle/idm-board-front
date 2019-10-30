import React from 'react'
import Posts from './components/post';

class Thread extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      file: null,
      filePreviewUrl: '',
      posts: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    }

  componentDidMount() {
    fetch('http://localhost:8000/api//')
    .then(res => res.json())
    .then((data) => {
      this.setState({ posts: data.results })
    })
    .catch(console.log)
  }

  apiPostSend(data) {
    fetch("http://localhost:8000/api/posts/",
      {
        method: "POST",
        body: data
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
    console.log(this.state);
    let form_data = new FormData();
    if (this.state.file) {
      form_data.append('image', this.state.file);
    }
    form_data.append('content', this.state.content);
    this.apiPostSend(form_data)
    this.setState({content: '',
                   file: null,
                   filePreviewUrl: '',
                  })
    };

  handleImageChange(event) {
    let reader = new FileReader();
    let file = event.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        filePreviewUrl: reader.result
      });
    }
    reader.readAsDataURL(file)
  }



  render() {
    let {filePreviewUrl} = this.state;
    let $filePreview = null;
    if (filePreviewUrl) {
      $filePreview = (<img src={filePreviewUrl} />);
    }

    return (
      <div className="container">
        <Posts posts={this.state.posts} />
        <div className="container">
          <form className="form-group margin10" onSubmit={this.handleSubmit}>
            <textarea type="text" name="content" className="form-control bottom-margin" value={this.state.content}
             onChange={this.handleChange} rows="4" />
            <div className="custom-file bottom-margin">
              <input type="file" className="custom-file-input" id="customFile" onChange={this.handleImageChange} />
              <label className="custom-file-label" for="customFile">Choose file</label>
            </div>
            <input className="btn" type="submit" value="Submit" />
          </form>
        </div>
      {$filePreview}
      </div>
    );
  }
}

export default Thread
