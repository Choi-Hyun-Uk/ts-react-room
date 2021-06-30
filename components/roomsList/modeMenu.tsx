import React, { FC } from 'react';
import { RoomModeMenu } from './styles';

interface IProps {
    mode: boolean,
    onClickDownRoom: () => void,
    onClickUpRoom: () => void
}

const ModeMenu: FC<IProps> = ({ mode, onClickDownRoom, onClickUpRoom }) => {
    
    return (
        <RoomModeMenu>
            <button className={mode ? 'active' : ''} onClick={onClickDownRoom}>올린방</button>
            <button className={mode ? '' : 'active'} onClick={onClickUpRoom}>내린방</button>
        </RoomModeMenu>
    )
}

export default ModeMenu;