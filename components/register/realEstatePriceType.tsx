import React, { FC, ChangeEvent } from 'react';
import { RealEstatePriceTypeBox } from './styles';

interface IProps {
    onChangeRealEstate: (e: ChangeEvent<HTMLInputElement>) => void,
    realEstatePriceType: string, 
}

const RealEstatePriceType: FC<IProps> = ({ onChangeRealEstate, realEstatePriceType }) => {
    return (
        <li className="form-priceType">
            <h2>가격 (택1)</h2>
            <RealEstatePriceTypeBox>
                <div>
                    <input type="radio" id="monthly" name="realEstatePriceType" value="MONTHLY" onChange={onChangeRealEstate} checked={realEstatePriceType === 'MONTHLY'} />
                    <label htmlFor="monthly">월세</label>
                </div>
                <div>
                    <input type="radio" id="jeonse" name="realEstatePriceType" value="JEONSE" onChange={onChangeRealEstate} checked={realEstatePriceType === 'JEONSE'} />
                    <label htmlFor="jeonse" >전세</label>
                </div>
                <div>
                    <input type="radio" id="selling" name="realEstatePriceType" value="SELLING" onChange={onChangeRealEstate} checked={realEstatePriceType === 'SELLING'} />
                    <label htmlFor="selling">매매</label>
                </div>
            </RealEstatePriceTypeBox>
        </li>
    )   
}

export default RealEstatePriceType;