import React, {useRef, useLayoutEffect, Children} from "react";
import {v4 as uuid} from "uuid";
import $ from "jQuery";
function GetUniqueID() {
    const short_unique_id = uuid().slice(0.5); //.slice(0,8)
    const complete_unique_id = ('#'+short_unique_id);
    return (complete_unique_id);
}

const Cursor = () => {
    const app = useRef();
    const cursor = useRef();
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {gsap.to(cursor.current, {opacity: 0, ease: "power2.inOut", repeat: -1});
        }, app);
        return () => ctx.revert();
    }, []);
    return <div className="#cursor" ref={cursor}>_</div>;
}






export function ConsoleMessageList(props) {
    const el = useRef();
    const consoleMessages = props.consoleMessages;

    const consoleMessageList = consoleMessages.map((message, index) =>
    <ConsoleMessageItem key={message.toString()}
                        id ={index}
                        value={message} />
    );
    return <ul className="consoleList" ref={el}>{consoleMessageList}</ul>;
}

export function ConsoleMessageItem(props) {
    return (
        <li className="consoleText">
            {props.value}
            <Cursor />
        </li>
    );
}

const consoleMessages = [
    "Welcome to PatrickCapovilla.com",
    "Let's begin, shall we?",
    "Are you ready? (Y/N)",
    ">"
];


export function Console(props) {
    const crt = useRef();
    const app = useRef();
  
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {

            let crtFlicker = gsap.fromTo(crt.current, {opacity: 0.96, zIndex: 2, repeat: -1, duration: 0.15}, {duration: 1, opacity: 0.94});
            let crtTextShadow = gsap.fromTo(crt.current, { textShadow: "-3px 1px 3px red, 3px -1px 3px blue, 0 0 3px", duration: 0.2, ease: "steps.inOut" }, { textShadow: "-1px 0px 1px red, 1px 0px 1px blue, 0 0 2px" });
            let typeTimeline = gsap.timeline();
            $.when($(document).ready).then(function() {
                $('ul').each(function(i) {
                    if ($(this).is(".consoleText")) {
                        let cursorAnimation = gsap.fromTo(Cursor.current, 
                            {opacity: 0, autoAlpha: 0, x: 2}, 
                            {opacity: 1, autoAlpha: 1, duration: 0.6, repeat: -1, yoyo: true});
                        let typeWord = gsap.to($(this), {opacity: 1, text: {value: item.value}, duration: 2, delay: 1});
                        let cursorFadeOut = gsap.to(Cursor.current, {opacity: 0, duration: 1});
                        
                        typeTimeline.add(typeWord)
                        typeTimeline.add(cursorFadeOut)
            
                    }
                });
            });
            let crtEffect = gsap.timeline({ repeat: -1, repeatDelay: 1.3, yoyo: true })
                crtEffect.add(crtTextShadow),
                crtEffect.add(crtFlicker), "<0.8";


            let masterTL = gsap.timeline()
                masterTL.add(crtEffect),
                masterTL.add(typeTimeline);
            
            masterTL.play();
        }, app);
        return () => ctx.revert();
    }, []);


    return (
        <div ref={app}>
            <div ref={crt} id='tvcontainer'>
                <ConsoleMessageList consoleMessages={consoleMessages} />
            </div>
        </div>
    );
}
export default Console