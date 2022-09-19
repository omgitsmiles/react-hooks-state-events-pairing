import React, { useState } from "react";

function Likes({ data }) {
    const [likes, setLikes] = useState(9210)
    const [dislikes, setDislikes] = useState(185)
    
    function increment() {
        setLikes(likes + 1)
    }

    function decrement() {
        setDislikes(dislikes - 1)
    }

    return (
        <div>
           <button onClick={() => increment()}>{likes} 👍</button><button onClick={() => decrement()}>{dislikes}  👎</button>
        </div>
    )
}

export default Likes