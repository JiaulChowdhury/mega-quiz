
import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare, faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import './Option.css'
import { TickContext } from "../QuizDetail/QuizDetail";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Option({stateData, qus, ca, op}){

    const [tick3, setTick3] = useState(false);
    const [data, setData] = useState({qus, ca, op});
    const {func, state} = useContext(TickContext);

    const answerHandler = (qus)=>{
        console.log(qus);
        console.log(stateData);
        let arr = [];
        if(stateData[0].includes(qus)){
            toast('Can not answer twice.');
        }else{
            setTick3(!tick3);

            if(data.op === data.ca){
                func(state[0]);
                toast('Correct Answer.');
            }else{
                toast('Wrong Answer.');
            }
            
            arr.push(qus);
            stateData[1]([...stateData[0], ...arr]);
            console.log(stateData[0]);
        }
    }

    return(
        <div onClick={()=> answerHandler(data.qus)} className="option-container">
            <FontAwesomeIcon icon={ tick3 ? faSquareCheck : faSquare}></FontAwesomeIcon>
            <span>{op}</span>
            <ToastContainer></ToastContainer>
        </div>
    );
}

export default Option;