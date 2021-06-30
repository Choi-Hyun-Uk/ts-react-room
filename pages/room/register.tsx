import React, { FC } from 'react';
import RegisterForm from '../../components/register/registerForm';
import { RegisterWrapper } from '../../styles';
import wrapper from '../../store/configureStore';
import { getSaveData, dataGetItem } from '../../actions/register';

interface IProps {
    isSaveData: boolean,
    isUpdate: boolean,
}

const RoomRegisterPage: FC<IProps> = ({ isSaveData, isUpdate }) => {
    return (
        <RegisterWrapper>
            <h1>방 등록</h1>
            <RegisterForm isSaveData={isSaveData} isUpdate={isUpdate} />
        </RegisterWrapper>
    )
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ ...etc }) => {
    if (etc.query && etc.query.id === 'string') {
        const { id } = etc.query;
        await store.dispatch(dataGetItem(id));
    }
    const isSaveData = await store.dispatch(getSaveData());
    return {
        props: {
            isSaveData: Object.keys(isSaveData.payload).length === 0 ? false : true,
            isUpdate: etc.query.id ? true : false,
        }
    }
});

export default RoomRegisterPage;