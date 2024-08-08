import { css } from "@emotion/react";

export const searchInputBox = css`
    position: relative;
    display: flex;
    margin-bottom: 10px;
    width: 100%;

    & > svg {
        position: absolute;
        top: 50%;
        left: 7px;
        transform: translateY(-50%);
        font-size: 20px;
        color: #666666;
    }

    & > input {
        flex-grow: 1;
        outline: none;
        border: none;
        border-radius: 8px;
        padding: 0px 10px 0px 35px;
        width: 100%;
        height: 35px;
        background-color: #dddddd;
        transition: width 0.5s ease-in-out;
        
        &:focus {
            width: 80%;
        }

        &:focus + button {
            // opacity : 투명도 1은 완전히, 0은 안보이게
            /* opacity: 1; */
            width: 20%;
        }
    }

    & > button {
        transition: width 0.5s ease-in-out;
        padding: 0;
        width: 0;
        white-space: nowrap;  //button의 '취소'글자가 세로로 되는것을 막아줌
        overflow: hidden;
    }
`;