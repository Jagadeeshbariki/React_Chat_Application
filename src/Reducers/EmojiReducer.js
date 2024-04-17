import { EmojiInit } from "../Utils/EmojiInit";

export const EmojiReducer =(state= EmojiInit, action)=>{
    
    switch(action.type){
        case "selectedEmoji" :
            const selectedEmoji = action.payload;

            return  [...state, selectedEmoji]

        case "clear_selectedEmoji":
            return [ ]

        default :
            return state;
    }
}