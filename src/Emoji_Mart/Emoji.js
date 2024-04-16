import React from 'react';
import 'panta82-emoji-mart/css/emoji-mart.css'
import { Picker } from 'panta82-emoji-mart';
import { appStore } from '../Store/appStore';

const Emoji = () => {
    const [showPicker, setShowPicker] = React.useState(false)
    const [selectedEmoji, setSelectedEmoji] = React.useState(null);
    

    const handleEmojiSelect =(emoji)=>{
        setSelectedEmoji(emoji.native);


        appStore.dispatch({
          type:"selectedEmoji",
          payload:selectedEmoji
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
