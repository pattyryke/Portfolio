import React, {useRef, useLayoutEffect} from "react";


export const Cursor = () => {
    const app = useRef();
    const cursor = useRef();
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.to(cursor.current, {opacity: 0, ease: "power2.inOut", repeat: -1});
        }, cursor);
        return () => ctx.revert();
    }, []);
    return <div className="#cursor" ref={cursor}>_</div>;
}
export default Cursor