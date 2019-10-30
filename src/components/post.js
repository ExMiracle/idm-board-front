import React from 'react'

const Posts = ({ posts }) => {
  return (
    <div>

      <div className="container">
      {posts.map((post) => {
        const post_date = new Date(post.date_posted)
        const date = post_date.getDate() + "/" + post_date.getMonth() + "/" + post_date.getFullYear().toString().slice(-2);
        const time = post_date.getHours() + ":" + post_date.getMinutes() + ":" + post_date.getSeconds()
        const formatted_date = date + " " + time

        if (post.is_thread){
          const url = post.url
        } else {

        }

        return (
          <div className="card bg-light pb-1">
          <table width="20%">
            <tr>
            <td className="text-muted header">{formatted_date}</td>
            <td className="text-muted header"><a href={post.url}>№ {post.id}</a></td>
            </tr>
          </table>

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
