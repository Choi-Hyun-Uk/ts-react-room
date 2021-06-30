import React, { FC, ChangeEvent, FocusEvent } from 'react';

interface IProps {
    address: string,
    detailAddress: string,
    onChangeFormInput: (e: ChangeEvent<HTMLInputElement>) => void,
    inputRef: any,
    onFocusEvent: ((e: FocusEvent<HTMLInputElement>) => void)
}

const Address: FC<IProps> = ({ address, detailAddress, onChangeFormInput, inputRef, onFocusEvent }) => {
    return (
        <li className="form-address">
            <h2>주소입력</h2>
            <div>
                <input type="text" ref={inputRef} name="address" value={address} placeholder="주소검색" onFocus={onFocusEvent} readOnly />
            </div>
            <div>
                <input type="text" name="detailAddress" value={detailAddress} placeholder="상세주소를 입력해주세요." onChange={onChangeFormInput} />
            </div>
        </li>
    )
}

export default Address;