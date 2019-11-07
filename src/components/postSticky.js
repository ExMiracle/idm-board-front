import React, {Component} from 'react';

class FormSticky extends Component {

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
    console.log(props.post.id)
  }

  toggle() {
    this.setState({
      open: !this.state.open
    });
  }

  apiPostSend(data) {
    let to_create = this.props.reply_to;
    if (to_create) {
      this.url = "http://localhost:8000/api/posts/"+to_create+"/new_reply/";
    } else {
      this.url = "http://localhost:8000/api/posts/new_thread/";
    }
    fetch(this.url,
      {
        method: "POST",
        body: data
      })
       .then(response => {
         console.log(response)
         console.log(typeof this.props.apiGet)
         if (!response.ok) {
           throw new Error(response.status);
         } else {
           this.props.apiGet();
         }})
      console.log('Post sent');
//      this.props.apiGet();
    };


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
    // this.props.apiGet();
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
      $filePreview = (<img max-height="200px" max-width="200px" src={filePreviewUrl} />);
  }

  return (
    <span onClick={this.toggle.bind(this)}>| №{this.props.post} |
      {[this.props.post].map( post => {
        return (
          <div className="float-reply container w-55 p-3">
            <div id="demo" className={"collapse" + (this.state.open ? ' in' : '')}>
              <div>
                <div className="container">
                    <form className="form-group m-10" onSubmit={this.handleSubmit}>
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
        )
      })}
    </span>
  )};
}

export default FormSticky;
