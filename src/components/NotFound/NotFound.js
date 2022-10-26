import React from "react";
import './NotFound.css'
import { faChainBroken } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NotFound(){

    return (
        <div className="notfound">
            <h1 className="notfound-msg">Oops! ...</h1>
            <p>404 NOT FOUND <span><FontAwesomeIcon icon={faChainBroken}></FontAwesomeIcon></span></p>
            
        </div>
    );
}

export default NotFound;