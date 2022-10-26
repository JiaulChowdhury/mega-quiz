
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Option from "../Option/Option";
import './Quiz.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Quiz({data, idx}){

    
    const {options, question,id, correctAnswer} = data;
    const [ans, setAns] = useState([]);

    const showCorrectAns = ()=>{
        toast(`Correct Answer: ${correctAnswer}`);
    }


    return(
        <div>
            <div className="quiz-set">
                <div className="quiz-head">
                    <h4>Q{idx + 1}: <span>{question}</span></h4>
                    <Link onClick={showCorrectAns} key={idx}><FontAwesomeIcon icon={faEye}></FontAwesomeIcon></Link>
                </div>
                <div className="options">
                    {
                        options.map((el)=> <Link><Option key={id} stateData={[ans, setAns]} quiz={question} op={el} ca={correctAnswer}></Option></Link>)
                    }    
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
}

export default Quiz;