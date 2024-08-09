import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";

function PageAnimaitonLayout({ isShow, children }) {

    return (
        <div css={s.layout(isShow)}>
            { children }
        </div>
    );
}

export default PageAnimaitonLayout;