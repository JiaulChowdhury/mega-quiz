import React, { createContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Quiz from "../Quiz/Quiz";
import './QuizDetail.css'

export const TickContext = createContext([]);

function QuizDetail(){

    const [count, setCount] = useState(0);
    const {data} = useLoaderData();


    const handleTicks = (status)=>{
        setCount(status + 1);
    }
    const contextValue = {func: handleTicks, state: [count, setCount]};

    return(
        <TickContext.Provider value={contextValue}>
                <div className="question-container">
                <div className="question-info">
                    <div className="question-header">
                        <img src={data.logo} alt="language logo"></img>
                        <h3>{data.name} Quiz</h3>
                    </div>
                    <div className="question-series">
                        <div className="question-position">
                            {
                                data.questions.map((el, idx)=> <Quiz key={el.id} data={el} idx = {idx} func={handleTicks}></Quiz>)
                            }
                        </div>
                    </div>
                </div>
                <div className="point-count">
                    <h3>Total Points:</h3>
                    <h4>{count}</h4>
                </div>
            </div>
        </TickContext.Provider>
    );
}

export default QuizDetail;