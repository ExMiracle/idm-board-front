import React, {Component} from 'react';

class Form extends Component {

  constructor(props) {
    super(props);
    this.state = {
      content: '',
      file: null,
      filePreviewUrl: '',
      open: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
  }

  toggle() {
    this.setState({
      open: !this.state.open
    });
  }

  apiPostSend(data) {
    fetch("http://localhost:8000/api/posts/new_thread/",
      {
        method: "POST",
        body: data
      })
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
      form_data.append('image_name', this.state.file.name);
    }
    form_data.append('content', this.state.content);
    this.apiPostSend(form_data)
    this.setState({content: '',
                   file: null,
                   filePreviewUrl: '',
                  })
    console.log('Post sent');
    this.props.onSuccess();
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
    <div className="container w-50 p-3">
      <button className="btn d-block m-auto" onClick={this.toggle.bind(this)}>Start a thread</button>
      <div id="demo" className={"collapse" + (this.state.open ? ' in' : '')}>
        <div>
          <div className="container">
              <form className="form-group margin10" onSubmit={this.handleSubmit}>
                <textarea type="text" name="content" className="form-control bottom-margin" value={this.state.content} onChange={this.handleChange} rows="4" />
                <div className="custom-file bottom-margin">
                  <input type="file" className="custom-file-input" id="customFile" onChange={this.handleImageChange} />
                  <label className="custom-file-label" htmlFor="customFile">Choose file</label>
                </div>
                <input className="btn" type="submit" value="Submit" />
              </form>
            </div>
          {$filePreview}
        </div>
      </div>
    </div>
  )};

}
export default Form;