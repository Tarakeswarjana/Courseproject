import React, { useState } from 'react'

function ChatCard({image,name,lastmsg="",active=false,onClick}) {
    
  return (
    <div className={active?"chatListProfileItem  chatActive" :"chatListProfileItem"} onClick={()=>onClick()} >
    <div className="dpImg dp_img_auto">
        <img src={image} />
    </div>
    <div className="dpNameMsg">
        <p className="dpnname">{name}</p>
        <p className="dpText">{lastmsg}</p>
    </div>
</div>  )
}

export default ChatCard