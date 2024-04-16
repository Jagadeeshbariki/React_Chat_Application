import { EmojiInit } from "../Utils/EmojiInit";

export const EmojiReducer =(state= EmojiInit, action)=>{
    
    switch(action.type){
        case "selectedEmoji" :
            return {
                Emoji: action.payload
            }

        default :
            return state;
    }
}