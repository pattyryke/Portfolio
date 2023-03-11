import gsap from "gsap";
import React, {useRef, useLayoutEffect} from "react";
import Cursor from "./Cursor";
import Console from "./Console"



export function Animate_Type(list) {
    

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {


        }, Console.app);
        return () => ctx.revert();
    }, []);

    return(
        typeTimeline
    );
}
export default Animate_Type