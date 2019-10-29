import React from 'react'

const Posts = ({ posts }) => {
  return (
    <div>
      <center><h1>Anonymous Board</h1></center>
      <div className="container">
      {posts.map((post) => {

        const post_date = new Date(post.date_posted)
        const date = post_date.getDate() + "/" + post_date.getMonth() + "/" + post_date.getFullYear().toString().slice(-2);
        const time = post_date.getHours() + ":" + post_date.getMinutes() + ":" + post_date.getSeconds()
        const formatted_date = date + " " + time

        return (
          <div className="card bg-light">
          <span className="text-muted header">{formatted_date}</span>
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

export default Posts
