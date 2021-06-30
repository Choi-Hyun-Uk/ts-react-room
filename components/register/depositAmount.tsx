import React, { FC, ChangeEvent } from 'react';
import { DepositAmountBox } from './styles';

interface IProps {  
    realEstatePriceType: string,
    depositAmount: number,
    onChangeFormInput: (e: ChangeEvent<HTMLInputElement>) => void,
    rentAmount: number,
}

const DepositAmount: FC<IProps> = ({ 
    realEstatePriceType,
    depositAmount,
    onChangeFormInput,
    rentAmount,
    }) => {
    return (
        <li>
            <h2>가격정보</h2>
            <DepositAmountBox>
                <div>
                    { realEstatePriceType === 'MONTHLY' && <p>보증금</p> }
                    { realEstatePriceType === 'JEONSE' && <p>전세가</p> }
                    { realEstatePriceType === 'SELLING' && <p>매매가</p> }
                    <input type="text" name="depositAmount" value={depositAmount} onChange={onChangeFormInput} />
                </div>
                { realEstatePriceType === 'MONTHLY' && 
                    <div>
                        <p>월세</p>
                        <input type="text" name="rentAmount" value={rentAmount} onChange={onChangeFormInput} />
                    </div>
                }
            </DepositAmountBox>
        </li>
    )
}

export default DepositAmount;