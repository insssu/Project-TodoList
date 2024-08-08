import React, { Children, useCallback, useEffect, useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import RegisterModal from '../RegisterModal/RegisterModal';

function MainContainer({children}) {

    const [ modalElement, setModalElement ] = useState(<></>);
    const containerRef = useRef();

    // const [ scroll, setScroll ] = useState({
    //     startY: 0,
    //     isDown: false
    // });

    useEffect(() => {
        if(!!containerRef) {
            setModalElement(<RegisterModal containerRef={containerRef} />)
        }
    }, [containerRef])

    // useEffect(() => {
    //     if(!!containerRef) {

    //     }
    // }, [containerRef])

    // const handleDown = useCallback((e) => setScroll({
    //     startY: e.clickY,
    //     isDown: true
    // }), []);

    // const handleUp = useCallback((e) => setScroll({
    //     startY: 0,
    //     isDown: false
    // }), []);

    // const handleMove = (e) => { setMouseDown(false) 
    //     if(scroll.isDown) {
    //         const moveY = e.clientY - scroll.startY
    //         console.log({s: containerRef.current})
    //         const scrollTop = containerRef.current.scrollTop;
    //         containerRef.current.scrollTop = scrollTop + moveY * -2;
    //     }
    // }

    // const handle = (e) => {
    //     console.log(e.scrollY);
    // }

    return (
        <div css={s.container} 
            // onMouseDown={handle}
            // onMouseMove={ handleMove }
            // onMouseDown={ handleDown }
            // onMouseUp={ handleUp }
            ref={containerRef} >
            {modalElement}
            {children}
        </div>
    );
}

export default MainContainer;