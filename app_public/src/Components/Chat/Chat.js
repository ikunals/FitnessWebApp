import React from "react";
import { ChatEngine } from 'react-chat-engine';


import LoginForm from "./LoginForm"
import ChatFeed  from "./ChatFeed";

export default function Chat(props) {
  
  if(!localStorage.getItem('username')) return <LoginForm />


  return (
    <>
     <ChatEngine 
        height="100vh"
        projectID="0e15e22b-9679-46a3-8c79-adc5edf098b5"
        userName={localStorage.getItem('username')} 
        userSecret={localStorage.getItem('password')} 
        renderChatFeed={(chatAppProps) => <ChatFeed { ...chatAppProps} />}
      />
    </>
  );
}
