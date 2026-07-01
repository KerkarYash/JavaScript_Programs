import { useState } from 'react';
import {Chatbot} from 'supersimpledev'; //this will load supersimpledev package from node-modules folder and get Chatbot out of it

import './ChatInput.css';

export function ChatInput({chatMessages, setChatMessages}){
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function saveInputText(event){
    setInputText(event.target.value);
  }

  async function sendMessage() {
    if(isLoading){
      return;
    }

    if(inputText === ""){
      alert("Please enter something...")
      return
    }

    setIsLoading(true); //Chatbot busy

    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender:'user',
        id: crypto.randomUUID()
      }
    ]

    setChatMessages(newChatMessages);
    setInputText('');

    const loadingResponse = "loading...";
    setChatMessages([
      ...newChatMessages,
      {
        message: loadingResponse,
        sender:'robot',
        id: crypto.randomUUID()
      }
    ]);

    const response = await Chatbot.getResponseAsync(inputText);
    setIsLoading(false);
      setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender:'robot',
        id: crypto.randomUUID()
      }
    ]);
  }

  const handleKeyDown = (event) => {
    if(event.key === 'Enter'){
      sendMessage();
    }
    if(event.key === 'Escape'){
      setInputText('')
    }
  }

  return(
    <div className = "chat-input-container">
      <input 
        placeholder="Send a message to Chatbot" 
        size="30"
        onChange={saveInputText}
        value={inputText}
        className="chat-input"
        onKeyDown={handleKeyDown}
      />
      <button 
        onClick={sendMessage}
        className="send-button"
      >Send</button>
    </div>
  );
}


