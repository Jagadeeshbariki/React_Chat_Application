import {configureStore} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { EmojiReducer } from '../Reducers/EmojiReducer';


export const appStore = configureStore({
    reducer:{
        EmojiReducer
    },
    middleware:()=>{
        return [logger]
    }
})