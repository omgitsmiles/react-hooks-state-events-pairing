import React from "react";

function Header({ data }) {
    return (
        <div>
            <h1>{data.title}</h1>
            <small>{data.views} views | {data.createdAt}</small>
        </div>
    )
}

export default Header;