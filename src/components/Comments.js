import React from "react";

function Comments({ data }) {
    const mapComments = data.map(comments => {
        return <div key={comments.id}>
               <h3>{comments.user}</h3>
               <p>{comments.comment}</p>
               </div>
    })
    
    return (
        <div id="commentsContainer">
            <h2>{data.length} Comments</h2>
            {mapComments}
        </div>
     )
}

export default Comments