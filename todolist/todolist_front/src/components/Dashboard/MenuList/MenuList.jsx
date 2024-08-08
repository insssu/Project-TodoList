import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import DashboardListItem from '../DashboardListItem/DashboardListItem';
import Icon from '../Icon/Icon';
import { BsCalendar4Week, BsCalendar4Event } from "react-icons/bs";

function Menu({ icon, color, title, count }) {
    return (
        <div css={s.menuContainer}>
            <div css={s.menuTop}>
                <Icon color={color}>{icon}</Icon>
                <p>{count}</p>
            </div>
            <h3 css={s.menuBottom}>
                {title}
            </h3>
        </div>
    )
}

function MenuList(props) {
    return (
        <DashboardListItem title={"Menu :D"}>
            <div css={s.layout}>
                <Menu 
                    icon={<BsCalendar4Week />} 
                    color={"#444444"} 
                    title={"전체"} 
                    count={99} />                
                <Menu 
                    icon={<BsCalendar4Event />} 
                    color={"#46e94e"} 
                    title={"오늘"} 
                    count={6} />  
                <Menu 
                    icon={<BsCalendar4Event />} 
                    color={"#e61616"} 
                    title={"급한 일"} 
                    count={10} />  
                <Menu 
                    icon={<BsCalendar4Event />} 
                    color={"#8d1b9c"} 
                    title={"중요한 일"} 
                    count={31} />  
                <Menu 
                    icon={<BsCalendar4Event />} 
                    color={"#444444"} 
                    title={"전체"} 
                    count={99} />  
            </div>
        </DashboardListItem>
    );
}

export default MenuList;