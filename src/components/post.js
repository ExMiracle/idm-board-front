import React from 'react'

const Posts = ({ posts }) => {
  return (
    <div>
      <center><h1>Anonymous Board</h1></center>
      <div className="container">
      {posts.map((post) => (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{post.date_posted}</h6>
            <p className="card-text">{post.content}</p>
            <img  className="img-fluid" src={post.image} />
          </div>
        </div>
      ))}
      </div>
    </div>
  )
};

export default Posts
