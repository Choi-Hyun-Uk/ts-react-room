import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001';

export interface IDataPatch {
    id: string,
    content: {
        canceled: boolean,
    }
}

export interface ISavePostData {
    address: string,
    detailAddress: string,
    realEstate: string,
    realEstatePriceType: string,
    depositAmount: number,
    rentAmount: number,
    maintenanceFee: string,
    maintenanceFeeItems: string[],
    floor: string,
    sunlightDirection: string,
    pet: boolean,
    leasableArea: number,
    thumbnail: string,
    canceled: false
}

// 방 등록 데이터 임시저장 -  POST
export const dataPostSave = createAsyncThunk('/register/post/saveData', async (data: ISavePostData) => {
    const response = await axios.post(`/saveRegisterData`, data);
    return response.data;
});

// 방 등록 임시저장 데이터 불러오기 - GET
export const getSaveData = createAsyncThunk('/register/get/saveData', async () => {
    try {
        const response = await axios.get('/saveRegisterData');
        return response.data;
    } catch(error) {
        console.log(error);
    }
});

// 방 등록 임시저장 데이터 삭제 - DELETE
export const deleteSaveData = createAsyncThunk('/register/delete/saveData', async () => {
    try {
        const response = await axios.delete('/saveRegisterData/1');
        return response.data;
    } catch(error) {
        console.error(error);
    }
});

// 방 canceled 상태 변경 - PATCH
export const dataPatch = createAsyncThunk('/room/patch', async (data: IDataPatch) => {
    const response = await axios.patch(`/roomsItem/${data.id}`, data.content);
    return response.data;
});

// 방 데이터 모두 가져오기 - GET
export const dataGetItems = createAsyncThunk('/rooms/items', async () => {
    const response = await axios.get(`/roomsItem`);
    return response.data;
});

// 방 데이터 한 개 가져오기 - GET
export const dataGetItem = createAsyncThunk('/rooms/item', async (data: string) => {
    const response = await axios.get(`/roomsItem/${data}`);
    return response.data;
});

