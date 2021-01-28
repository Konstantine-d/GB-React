import React,{useState,useCallback} from "react";
import {Button} from 'react-bootstrap';

export default function Input ({onAddMessage}){
    const [value,setValue] = useState('');

    const handleChange = useCallback(
        (e) => {
            setValue(e.target.value)
        },[]);

        const handleSubmit = useCallback(
            (e) => {
                e.preventDefault();
                onAddMessage(value);
                setValue('')
            },[onAddMessage,value]);

    return(
        <form className='d-flex flex-wrap justify-content-center'>
            <input className='' 
                    type = 'text' 
                    onChange={handleChange} 
                    value={value}
                    />
            <>
            <Button 
            className='' 
            variant="secondary" 
            type = 'submit' 
            onClick ={handleSubmit}
            >
                Отправить
                </Button>
            </>
            {/* <input type = 'submit' onClick ={handleSubmit}/> */}
        </form>
    )   
}
