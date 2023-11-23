import React from "react";

function EmojiContainer({list}) {
  return (
    <div>
      {list.map((e , idx)=>{
         return (
            <p className="emoji">{e.emoji} - {e.description}</p>
            
         )
      })}
    </div>
  );
}

export default EmojiContainer;
