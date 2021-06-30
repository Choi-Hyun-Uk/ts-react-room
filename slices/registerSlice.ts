import { createSlice } from '@reduxjs/toolkit';
import { dataGetItems, dataGetItem, getSaveData, deleteSaveData, dataPostSave } from '../actions/register';

export interface IRoomData {
    pk: string,
    address: string,
    detailAddress: string,
    realEstate: string,
    realEstatePriceType: string,
    depositAmount: number,
    rentAmount: number,
    maintenanceFee: string,
    maintenanceFeeItems: Array<string>,
    floor: string,
    sunlightDirection: string,
    leasableArea: number,
    pet: boolean,
    thumbnail: string,
    canceled: boolean,
    id: number,
}

export interface ISaveData {
    address: string,
    detailAddress: string,
    realEstate: string,
    realEstatePriceType: string,
    depositAmount: number,
    rentAmount: number,
    maintenanceFee: string,
    maintenanceFeeItems: Array<string>,
    floor: string,
    sunlightDirection: string,
    leasableArea: number,
    pet: boolean,
    thumbnail: string,
    canceled: boolean,
    id?: number,
};

export interface InitialState {
    isLoading: boolean,
    registerSaveData : ISaveData | null,
    roomsList: IRoomData[],
    roomItem: IRoomData | null,
    roomUpAndDown: boolean,
}

export const initialState: InitialState = {
    isLoading: false,
    registerSaveData: null,
    roomsList: [],
    roomItem: null,
    roomUpAndDown: false,
};

const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        // 방 등록 데이터 임시 저장하기
        .addCase(dataPostSave.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(dataPostSave.fulfilled, (state, action) => {
            state.isLoading = false;
        })
        .addCase(dataPostSave.rejected, (state, action) => {
            state.isLoading = false;
            state.registerSaveData = null;
        })

        // 방 등록 임시 저장 데이터 불러오기
        .addCase(getSaveData.pending, (state) => {
        })
        .addCase(getSaveData.fulfilled, (state, action) => {
            if (action.payload !== undefined) {
                state.registerSaveData = action.payload;
            }
        })
        .addCase(getSaveData.rejected, (state) => {
            state.registerSaveData = null;
        })
        
        // 방 등록 임시 저장 데이터 삭제하기
        .addCase(deleteSaveData.pending, (state) => {
        })
        .addCase(deleteSaveData.fulfilled, (state) => {
            state.registerSaveData = null;
        })
        .addCase(deleteSaveData.rejected, (state) => {})

        // 전체 데이터 가져오기
        .addCase(dataGetItems.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(dataGetItems.fulfilled, (state, action) => {
            state.roomsList = action.payload;
            state.isLoading = false;
        })
        .addCase(dataGetItems.rejected, (state, action) => {})

        // 데이터 한개 가져오기
        .addCase(dataGetItem.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(dataGetItem.fulfilled, (state, action) => {
            state.roomItem = action.payload;
            state.isLoading = false;
        })
        .addCase(dataGetItem.rejected, (state, action) => {})
    }
});

export default registerSlice;