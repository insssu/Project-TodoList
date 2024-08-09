import React, { Children, useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useAsync } from 'react-select/async';
// props.children을 비구조 할당으로 children 구조분해 
import { IoCellularSharp } from "react-icons/io5";
import { IoIosBatteryFull, IoIosWifi   } from "react-icons/io";
function MainLayout({ children }) {
    const [ clock, setClock ] = useState("0:00");

    useEffect(() => {
        setInterval(()=> {
            const now = new Date();
            const hours = now.getHours();
            const minutes = (now.getMinutes() < 10 ? "0" : "") + now.getMinutes();
            setClock(`${hours}:${minutes}`);
        }, 1000);
    }, []);

    return (
        <div css={s.layout}>
            <div css={s.frame}>
                <div css={s.topBar}>
                    <div css={s.clock}>{clock}</div>
                    <div css={s.topBarCenter}></div>
                    <div css={s.rightItems}>
                        <IoCellularSharp /><IoIosWifi /><IoIosBatteryFull />
                    </div>
                </div>
                { children }
            </div>
        </div>
    );
}

export default MainLayout;