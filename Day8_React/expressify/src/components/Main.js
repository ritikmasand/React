import React, { useEffect, useState } from "react";
import emojiList from "../emojiList";
import EmojiContainer from "./EmojiContainer";
function Main() {
  // console.log(emojiList);
  const [list, setlist] = useState(emojiList);
  const [keyword, setkeyword] = useState("");
  const typed = (e) => {
    const value = e.target.value.toLowerCase();
    setkeyword(value);
    console.log(keyword);
  };
  useEffect(() => {
    const filteredList = emojiList.filter((singleEmoji) => {
      if (singleEmoji.emoji === keyword) {
        return true;
      }
      if (singleEmoji.description.startsWith(keyword)) {
        return true;
      }
      if (singleEmoji.category.startsWith(keyword)) {
        return true;
      }
      if (
        singleEmoji.aliases.some((e) => {
          e.startsWith(keyword);
        })
      ) {
        return true;
      }
      return false;
    });
    setlist(filteredList);
  }, [keyword]);

  return (
    <main>
      <div className="search">
        <input type="text" placeholder="Filter 🔍" onKeyUp={typed} />
         {keyword =="" ? false : <h3>Result for - {keyword}</h3> }
         {/* {console.log(list)} */}
      </div>
      <hr />
      {list.length===0 ? <h3>No results Found for - {keyword} 😔</h3>  : false}
      <EmojiContainer list={list}/>
    </main>
  );
}

export default Main;
