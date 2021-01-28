import React from "react";

export default function Message({message}){
    return(
        <div className='d-flex justify-content-center'>
            {message.text} : {message.author}
        </div>
    )
}