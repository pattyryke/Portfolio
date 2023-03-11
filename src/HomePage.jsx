import React, { useRef, useLayoutEffect } from "react";
import TypeCursor from "./Console";
import { gsap } from "gsap";





const HomePage = () => {
    const title = useRef();
    
    return(
        <div id="container">
            <div className="container">
                <div className="title"> 
                    <TypeCursor />
                </div>
            </div>
            <div className="container">
                <button id="startButton">START</button>
            </div>
        </div>
    )
}


export default HomePage