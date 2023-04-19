// import React, { useState } from 'react'

function Post(props) {
 
  return (
    <div className="Content" onClick={props.setPostDetails}>
      <h5>Author: {props.author}</h5>
      <h3>Title: {props.title}</h3>
    </div>
  )
}

export default Post