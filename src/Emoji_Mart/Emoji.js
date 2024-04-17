import React, { useState } from 'react';
import 'panta82-emoji-mart/css/emoji-mart.css'
import { Picker } from 'panta82-emoji-mart';
import { appStore } from '../Store/appStore';

const Emoji = () => {
    const [showPicker, setShowPicker] = useState(false);

    const handleEmojiSelect =(emoji)=>{
       
        appStore.dispatch({
          type:"selectedEmoji",
          payload:emoji.native
        })

    }
    const fnClick=()=>{
        setShowPicker(showPicker? false: true)
    }
  return (
    <div>
        <img src='https://cdn-icons-png.flaticon.com/512/42/42877.png' alt="Emoji" width={30} onClick={fnClick} />
        { showPicker && <Picker 
         onSelect={handleEmojiSelect}/>}
    </div>
  );
}

export default Emoji;
