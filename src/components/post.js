import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import ReplyForm from './replyForm'

class Posts extends Component {
//  <div className="card bg-light mb-1">
//const Posts = ({ posts, apiGet }) => {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <div className="container">
          {this.props.posts.map((post) => {
            const post_date = new Date(post.date_posted);
            const date = post_date.getDate() + "/" + post_date.getMonth() + "/" + post_date.getFullYear().toString().slice(-2);
            const time = post_date.getHours() + ":" + post_date.getMinutes() + ":" + post_date.getSeconds()
            const formatted_date = date + " " + time;

            return (
              <div>
                {post.is_thread && <hr className="mt-0 mb-2"/>}
                <div className={post.is_thread ? 'card mb-1 border-0' : 'card bg-light mb-1'}>
                  <div className="d-inline-flex">
                    <span className="text-muted">{formatted_date} |</span>
                    <ReplyForm reply_to={post.id} apiGet={this.props.apiGet} />
                    <span className="text-muted text-decoration-none">
                    <Link className="text-muted text-decoration-none" to={`/thread/${post.id}`}>| Reply</Link>
                  </span>
                  </div>
                  <div className="card-body">
                    <img className="img imagemarg" src={post.image}/>
                    <article className="margin10 d-inline align-top">{post.content}</article>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Posts;
