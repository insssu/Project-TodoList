import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import DashboardListItem from '../DashboardListItem/DashboardListItem';
import { IoTodayOutline } from "react-icons/io5";
import Icon from '../Icon/Icon';

function DateTitle(props) {

    // 제대로 만드려면 인터벌을 걸어줘야함. 만드는 도중 하루가 지나면 바뀌도록
    const today = new Date().toLocaleDateString();  

    return (
        <DashboardListItem title={"Today :D"}>
            <div css={s.date}>
                <Icon color={"#087fff"}>
                    <IoTodayOutline />
                </Icon>
                {today}
            </div>
        </DashboardListItem>
    );
}

export default DateTitle;