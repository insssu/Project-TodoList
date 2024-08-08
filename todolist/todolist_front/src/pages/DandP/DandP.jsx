import { css } from '@emotion/react';
import React from 'react';
/** @jsxImportSource @emotion/react */

const parent = css` 
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    margin: 50px auto;
    border: 1px solid #dbdbdb;
    padding: 10px;
    width: 800px;
    height: 400px;

`;

const parent2 = css` 
    display: flex;
    flex-wrap: nowrap;
    box-sizing: border-box;
    margin: 50px auto;
    border: 1px solid #dbdbdb;
    padding: 10px;
    width: 800px;
    height: 400px;

`;

const child = css`
    box-sizing: border-box;
    border: 4px solid aqua;
    width: 150px;
    height: 50px;
    background-color: white;
    &:nth-of-type(1) {
        background-color: #c0ffd0;
        align-self: flex-start;
    }
    &:nth-of-type(3) {
        background-color: pink;
        align-self: flex-end;
    }
    &:nth-of-type(5) {
        background-color: #c0ffd0;
        align-self: flex-start;
    }
`;

const child2 = css`
    box-sizing: border-box;
    border: 4px solid lightgreen;
    width: 400px;
    height: 100%;
    background-color: white;
    flex-shrink: 0;

    &:nth-of-type(1) {
        background-color: yellow;
        flex-shrink: 2;
    }
    &:nth-of-type(2) {
        background-color: green;
        flex-shrink: 1;
    }
    &:nth-of-type(3) {
        background-color: purple;
    }
`;

const inputBox = css`
    position: relative;
`;

const input = css`
    width: 300px;
    height: 50px ;
    padding-right: 80px;
    & + button {
        /* transform: translateY(-50%);
        position: absolute;
        top: 50%;
        right: 10px;
        background-color: lightblue;
        z-index: 0; */
        position: relative;
        /* transform: translateX(-100%); */
        transform: rotate(160deg);
        top: 10px;
        right: 110px;
        /* bottom: 20px; */
        background-color: lightblue;
    }
`;





function DandP(props) {
    return (
        <>
            <div css={parent}>
                
                <div css={child}>1</div>
                <div css={child}>2</div>
                <div css={child}>3cvcv</div>
                <div css={child}>4cvcvcv</div>
                <div css={child}>5</div>
                <div css={inputBox}> 
                    <input type="text" css={input}/>
                    <button>OK</button>
                </div>
            </div>
            <div css={parent2}>
                <div css={child2}></div>
                <div css={child2}></div>
                <div css={child2}></div>
            </div>
        </>

    );
}

export default DandP;