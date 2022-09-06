import { ChatEngine } from 'react-chat-engine';
import "../App.css";
// import "../styles/Chat.css";
import React from 'react';


const Chat = () => {
    return(
        <ChatEngine
			height='100vh'
			userName='ctremayne'
			userSecret='123123'
			projectID='101a1e22-f0ce-4a23-bbf8-fdd74fdb0ee3'
		/>
    )
}
export default Chat;
