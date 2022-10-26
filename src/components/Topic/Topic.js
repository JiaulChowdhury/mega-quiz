import React from "react";
import { Link } from "react-router-dom";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Topic.css'

function Topic({data}){

    return(
        <div className="topic-card">
            <img src={data.logo} alt="quiz logo"></img>
            <div className="topic-detail">
                <p>Total Quiz No: {data.total}</p>
                <Link to={`/quiz/${data.id}`}>
                    <button>
                        <div className="btn-style">
                            <span>Start Quiz Now</span>
                            <FontAwesomeIcon icon={faPlay}></FontAwesomeIcon>
                        </div>
                    </button>
                </Link>
            </div>
        </div>
    );

}


export default Topic;