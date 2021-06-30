import React, { useEffect, FC } from 'react';
import { RiCheckFill } from 'react-icons/ri';
import { ModalContainer, SuccessModalBox } from './styles';

interface IProps {
    modalIsOpen: boolean,
    text: string,
    onClickCheckBtn: () => void,
}

const SuccessModal: FC<IProps> = ({ modalIsOpen, text, onClickCheckBtn }) => {

    useEffect(() => {
        const body = document.getElementsByTagName('body')[0];
        const bodyClass = body.classList.contains('not-scroll');
        if (bodyClass || !modalIsOpen) {
            body.classList.remove('not-scroll');
        } else {
            body.classList.add('not-scroll');
        }
    }, [modalIsOpen]);

    if (!modalIsOpen) return null;

    return (
        <ModalContainer>
            <SuccessModalBox className="modal-content">
                <RiCheckFill className="check-icon" />
                <div className="modal-text">{text}</div>
                <div className="modal-btn"><button onClick={onClickCheckBtn}>확인</button></div>
            </SuccessModalBox>
        </ModalContainer>
    )
}

export default SuccessModal;