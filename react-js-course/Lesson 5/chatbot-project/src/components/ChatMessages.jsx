import {useRef, useEffect } from 'react';
import {ChatMessage} from './ChatMessage';
import './ChatMessages'

function ChatMessages({chatMessages}) {
  const chatMessagesRef = useRef(null); //useRef automatically saves an HTML element from the component

  useEffect(() => {
    const containerElem = chatMessagesRef.current; //react saves the html chat-messages-container here inside the ref.

    if(containerElem){
      containerElem.scrollTop = containerElem.scrollHeight;
    }

    console.log(chatMessagesRef.current);
  }, [chatMessages]);

  return (
    <div className="chat-messages-container" ref={chatMessagesRef}>
      {chatMessages.map((chatMessage) => {
            return (
              <ChatMessage 
              message={chatMessage.message}
              sender={chatMessage.sender}
              key={chatMessage.id}
              />
            );
        })}
    </div>
  )
}

export default ChatMessages; //this is called a default export, its useful when we want to export one thing from a file. 
