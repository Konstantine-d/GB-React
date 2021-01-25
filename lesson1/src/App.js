import React, {useState,useEffect, useCallback } from "react";
// import logo from './logo.svg';
import Message from './Message';
import Input from './Input';
import './App.css';
// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             counter: 0,
//             message:String,
//         };
//     }
//     handelIncrease = () => {
//         this.setState((prevState) => ({
//             counter: prevState.counter + 1,
//         }))
//     };
//     mesRend = ()=>{
//         this.setState((prevState)=>({
//             message : [],
//         }))
//     };
//     render() {
//         return ( < div className = "Wrapper" >
//             <Counter count = { this.state.counter} onIncrease = { this.handelIncrease }/>
//             <Chat />
//              </div >
//         )
//     };
// }

export default function App(){
    const [messages, setMessages] = useState([
        {
            text:"message1", author:"me"
        },
        {
            text:"message2", author:"me"
        },
    ]);

    const renderMessage = useCallback((messages,i)=>{
        return <Message message={messages} key ={i}  />
    } ,[]);
        
        const handleAddMessage = useCallback((text,author = "me")=>{
            setMessages((oldMessages)=>([...oldMessages,{text,author}]));
        },[]);

        useEffect(()=>{
            let timeout;
            if(messages[messages.length - 1].author !== 'robot'){
                timeout = setTimeout(()=>{
                    handleAddMessage('Ждите ответа оператора','robot')
                },1000);
            }
            return ()=>{
                clearTimeout(timeout);

            }

        },[messages,handleAddMessage]);

        return(
            <>
            {messages.map(renderMessage)}
            <Input onAddMessage = {handleAddMessage}/>
            </>
        )
}

// export default App;