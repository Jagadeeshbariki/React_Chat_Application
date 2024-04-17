import React, { useState}from 'react';
import './Chat.css';
import Emoji from '../Emoji_Mart/Emoji';
import {useDispatch, useSelector } from 'react-redux';


const userList = ["Alan", "Bob", "Carol", "Dean", "Elin"];

const Chat=()=> {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
   const selectedEmoji = useSelector(state=>state.EmojiReducer) //Need to maintain the selected emojis
   const dispatch = useDispatch();
  
  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      const randomUser = userList[Math.floor(Math.random() * userList.length)];
      const newMessage = {
        id: Math.random().toString(36).substr(2, 9),
        user: randomUser,
        text: message + selectedEmoji.join(''),
        likes: 0
        
      };
      setMessages([...messages, newMessage]);
      setMessage('');
      dispatch({
        type:"clear_selectedEmoji"
      })

    }
  };

  const handleLike = (id) => {
    const updatedMessages = messages.map(msg => {
      if (msg.id === id) {
        return { ...msg, likes: msg.likes + 1 };
      }
      return msg;
    });
    setMessages(updatedMessages);
  };


  return (
    <div className="Chat">
      <div className="chat-container">
        <div className="messages">
          {/* Showing the messages in chat box */}
          {messages.map((msg) => (
            <div key={msg.id} className="message">
                <div className='profile'>{msg.user.charAt(0)}</div>
              <div className='message_like '>
                <span className="username"><b>{msg.user}</b> </span>: {msg.text}
                
              </div>
              
              {/* showing like botton */}
              <img src='https://i.pinimg.com/474x/16/88/98/168898bb21b5caef9a2e74b7c11e6e69.jpg'  className="like-btn" onClick={() => handleLike(msg.id)} alt='Like' width={20}/> ({msg.likes})
              
            </div>
          ))}
        </div>
        <div className="input-container">
       
          <input
            type="text"
            value={message + selectedEmoji.join('')}
            onChange={handleInputChange}
            placeholder="Type your message..."
            
          />
          
          <p className="emoji"><Emoji/></p>
          <button onClick={handleSendMessage}>Send</button>
          
        </div>
      </div>
    </div>
  );
}

export default Chat;
