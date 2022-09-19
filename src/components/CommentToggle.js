import React, { useState } from "react";
import Comments from "./Comments";

function CommentToggle({ data }) {
    const [toggle, setToggle] = useState("Hide Comments")

     

    function handleToggle() {
        toggle === "Hide Comments" ? setToggle("Show Comments") : setToggle("Hide Comments")
        document.getElementById("commentsContainer").classList.toggle("hidden")
    }

    return (
        <div>
            <button onClick={()=> handleToggle()}>{toggle}</button>
            <Comments data={data.comments}/>
        </div>
    )
}

export default CommentToggle