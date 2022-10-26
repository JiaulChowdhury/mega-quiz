import React from "react";
import  './Blog.css'

function Blog(){
    return (
        <div className="blogDetails">
            <h1>Blog Details</h1>
            <div className="blogDetails-details">
                <h2>1. What is the purpose of React Router ?</h2>
                <h3>Answer: React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</h3>
            </div>
            <div className="blogDetails-details">
                <h2>2. How does Context API works?</h2>
                <h3>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</h3>
            </div>
            <div className="blogDetails-details">
                <h2>3. What is useref in react?</h2>
                <h3>Essentially, useRef is like a “box” that can hold a mutable value in its .current property. You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React with  myRef, React will set its current property to the corresponding DOM node whenever that node changes.</h3>
            </div>
        </div>
    );
}

export default Blog;