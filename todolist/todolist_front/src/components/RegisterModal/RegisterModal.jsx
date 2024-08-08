import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import ReactModal from 'react-modal';
import { useRecoilState } from 'recoil';
import { registerModalAtom } from '../../atoms/modalAtoms';
import RegisterTodo from '../RegisterTodo/RegisterTodo';
ReactModal.setAppElement("#root");

function RegisterModal({ containerRef }) {

    const [ isOpen, setOpen ] = useRecoilState(registerModalAtom);
    const [ animation, setAnimation ] = useState("registerModalContentOpen")

    const closeModal = () => {
        setAnimation("registerModalContentClose");
        setTimeout(() => {
            setAnimation("registerModalContentOpen");
            setOpen(false);
        }, 500);
    }

    return (
        <div>
            <ReactModal 
                style={{
                    // 모달창을 휴대폰 화면 안으로 넣는 것
                    overlay: {
                        position: "absolute",
                        backgroundColor: "transparent",
                    },
                    // 모달창 스타일 
                    content: {
                        inset: "auto 0 0",
                        // inset은 padding이나 margin처럼 안쪽으로 네 방향을 넣어줄 수 있음
                        boxSizing: "border-box",
                        borderRadius: "10px",
                        padding: "0",
                        width: "100%",
                        height: "80%",
                        backgroundColor: "lightgreen", 
                        animation: `${animation} 0.6s 1`,
                    },
                }}
                isOpen={isOpen}
                onRequestClose={closeModal}
                ariaHideApp={false}
                parentSelector={() => containerRef.current} // 리턴해주는 엘리먼츠가 부모가 되는 것
            >
                <RegisterTodo closeModal={closeModal} />
            </ReactModal>
        </div>
    );
}

export default RegisterModal;