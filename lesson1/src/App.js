import React, {useState,useEffect, useCallback } from "react";
// import logo from './logo.svg';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Message from './chats/Message';
import Input from './chats/Input';
import {Button} from 'react-bootstrap'
import './App.css';

export default function App(){
    const [messages, setMessages] = useState([
        {
            text:null, author:"me"
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
            <div className ='container'>
                <div className=''>
                    {messages.map(renderMessage)}
                    <Input onAddMessage = {handleAddMessage}/>
                </div>
            </div>
            )
        }
