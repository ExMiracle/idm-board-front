import React from 'react'
import {BrowserRouter, Link} from 'react-router-dom'
import FormSticky from './postSticky'

const Posts = ({ posts }) => {
  return (
    <div>
      <div className="container">
      {posts.map((post) => {
        const post_date = new Date(post.date_posted)
        const date = post_date.getDate() + "/" + post_date.getMonth() + "/" + post_date.getFullYear().toString().slice(-2);
        const time = post_date.getHours() + ":" + post_date.getMinutes() + ":" + post_date.getSeconds()
        const formatted_date = date + " " + time

        return (
          <div className="card bg-light mb-1">
          <div className="d-inline-flex">
          <span className="text-muted">{formatted_date} |</span>
          <FormSticky post={post.id} />
          <span className="text-muted text-decoration-none">
            <Link className="text-muted text-decoration-none" to={`/thread/${post.id}`}>| Reply</Link>
          </span>
          </div>
            <div className="card-body">
              <img  className="img imagemarg" src={post.image} />
              <article className="margin10 d-inline align-top">{post.content}</article>
            </div>
          </div>
        )
      })}
      </div>
    </div>
  )
};

export default Posts;
