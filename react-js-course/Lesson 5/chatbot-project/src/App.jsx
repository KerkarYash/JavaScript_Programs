import { useState } from 'react'; //this is called named export (here we have used curly braces)
import { ChatInput } from './components/ChatInput';
import { ChatMessage } from './components/ChatMessage';
import ChatMessages from './components/ChatMessages'; //this is called default export. 
import './App.css'

    
function App(){

  const [chatMessages, setChatMessages] = useState(
    [{
    message: 'hello Chatbot',
    sender: 'user',
    id: 'id1'
  }, {
    message: 'Hello! How can i help you',
    sender: 'robot',
    id:'id2'
  }, {
    message: 'Can you get me today\'s date?',
    sender: 'user',
    id: 'id3'
  }, {
    message: 'Today is June 27',
    sender: 'robot',
    id: 'id4'
  }]);
  

  return (
      <div className="app-container">
      <ChatMessages
      chatMessages = {chatMessages}
      />
      <ChatInput 
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
      </div>
  );
}

export default App
