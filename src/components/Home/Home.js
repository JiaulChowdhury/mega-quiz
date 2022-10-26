import React, { createContext } from "react";
import { useLoaderData } from "react-router-dom";
import Topics from "../Topics/Topics";
import homeImg from '../../media/quiz pic.png'
import './Home.css'

export const TopicContext = createContext({});


function Home(){

    const data = useLoaderData();
    
    return(
        <div>
            <div className="home">
                <img src={homeImg} alt="home"></img>
                <div className="home-detail">
                    <h1>IT MATTERS HOW YOU ASK</h1>
                    <p>
                    MegaQuiz is a web-based Audience Engagement Cloud Platform for hosting interactive quizzes at in-person, virtual, and hybrid events. No app install is required.
                    </p>
                </div>
            </div>
            
            <TopicContext.Provider value={data}>
                <Topics></Topics>
            </TopicContext.Provider>
        </div>  
    );
}

export default Home;